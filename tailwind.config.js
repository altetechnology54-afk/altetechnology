/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#366c95',
                    light: '#4a8dbd',
                    dark: '#244a69',
                },
                accent: '#c91e1e',
                'bg-sky': '#f0f7ff',
            },
            fontFamily: {
                outfit: ['var(--font-outfit)', 'sans-serif'],
            },
            borderRadius: {
                '3xl': '24px',
            }
        },
    },
    plugins: [],
}
