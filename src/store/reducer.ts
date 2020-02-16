import { DeepReadonly } from 'ts-essentials';
import { FilterType, ActionType, Action, Launch } from './types';

export type State = DeepReadonly<{
    isLoading: boolean;
    launches: Launch[];
    filters: {
        [FilterType.LandSuccess]: boolean;
        [FilterType.Reused]: boolean;
        [FilterType.WithReddit]: boolean;
    };
}>;

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

        case ActionType.RefreshResults:
            return {
                ...state,
                isLoading: true
            };

        case ActionType.SetResults:
            return {
                ...state,
                launches: action.payload,
                isLoading: false
            };

        default:
            return state;
    }
};

export default reducer;
