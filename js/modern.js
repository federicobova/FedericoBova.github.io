(function () {
  var glow = document.getElementById('cursorGlow');
  if (glow) {
    window.addEventListener('mousemove', function (e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  var revealEls = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  }, { threshold: 0.18 });
  revealEls.forEach(function (el) { io.observe(el); });

  var tiltEls = document.querySelectorAll('.tilt');
  tiltEls.forEach(function (el) {
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      var x = e.clientX - r.left;
      var y = e.clientY - r.top;
      var rx = ((y / r.height) - 0.5) * -8;
      var ry = ((x / r.width) - 0.5) * 8;
      el.style.transform = 'perspective(600px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-2px)';
    });
    el.addEventListener('mouseleave', function () {
      el.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateY(0)';
    });
  });


  var caveTrigger = document.getElementById('internetCaveLink');
  if (caveTrigger) {
    caveTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      var links = [
        'https://en.wikipedia.org/wiki/Internet',
        'https://www.archive.org/',
        'https://www.wolframalpha.com/',
        'https://github.com/federicobova'
      ];
      var randomUrl = links[Math.floor(Math.random() * links.length)];
      window.open(randomUrl, '_blank', 'noopener,noreferrer');
    });
  }

  var year = document.getElementById('displayDate');
  if (year) year.textContent = new Date().getFullYear();
})();
