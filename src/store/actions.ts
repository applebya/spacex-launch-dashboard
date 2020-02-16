import { FilterType, ActionType, Action, Launch } from './types';

// Action Creators
export const toggleFilter = (filterType: FilterType): Action => ({
    type: ActionType.ToggleFilter,
    payload: { id: filterType }
});

export const refreshResults = (): Action => ({
    type: ActionType.RefreshResults
});

export const setResults = (results: Launch[]): Action => ({
    type: ActionType.SetResults,
    payload: { data: results }
});
