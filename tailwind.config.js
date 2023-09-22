/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ghostWhite: '#F4F7FE',
                blue: '#4318FF',
                delftBlue: '#2B3674',
                powderBlue: '#A3AED0',
                jade : '#01B574',
                neonBlue : '#3965FF',
                hunyadiYellow : '#FFB547',
                red : '#E31A1A'
            }
        },
    },
    plugins: [],
};