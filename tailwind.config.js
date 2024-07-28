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
    spacing: {
      px: '1px',
      0: '0px',
      ...Object.fromEntries(
        [...Array(400)].map((_, index) => {
          const pixel = 1 + index;

          return [pixel, `${pixel / 16}rem`];
        }),
      ),
    },
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
