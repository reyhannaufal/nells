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
                secondary: ['Open Sans', 'sans-serif'],
            },
            colors: {
                spurple: '#745074',
                spurplehover: '#A880A8',
                spurpleghost: '#FAECFE',
                pinkish: '#F5F3F6',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
