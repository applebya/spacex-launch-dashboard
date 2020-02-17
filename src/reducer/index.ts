import { DeepReadonly } from 'ts-essentials';
import { FilterType, ActionType, Action, Launch } from './types';

export * from './types';

export type Launches = DeepReadonly<Launch[]>;

export type Filters = DeepReadonly<{
    [FilterType.LandSuccess]: boolean;
    [FilterType.Reused]: boolean;
    [FilterType.WithReddit]: boolean;
}>;

// State shape
export type State = DeepReadonly<{
    isLoading: boolean;
    launches: Launches;
    filters: Filters;
}>;

// Our app is initially loading
export const initialState: State = {
    isLoading: true,
    launches: [],
    filters: {
        [FilterType.LandSuccess]: false,
        [FilterType.Reused]: false,
        [FilterType.WithReddit]: false
    }
};

const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.ToggleFilter:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload]: !state.filters[action.payload]
                }
            };

        case ActionType.RefreshLaunches:
            return {
                ...state,
                isLoading: true
            };

        case ActionType.SetLaunches:
            return {
                ...state,
                launches: action.payload.data,
                isLoading: false
            };

        default:
            return state;
    }
};

export default reducer;
