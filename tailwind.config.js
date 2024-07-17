const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const {
  tjClassNames,
  tjTheme,
  tjPlugin,
} = require('tailwind-joy/tw-extension');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', { raw: tjClassNames }],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)', ...fontFamily.sans],
      },
      colors: tjTheme.colors,
      keyframes: tjTheme.keyframes,
      animation: tjTheme.animation,
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant(
        'non-touchscreen',
        '@media (hover: hover) and (pointer: fine)',
      );
    }),
    tjPlugin,
  ],
};
