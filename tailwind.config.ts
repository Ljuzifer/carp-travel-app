import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "header-gradient":
                    "linear-gradient(180deg, rgba(0, 24, 38, 0.5) 0%, rgba(0, 37, 49, 0.00) 100%)",
                "offer-select": 'url("/icons/offer-select.svg")',
                invalid: 'url("/icons/invalid.svg")',
            },

            backgroundColor: {
                "menu-background": "rgba(1, 10, 5, 0.75)",
                "join-button": "rgba(255, 255, 255, 0.1)",
                "join-btn-tablet": "rgba(255, 255, 255, 0.05)",
                "join-btn-hover": "rgba(255, 255, 255, 0.2)",
            },

            backdropBlur: {
                filter: "50px",
            },
        },

        screens: {
            "sm-mob": "320px",
            "lg-mob": "480px",
            tab: "768px",
            desk: "1280px",
        },
    },
    plugins: [],
};
export default config;
