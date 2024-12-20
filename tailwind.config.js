/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#093953',
        'background-button': '#004282',
      },
      boxShadow: {
        custom: '0px 10px 30px 0px #D9D9D9',
        counsel: '0px 5px 12px 0px #7A7A7A3B',
        bocs: '0px 4.94px 4.94px 0px #7A7A7A80',
        intense: '37.27px 31.53px 15.29px -3.82px #00000040',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
