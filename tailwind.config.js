/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "6xl": ["72px", "82px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      colors: {
        primary: "#005864",
        secondary: "#1C8998",
        "dark-gray": "#2C2C2C",
        "slate-gray": "#707072",
        "pale-blue": "#e5eeef",
        "primary-400": "rgba(0, 88, 100, 0.5)",
        "primary-200": "rgba(0, 88, 100, 0.2)",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "white-200": "rgba(255, 255, 255, 0.50)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fascinate: ["Fascinate Inline", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('/images/hero-background.svg')",
        card: "url('/images/popular-product-background.svg')",
        banner: "url('/images/banner-background.svg')",
        blogCard: "url('/images/blog-card-background.svg')",
        shop: "url('/images/shop-background.svg')",
        productCard: "url('/images/product-card-background.svg')",
      },
      screens: {
        wide: "1440px",
        xs: "576px",
      },
    },
  },
  plugins: [],
};
