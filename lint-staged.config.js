module.exports = {
    'src/**/*.{ts,tsx}': () => 'tsc --noEmit',
    'src/**/*.{js,ts,tsx}': [
        'eslint --fix',
        'stylelint --fix',
    ],
};
