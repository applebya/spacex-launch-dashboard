import { DeepReadonly } from 'ts-essentials';
import { FilterType, ActionType, Action, Launch } from './types';

export type Launches = DeepReadonly<Launch[]>;

export type Filters = DeepReadonly<{
    [FilterType.LandSuccess]: boolean;
    [FilterType.Reused]: boolean;
    [FilterType.WithReddit]: boolean;
}>;

// State shape
export type State = DeepReadonly<{
    isLoading: boolean;
    isInitialLoad: boolean;
    launches: Launches;
    filters: Filters;
    error: string | null;
}>;

// Our app is initially loading
export const initialState: State = {
    isLoading: true,
    isInitialLoad: true,
    launches: [],
    error: null,
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
                    [action.payload.id]: !state.filters[action.payload.id]
                }
            };

        case ActionType.RefreshLaunches:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ActionType.SetLaunches:
            return {
                ...state,
                launches: action.payload.data,
                isLoading: false,
                isInitialLoad: false
            };

        case ActionType.SetFetchError:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
