/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  ontFamily: {
    saira: ['Saira Condensed', 'sans-serif'],
    calabacin: ["Calabacín", " cursive"],
   orbitron: ['Orbitron', 'sans-serif'],
   dancing : ['Dancing Script',' cursive'],
   
  },



  plugins: [

      require('flowbite/plugin')
  
  ],
}
