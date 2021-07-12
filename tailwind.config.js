module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                primary: ['Poppins', 'sans-serif'],
            },
            colors: {
                spurple: '#745074',
                spurplehover: '#A880A8',
                spurpleghost: '#FAECFE',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
