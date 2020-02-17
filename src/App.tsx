import React, { useReducer, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

import fetchResults from './services/fetchResults';
import reducer, { initialState } from './reducer/reducer';
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

const Wrapper = styled(({ isInitialLoad, ...props }) => <div {...props} />)`
    margin: 0px auto;
    padding: 0 2px;
    width: 960px;
    margin-top: 0;
`;

function App() {
    const [
        { isLoading, isInitialLoad, filters, launches, error },
        dispatch
    ] = useReducer(reducer, initialState);

    // Fetch results whenever isLoading has been changed to true
    useEffect(() => {
        if (isLoading) {
            fetchResults(dispatch);
        }
    }, [dispatch, isLoading]);

    return (
        <Wrapper isInitialLoad={isInitialLoad}>
            <H1>SpaceX Launches</H1>

            <FiltersMenu
                isLoading={isLoading}
                isInitialLoad={isInitialLoad}
                error={error}
                filters={filters}
                dispatch={dispatch}
            />

            {!isInitialLoad && (
                <LaunchesTable isLoading={isLoading} launches={launches} />
            )}
        </Wrapper>
    );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
