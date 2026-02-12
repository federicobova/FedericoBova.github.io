const CONFIG = {
    valentineName: "Bea",
    pageTitle: "Bea, speciale San Valentino",
    beaFunko: {
        enabled: true,
        imageCandidates: ["images/bea-valentina.png"],
        badgeText: "Edizione Cupido Caotico",
        moods: [
            "Modalita: ti prendo in giro con affetto",
            "Modalita: regina dei meme romantici",
            "Modalita: boss fight di San Valentino"
        ]
    },

    floatingEmojis: {
        hearts: ["\uD83D\uDE0F", "\uD83D\uDD25", "\u2728", "\uD83C\uDFAF", "\uD83E\uDD23"],
        bears: ["\uD83D\uDC3C", "\uD83E\uDD8A", "\uD83D\uDC38"]
    },

    questions: {
        first: {
            text: "Bea, confermi che sei ufficialmente una leggenda di San Valentino?",
            yesBtn: "Ovvio",
            noBtn: "Mmm...",
            secretAnswer: "Ammetto tutto, ma solo se mi offri uno snack"
        },
        second: {
            text: "Quanto sei competitiva in modalita San Valentino?",
            startText: "Sono chill, giuro",
            nextBtn: "Vai al round finale"
        },
        third: {
            text: "Accetti la sfida speciale San Valentino: meme battle + drink + prese in giro?",
            yesBtn: "Sfida accettata",
            noBtn: "Scappo (forse)"
        }
    },

    loveMessages: {
        extreme: "Cupido e in panico: livello boss finale sbloccato.",
        high: "Livello altissimo. San Valentino, ma senza smancerie.",
        normal: "Buon inizio. Cuoricini ok, ora alza il livello."
    },

    celebration: {
        title: "Perfetto. Bea domina lo speciale San Valentino!",
        message: "Premio: risate, battute pessime e mini dose di romanticismo ironico.",
        emojis: "\uD83E\uDD23\uD83D\uDD25\uD83C\uDFAE\uD83D\uDC98\u2728\uD83D\uDE0E"
    },

    colors: {
        backgroundStart: "#ffd166",
        backgroundEnd: "#ef476f",
        buttonBackground: "#118ab2",
        buttonHover: "#0f7a9d",
        textColor: "#073b4c"
    },

    animations: {
        floatDuration: "14s",
        floatDistance: "55px",
        bounceSpeed: "0.45s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "Play",
        stopText: "Stop",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
