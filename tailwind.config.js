module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'link': '#b3b3b3',
        'active-color': '#282828',
        'likedSongsIcon-gradientFrom' : '#450af5',
        'likedSongsIcon-gradientTo' : '#c4efd9',
        'footer-background': '#181818',
        'footer-border-color': '#282828',
        'shuffle-color' : '#1db954',
        'navbar-bgcolor': '#50060a',
        'range-hover-color': '#1db954',
        'navbar-btn-hover-bground' : '#000000b3',
        'navbar-btn-bground' : '#160304',
        'body-background' : '#121212',
        'header-items-bground' : '#ffffff1a',
        'body-content' : '#181818'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
