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
            const type = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [type]: !state.filters[type]
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
                launches: action.payload,
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

// Log actions & state transitions for development use
const isDevelopment = process.env.NODE_ENV === 'development';

export default (state: State = initialState, action: Action): State => {
    if (isDevelopment) {
        console.log('ACTION:', action);
    }

    const newState = reducer(state, action);

    if (isDevelopment) {
        console.log('NEW STATE:', newState);
    }

    return newState;
};
