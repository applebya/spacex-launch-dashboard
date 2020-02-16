import { Dispatch, setResults } from '../store/actions';

const fetchResults = async (dispatch: Dispatch) => {
    const request = await fetch(
        'https://api.spacexdata.com/v3/launches/latest'
    );
    const results = await request.json();

    dispatch(setResults(results));
};

export default fetchResults;
