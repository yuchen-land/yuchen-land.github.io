/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'GenYoGothic'", "'Noto Sans TC'", "sans-serif"],
      },
      colors: {
        // 粉色系主題色
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
      },
      // 統一過渡時間
      transitionDuration: {
        DEFAULT: '300ms',
      },
      // 常用背景漸層
      backgroundImage: {
        'gradient-page': 'linear-gradient(to bottom right, rgb(253 242 248), rgb(255 241 242), rgb(255 247 237))',
        'gradient-card': 'linear-gradient(to bottom right, rgb(253 242 248 / 0.7), rgb(255 255 255 / 0.7))',
        'gradient-btn-primary': 'linear-gradient(to right, rgb(244 63 94), rgb(236 72 153))',
      },
      // 常用陰影
      boxShadow: {
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
}
