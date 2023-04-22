/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        gradiantText: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      animation: {
        gradiantText: 'gradiantText 5s ease-in-out infinite',
      },

      colors: {
        purple: '#A491D3',
        blue: '#668FD5'
      },
    },
    plugins: [],
  },
}
