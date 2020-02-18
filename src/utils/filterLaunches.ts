import { Launches, Filters } from '../reducer';

const filterLaunches = (launches: Launches, filters: Filters): Launches => {
    return launches
        .filter(launch => {
            let keep = true;

            if (filters.landSuccess) {
                keep = Boolean(launch.rocket.first_stage.cores[0].land_success);
            }

            if (keep && filters.reused) {
                keep = Boolean(launch.rocket.first_stage.cores[0].reused);
            }

            if (keep && filters.withReddit) {
                keep = Object.entries(launch.links).some(
                    ([key, val]) => key.includes('reddit') && val
                );
            }

            return keep;
        })
        .reverse();
};

export default filterLaunches;
