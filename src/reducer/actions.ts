import { FilterType, ActionType, Action } from './types';
import { Launches } from './';

// Action Creators
export const toggleFilter = (filterType: FilterType): Action => ({
    type: ActionType.ToggleFilter,
    payload: { id: filterType }
});

export const refreshLaunches = (): Action => ({
    type: ActionType.RefreshLaunches
});

export const setLaunches = (launches: Launches): Action => ({
    type: ActionType.SetLaunches,
    payload: { data: launches }
});
