import { DeepReadonly } from 'ts-essentials';
import { Action } from './actions';
import { FilterType, ActionType } from './enums';

export type State = DeepReadonly<{
    isLoading: boolean;
    results: Array<{}>;
    filters: {
        [FilterType.LandSuccess]: boolean;
        [FilterType.Reused]: boolean;
        [FilterType.WithReddit]: boolean;
    };
}>;

export const initialState: State = {
    isLoading: true,
    results: [],
    filters: {
        [FilterType.LandSuccess]: false,
        [FilterType.Reused]: false,
        [FilterType.WithReddit]: false
    }
};

const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.ToggleFilter:
            return state;

        case ActionType.RefreshResults:
            return {
                ...state,
                isLoading: true
            };

        case ActionType.SetResults:
            return {
                ...state,
                results: action.payload,
                isLoading: false
            };

        default:
            return state;
    }
};

export default reducer;
