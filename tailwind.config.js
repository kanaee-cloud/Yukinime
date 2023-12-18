module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Poppins',
      tertiary: 'Poppins'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        site: "#212A3E",
        primary: '#0a0a0a',
        accent: '#F9D949',
        footer: "#21325E"
      },
      backgroundImage: {
        header:"url(./assets/top.png)"
      }
    },
  },
  plugins: [],
};
