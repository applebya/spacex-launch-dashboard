import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme, { ThemeType } from './theme';
import background from './images/background.jpg';

// Style overrides
const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    ${normalize}

    @font-face {
        font-family: 'Geomanist-Regular';
        src: local('Geomanist-Regular'), local('GeomanistRegular'),
        url('./fonts/geomanist-regular-webfont.woff2') format('woff2'),
        url('./fonts/geomanist-regular-webfont.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }

    * {
        font-family: ${p => p.theme.fontFamily.helvetica};
        color: ${p => p.theme.color.darkGray};
    }

    body {
        background: url(${background}) no-repeat center center fixed;
        background-size: cover;
        background-color: ${p => p.theme.color.black};
    }
`;

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainApp />
    </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
