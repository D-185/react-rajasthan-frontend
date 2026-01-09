/** @type {import('tailwindcss').Config} */
execute: async () => {
  const config = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    corePlugins: {
      preflight: false, // Disable Tailwind's base/reset styles
    },
    theme: {
      extend: {},
    },
    plugins: [require('tailwindcss-animate')],
  };
  return config;
}
