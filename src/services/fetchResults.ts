import { Launches, Dispatch, setLaunches } from '../reducer';

const fetchResults = async (dispatch: Dispatch) => {
    const request = await fetch('https://api.spacexdata.com/v3/launches');
    const data: Launches = await request.json();

    dispatch(setLaunches(data));
};

export default fetchResults;
