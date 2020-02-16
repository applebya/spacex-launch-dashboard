import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme, { ThemeType } from './theme';

// Style overrides
const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    ${normalize}

    body {
        background: #000;
        color: ${p => p.theme.color.textBody};
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
