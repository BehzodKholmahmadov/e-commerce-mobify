/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
'md':{'max':'800px'},
'sm':{'max':'400px'},
    },
    extend: {
      boxShadow:{
        'mine':'0 0 4pxrgba(0, 0, 0, 0.25); '
      },
      keyframes:{
        pause:{
          from:{transform:'translateX(0)'},
          to:{transform:'translateX(100px)'}
        }
      },
      keyframes:{
        marquee:{
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)'}
        }
      },
      animation:{
        marquee:'marquee 10s linear infinite',
        marquees:'marquee 15s linear infinete',
        pause:'pause 100s linear infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
