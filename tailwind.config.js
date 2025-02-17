/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1232px',
        '2xl': '1232px'
      }
    }
  },
  plugins: []
}
