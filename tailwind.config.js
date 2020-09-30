module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    fontFamily: {
      'primary-font': ['helvetica'],
    },
    extend: {
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
      }
      colors: {
        'ferrari-red': '#c4151c',
      }
    },
  },
  variants: {},
  plugins: [],
}
