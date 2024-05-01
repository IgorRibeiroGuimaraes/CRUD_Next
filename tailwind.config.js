/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/page/api/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
    ]
  },

  theme: {
    extend: {},
  },
  plugins: [],
}