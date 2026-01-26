/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: '#38BDF8',
            },
            fontWeight: {
                light: '300',
                normal: '400',
            },
            letterSpacing: {
                wide: '0.1em',
            },
            spacing: {
                '128': '32rem',
            },
        },
    },
    plugins: [],
}
