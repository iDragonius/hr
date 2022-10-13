/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#377DFF',
                bgPrimary: '#F5FAFF',
                bgSecondary: '#FFF',
                textPrimary: '#06070d',
            },
        },
    },
    plugins: [],
}
