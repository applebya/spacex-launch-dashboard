const theme = {
    color: {
        white: '#FFF',
        whiteLayer: 'rgba(255, 255, 255, 0.85)',
        black: '#000',
        lightBlue: '#13A2E8',
        darkBlue: '#043D67',
        darkGray: '#444',
        highlight: '#9DB7CD',
        error: '#ec4242'
    },
    fontSize: {
        sm: '14px',
        md: '15px',
        lg: '17px',
        xl: '64px'
    },
    fontFamily: {
        geomanist: 'Geomanist-Regular, sans-serif',
        helvetica: 'Helvetica, sans-serif'
    },
    borderRadius: '8px'
};

export type ThemeType = typeof theme;

export default theme;
