import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckmarkIcon } from '../images/checkmark.svg';

interface Props {
    isChecked: boolean;
    onClick: () => void;
}

const Checkbox = styled.span`
    display: inline-block;
    margin-right: 8px;
    border: 1px solid ${p => p.theme.color.white};
    border-radius: 3px;
    width: 22px;
    height: 23px;
    justify-content: center;
    align-items: center;

    svg {
        width: 17px;
        height: auto;
        margin-top: 4px;
        fill: ${p => p.theme.color.lightBlue};
    }
`;

const FilterButton = styled.button.attrs({ type: 'button' })`
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    color: ${p => p.theme.color.white};
    font-family: ${p => p.theme.fontFamily.geomanist};
    font-size: ${p => p.theme.fontSize.sm};
    text-transform: uppercase !important;
    cursor: pointer;

    :first-of-type {
        margin-left: 0;
    }

    :hover {
        color: ${p => p.theme.color.lightBlue};
    }
`;

const Filter: React.FC<Props> = ({ isChecked, onClick, children }) => (
    <FilterButton onClick={onClick}>
        <Checkbox>{isChecked && <CheckmarkIcon />}</Checkbox>
        {children}
    </FilterButton>
);

export default Filter;
