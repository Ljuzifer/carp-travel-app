/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        "postcss-import": {}, //add css @import on top only
        tailwindcss: {},
        autoprefixer: {},
    },
};

export default config;
