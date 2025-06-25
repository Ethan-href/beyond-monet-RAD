let fontSizes = {};
let spacing = {};
for (let i = 0; i < 200; i++) {
  fontSizes[i] = i + "px";
  spacing[i] = i + "px";
}

module.exports = {
  content: require("fast-glob").sync(["./*.html"]),
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 420px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      "md-lg": "830px",
      // => @media (min-width: 830px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1600px",
      // => @media (min-width: 1600px) { ... }
    },
    spacing: spacing,
    fontSize: fontSizes,
    lineHeight: {
      0.1: "0.1",
      0.2: "0.2",
      0.3: "0.3",
      0.4: "0.4",
      0.5: "0.5",
      0.6: "0.6",
      0.7: "0.7",
      0.8: "0.8",
      0.9: "0.9",
      1: "1",
      1.1: "1.1",
      1.2: "1.2",
      1.3: "1.3",
      1.4: "1.4",
      1.5: "1.5",
      1.6: "1.6",
      1.7: "1.7",
      1.8: "1.8",
      1.9: "1.9",
      "2.0": "2.0",
    },
    extend: {
      fontFamily: {
        archivo: ["archivo-expanded", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
