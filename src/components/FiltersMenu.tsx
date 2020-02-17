import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import {
    Filters,
    Dispatch,
    FilterType,
    refreshLaunches,
    toggleFilter
} from '../reducer';
import Filter from './Filter';
import { ReactComponent as RefreshIcon } from '../images/refresh.svg';

interface Props {
    isLoading: boolean;
    isInitialLoad: boolean;
    filters: Filters;
    dispatch: Dispatch;
    error: string | null;
}

const Wrapper = styled(({ isInitialLoad, ...props }) => <div {...props} />)`
    border: 1px solid ${p => p.theme.color.white};
    border-top-left-radius: ${p => p.theme.borderRadius};
    border-top-right-radius: ${p => p.theme.borderRadius};
    border-bottom-width: 0;

    ${p =>
        p.isInitialLoad &&
        `
            border-bottom-left-radius: ${p.theme.borderRadius};
            border-bottom-right-radius: ${p.theme.borderRadius};
            border-bottom-width: 1px;
        `}

    padding: 20px 21px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    section {
        display: flex;
        align-items: center;

        :first-child {
            flex: 1;
        }

        color: ${p => p.theme.color.white};
        text-transform: uppercase;
    }
`;

const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

const RefreshButton = styled.button.attrs({
    type: 'button',
    title: 'Refresh Launches'
})`
    display: inline-block;
    width: 35px;
    height: 35px;
    background: none;
    border: 2px solid ${p => p.theme.color.white};
    transition: border 0.1s ease;
    border-radius: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-right: 12px;

    svg {
        min-width: 22px;
        height: auto;
        fill: ${p => p.theme.color.white};
        transition: fill 0.1s ease;

        ${p =>
            p.disabled &&
            css`
                animation: 1s ${rotateAnimation} infinite linear;
            `}
    }

    :hover {
        svg {
            fill: ${p => p.theme.color.lightBlue};
        }
    }
`;

const ErrorText = styled.span`
    color: ${p => p.theme.color.error};
`;

const FiltersMenu: React.FC<Props> = ({
    isLoading,
    isInitialLoad,
    dispatch,
    filters: { landSuccess, reused, withReddit },
    error
}) => (
    <Wrapper isInitialLoad={isInitialLoad}>
        <section>
            <RefreshButton
                disabled={isLoading}
                onClick={() => dispatch(refreshLaunches())}
            >
                <RefreshIcon />
            </RefreshButton>

            {isLoading && isInitialLoad && 'Launching...'}
            {isLoading && !isInitialLoad && 'Relaunching...'}
            {error && <ErrorText>Error: {error}</ErrorText>}
        </section>

        <section>
            <Filter
                isChecked={landSuccess}
                onClick={() => dispatch(toggleFilter(FilterType.LandSuccess))}
            >
                Land Success
            </Filter>
            <Filter
                isChecked={reused}
                onClick={() => dispatch(toggleFilter(FilterType.Reused))}
            >
                Reused
            </Filter>
            <Filter
                isChecked={withReddit}
                onClick={() => dispatch(toggleFilter(FilterType.WithReddit))}
            >
                With Reddit
            </Filter>
        </section>
    </Wrapper>
);

export default FiltersMenu;
