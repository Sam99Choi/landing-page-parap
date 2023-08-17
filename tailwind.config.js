/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {   
      primary100:'#d760c7',
      secondary100: '#3dd8d0',
      white: '#fff',
      body:'#626263',
      black:'#000',
      footer: '#D9D9D9',
      bgdark: '#202020',
      textdark:'rgba(255, 255, 255, 0.40)',
    },
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
  
}
