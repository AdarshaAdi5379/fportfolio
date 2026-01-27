/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
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
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                scroll: 'scroll 30s linear infinite',
            },
        },
    },
    plugins: [],
}
