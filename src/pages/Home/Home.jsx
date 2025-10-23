import React, { Suspense } from 'react';
import HotJobs from './HotJobs';

const Home = () => {
    const hotJobsPromiss = fetch("http://localhost:3000/jobs").then(res => res.json())
    return (
        <div>
            <Suspense fallback={"Loading Data"}>
                <HotJobs hotJobsPromiss={hotJobsPromiss}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;