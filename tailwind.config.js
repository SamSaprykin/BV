module.exports = {
  darkMode: "class",
  purge: {
    content: ["./src/**/*.js"],
    options: {
      whitelist: ["is-active", "bg-prbred", "has-scroll-smooth", "baseline"],
    },
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px",
    },
    fontSize: {
      "2xs": ".45rem",
      xs: ".65rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "32px",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.4375rem",
      "7xl": "5.65rem",
      "8xl": "8rem",
      "9xl": "11.5rem",
      headingL: "52px",
    },

    extend: {
      fontFamily: {
        sans: ["Forma DJR", "sans-serif"],
      },
      transitionDuration: {
        2000: "2000ms",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        mainGreen: "#40e640",
        "gray-testimonial": "var(--gray-color)",
        "regal-blue": "#243c5a",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        footer: "minmax(auto, 1fr) minmax(auto, 1fr) 220px",
        caseLayout: "2fr 1fr",
      },
      gridTemplateRows: {
        10: "repeat(10, minmax(0, 10fr))",
        11: "repeat(11, minmax(0, 11fr))",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      borderColor: {
        primary: "var(--color-borderColorItem)",
      },
      height: {
        half: "50%",
      },
      width: {
        "27vw": "28vw",
      },
      maxWidth: {
        "2xs": "16rem",
      },
      spacing: {
        14: "3.55rem",
        18: "4.45rem",
        22: "5.25rem",
        28: "6.65rem",
        30: "7rem",
        38: "9rem",
        46: "11rem",
        72: "19.5rem",
        128: "24rem",
      },
      lineHeight: {
        negative: "0.7",
        slightnegative: "0.9",
        extratight: "1.1",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      translate: {
        neg50: "-50%",
      },
      rotate: {
        neg90: "-90deg",
      },
    },
  },
  variants: {
    textDecoration: ["responsive", "hover", "focus", "active", "group-hover"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  corePlugins: {
    container: false,
  },
};
