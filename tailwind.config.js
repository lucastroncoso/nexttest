module.exports = {
  purge: {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}','./src/components/**/*.{js,ts,jsx,tsx}'],
    safelist: [
      'w-1/4',
      'w-2/4',
      'w-3/4',
      'w-4/4'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
