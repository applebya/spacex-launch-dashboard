// Expected shape of the launch items in the API response
export type Launch = {
    flight_number: number;
    mission_name: string;
    mission_id: string[];
    launch_date_local: string;
    rocket: {
        rocket_id: string;
        rocket_name: string;
        rocket_type: string;
        first_stage: {
            cores: Array<{
                land_success: boolean;
                reused: boolean;
            }>;
        };
    };
    links: {
        mission_patch_small: string;
        article_link: string;
        reddit: string;
    };
    details: string | null;
};

// Hard-coded enum types
export enum ActionType {
    ToggleFilter = 'TOGGLE_FILTER',
    RefreshLaunches = 'REFRESH_LAUNCHES',
    SetLaunches = 'SET_LAUNCHES',
    SetFetchError = 'SET_FETCH_ERROR'
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
