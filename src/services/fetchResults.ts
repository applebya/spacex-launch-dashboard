import { setResults } from '../store/actions';
import { Dispatch } from '../store/types';

const fetchResults = async (dispatch: Dispatch) => {
    const request = await fetch('https://api.spacexdata.com/v3/launches');
    const results = await request.json();

    dispatch(setResults(results));
};

export default fetchResults;
