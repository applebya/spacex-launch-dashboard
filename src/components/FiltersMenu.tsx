import React from 'react';
import { Filters, Dispatch, FilterType } from '../reducer';
import styled, { keyframes, css } from 'styled-components';
import Filter from './Filter';
import { ReactComponent as RefreshIcon } from '../images/refresh.svg';
import { refreshLaunches, toggleFilter } from '../reducer/actions';

interface Props {
    isLoading: boolean;
    filters: Filters;
    dispatch: Dispatch;
}

const Wrapper = styled(({ isLoading, ...props }) => <div {...props} />)`
    border: 1px solid ${p => p.theme.color.white};
    border-top-left-radius: ${p => p.theme.borderRadius};
    border-top-right-radius: ${p => p.theme.borderRadius};
    border-bottom-width: 0;

    ${p =>
        p.isLoading &&
        `
            border-bottom-left-radius: ${p.theme.borderRadius};
            border-bottom-right-radius: ${p.theme.borderRadius};
            border-bottom-width: 1px;
        `}

    padding: 20px 21px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${p => p.theme.fontFamily.geomanist};

    section {
        display: flex;

        :first-child {
            flex: 1;
        }
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

const FiltersMenu: React.FC<Props> = ({
    isLoading,
    dispatch,
    filters: { landSuccess, reused, withReddit }
}) => (
    <Wrapper isLoading={isLoading}>
        <section>
            <RefreshButton
                disabled={isLoading}
                onClick={() => dispatch(refreshLaunches())}
            >
                <RefreshIcon />
            </RefreshButton>
            {isLoading && ' Loading...'}
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
