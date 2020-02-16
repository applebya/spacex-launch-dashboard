// TODO: Expand this type to include required properties?
export type Launch = any;

// Hard-coded enum types
export enum ActionType {
    ToggleFilter = 'TOGGLE_FILTER',
    RefreshResults = 'REFRESH_RESULTS',
    SetResults = 'SET_RESULTS'
}

export enum FilterType {
    LandSuccess = 'landSuccess',
    Reused = 'reused',
    WithReddit = 'withReddit'
}

// Our redux Action & Dispatch types
export type Action = {
    type: ActionType;
    payload?: any;
};

export type Dispatch = React.Dispatch<Action>;
