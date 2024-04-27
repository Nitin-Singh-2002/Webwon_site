const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
    theme: {
      extend: {
        screens: {
          'ls': '1082px',
          // => @media (min-width: 992px) { ... }
        },
      },
    },
  plugins: [
    flowbite.plugin(),
  ],
}

