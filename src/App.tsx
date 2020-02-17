import React, { useReducer, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

import reducer, { initialState } from './reducer';
import fetchResults from './services/fetchResults';
import FiltersMenu from './components/FiltersMenu';
import LaunchesTable from './components/LaunchesTable';

const H1 = styled.h1`
    color: ${p => p.theme.color.white};
    font-size: ${p => p.theme.fontSize.xl};
    text-align: center;
    text-shadow: 0 2px 4px ${p => p.theme.color.black};
    font-weight: 400;
    margin-top: 60px;
`;

const Wrapper = styled.div`
    margin: 0px auto;
    padding: 0 2px;
    width: 960px;
`;

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Fetch results whenever isLoading has been changed to true
    useEffect(() => {
        if (state.isLoading) {
            fetchResults(dispatch);
        }
    }, [state.isLoading]);

    return (
        <Wrapper>
            <H1>SpaceX Launches</H1>

            <FiltersMenu
                isLoading={state.isLoading}
                filters={state.filters}
                dispatch={dispatch}
            />

            <LaunchesTable
                isLoading={state.isLoading}
                launches={state.launches}
            />
        </Wrapper>
    );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
