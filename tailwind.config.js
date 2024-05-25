/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    colors: {
      cBgDark: '#010101',
      cBlack: '#0A0A0A',
      cWhite: '#F4F4F4',
      cYellow: '#F9F007',
      tcRed: '#FF3E3E',
      tcBlue: '#075BFF',
      transparent: 'transparent',
    },
    boxShadow: {
      'bsInput': '5px 7px 25px 5px rgba(213, 213, 213, 0.16)',
      'bsBtn': '5px 7px 25px 5px rgba(32, 108, 255, 0.4)',
      'tcBtnRed': '0px 0px 12px 2px #FF3E3E',
      'tcBtnBlue': '0px 0px 12px 2px #246FFF',
  },
    extend: {
      backgroundImage: {
        cLinearGradientBg: 'radial-gradient(763.89% 1810.97% at -18.02% 50%, #010101 0%, #454545 100%)',
        cLinearGradientRed: 'linear-gradient(90.13deg, #FF4040 1.12%, #CB1515 100%)',
        cLinearGradientBlue: 'linear-gradient(90.13deg, #206CFF 0%, #0000FB 99.97%)',
        cLinearGradientBtn: 'linear-gradient(96.72deg, #246FFF -0.05%, #075BFF 64.08%, #003FBA 113.46%)',
        tcLinearGradientWhiteRed: 'linear-gradient(270deg, #F93636 0%, #FF6E6E 100%) ',
        tcLinearGradientWhiteRedWhite: 'linear-gradient(to right, #FF6E6E, #F93636, #FF6E6E) ',
        tcLinearGradientRedWhite: 'linear-gradient(270deg, #FF6E6E 0%, #F93636 100%) ',
        tcLinearGradientBlue: 'linear-gradient(to right, #246FFF, #003FBA, #246FFF)',
        tcBackground: "url('/public/assets/techno-conference/tc-bg.svg')",
        tcLinearGradient: "linear-gradient(270deg, #F93636 0%, #FF6E6E 200%)",
        hackLinearGradient: "linear-gradient(95.42deg, #246FFF 8.59%, #075BFF 66.82%, #003FBA 111.66%)",
        taLinearGradient: "linear-gradient(89.97deg, #FFFD96 -134.04%, #FFF52F 99.98%)",
        relasiBackground: "url('/public/assets/hackathon/Relasi.png')",
        mentoringBackground: "url('/public/assets/hackathon/Mentoring.png')",
        keterampilanBackgrouond: "url('/public/assets/hackathon/Keterampilan.png')",
        cvBackground: "url('/public/assets/hackathon/CV.png')",
      },
      fontFamily: {
        'YSBlack': ['YSBlack'],
        'YSBold': ['YSBold'],
        'YSDarkBlack': ['YSDarkBlack'],
        'YSDarkBold': ['YSDarkBold'],
        'YSDarkExtraBold': ['YSDarkExtraBold'],
        'YSDarkLight': ['YSDarkLight'],
        'YSDarkMedium': ['YSDarkMedium'],
        'YSDarkRegular': ['YSDarkRegular'],
        'YSDarkSemiBold': ['YSDarkSemiBold'],
        'YSExtraBold': ['YSExtraBold'],
        'YSLight': ['YSLight'],
        'YSMedium': ['YSMedium'],
        'YSRegular': ['YSRegular'],
        'YSSemiBold': ['YSSemiBold'],
        'ABigDeal': ['ABigDeal']
    },
    spacing: {
      '689': '689px',
      '226': '226px',
      '180': '180px',
      '400': '400px',
      '150': '150px',
      '100': '100px',
      '200': '200px',
    },
    keyframes: {
      float: {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-16px)" },
      },

      slideLeft: {
        "from": { transform: "translateX(0)" },
        "to": { transform: "translateX(calc(18rem * 7))" }
      },
    },
    animation: {
      "float-slow": "float 5s ease-in-out infinite",
      "slide-left": "slideLeft 20s infinite linear",
    },
    },
  },
  plugins: [],
}
