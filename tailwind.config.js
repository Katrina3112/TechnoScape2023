/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
        colors: {
            cBgDark: "#010101",
            cBlack: "#0A0A0A",
            cWhite: "#F4F4F4",
            cYellow: "#F9F007",
            cYellow2: "#FFFD96",
            cYellow3: "#FFF52F",
            cRed2: "#F93636",
            cRed3: "#FF6E6E",
            cBlue2: "#246FFF",
            cBlue3: "#003FBA",
            cGreen2: "#36F96D",
            cGreen3: "#6EFF96",
            cGrey: "#F4F4F41A",
            transparent: "transparent",
        },
        boxShadow: {
            bsInput: "5px 7px 25px 5px rgba(213, 213, 213, 0.16)",
            bsBtn: "5px 7px 25px 5px rgba(32, 108, 255, 0.4)",
            bsYellowBtn: "0px 0px 12px 2px #FFFD96",
            bsRedBtn: '0px 0px 12px 2px #FF3E3E',
            bsBlueBtn: "0px 0px 12px 2px #246FFF",
        },
        extend: {
            backgroundImage: {
                cLinearGradientBg:
                    "radial-gradient(763.89% 1810.97% at -18.02% 50%, #010101 0%, #454545 100%)",
                cLinearGradientRed:
                    "linear-gradient(90.13deg, #FF4040 1.12%, #CB1515 100%)",
                cLinearGradientBlue:
                    "linear-gradient(90.13deg, #206CFF 0%, #0000FB 99.97%)",
                cLinearGradientYellow:
                    "linear-gradient(90deg, #FFFD96 0%, #FFF52F 100%)",
                cLinearGradientBtn:
                    "linear-gradient(96.72deg, #246FFF -0.05%, #075BFF 64.08%, #003FBA 113.46%)",
                cLinearGradientProfile:
                    "linear-gradient(308.02deg, #FFF52F 10%, #F93636 57.26%, #2F76FF 110.63%)",
                cLinearGradientBtnBlue:
                    "linear-gradient(to right, #246FFF, #003FBA, #246FFF)",
                cLinearGradientBtnYellow:
                    "linear-gradient(to right, #FFFD96, #FFF52F, #FFF74D)",
                cLinearGradientBtnRed:
                    "linear-gradient(to right, #FF6E6E, #F93636, #FF6E6E)",
                cLinearGradientProfileBot:
                    "linear-gradient(to top, #FFF52F, #F93636, #2F76FF)",
            },
            fontFamily: {
                YSBlack: ["YSBlack"],
                YSBold: ["YSBold"],
                YSDarkBlack: ["YSDarkBlack"],
                YSDarkBold: ["YSDarkBold"],
                YSDarkExtraBold: ["YSDarkExtraBold"],
                YSDarkLight: ["YSDarkLight"],
                YSDarkMedium: ["YSDarkMedium"],
                YSDarkRegular: ["YSDarkRegular"],
                YSDarkSemiBold: ["YSDarkSemiBold"],
                YSExtraBold: ["YSExtraBold"],
                YSLight: ["YSLight"],
                YSMedium: ["YSMedium"],
                YSRegular: ["YSRegular"],
                YSSemiBold: ["YSSemiBold"],
                ABigDeal: ["ABigDeal"],
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-16px)" },
                },
            },
            animation: {
                "float-slow": "float 5s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
