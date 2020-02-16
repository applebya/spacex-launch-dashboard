import React, { useReducer, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import reducer, { initialState } from './store/reducer';
import fetchResults from './services/fetchResults';

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.isLoading) {
            fetchResults(dispatch);
        }
    }, [state.isLoading]);

    return (
        <div>
            <header>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
