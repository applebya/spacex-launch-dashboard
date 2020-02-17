import { Launches, Dispatch, setLaunches, setFetchError } from '../reducer';

const fetchResults = async (dispatch: Dispatch) => {
    try {
        const request = await fetch('https://api.spacexdata.com/v3/launches');
        const data: Launches = await request.json();

        dispatch(setLaunches(data));
    } catch (error) {
        // TODO: Better error handling
        dispatch(setFetchError('Check connection and try again'));
    }
};

export default fetchResults;
