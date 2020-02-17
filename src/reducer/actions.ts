import { FilterType, ActionType, Action } from './types';
import { Launches } from './reducer';

// Action Creators
export const toggleFilter = (filterType: FilterType): Action => ({
    type: ActionType.ToggleFilter,
    payload: filterType
});

export const refreshLaunches = (): Action => ({
    type: ActionType.RefreshLaunches
});

export const setFetchError = (error: string): Action => ({
    type: ActionType.SetFetchError,
    payload: error
});

export const setLaunches = (launches: Launches): Action => ({
    type: ActionType.SetLaunches,
    payload: launches
});
