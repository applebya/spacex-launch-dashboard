import { FilterType, ActionType } from './enums';

// Basic action shape
export type Action = {
    type: ActionType;
    payload?: any;
};

export type Dispatch = React.Dispatch<Action>;

// Action Types
type ToggleFilterAction = Action & {
    type: ActionType.ToggleFilter;
    payload: FilterType;
};

type RefreshResultsAction = Action & {
    type: ActionType.RefreshResults;
};

type SetResultsAction = Action & {
    type: ActionType.SetResults;
};

// Action Creators
export const toggleFilter = (payload: FilterType): ToggleFilterAction => ({
    type: ActionType.ToggleFilter,
    payload
});

export const refreshResults = (): RefreshResultsAction => ({
    type: ActionType.RefreshResults
});

export const setResults = (payload: any[]): SetResultsAction => ({
    type: ActionType.SetResults,
    payload
});
