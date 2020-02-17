import React from 'react';
import { Filters, Dispatch } from '../reducer';

interface Props {
    dispatch: Dispatch;
    filters: Filters;
}

const FiltersMenu: React.FC<Props> = () => <div />;

export default FiltersMenu;
