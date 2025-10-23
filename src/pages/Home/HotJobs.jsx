import React, { use } from 'react';
import JobCard from './JobCard';

const HotJobs = ({hotJobsPromiss}) => {
    const jobs = use(hotJobsPromiss)
    return (
        <div>
           {
            jobs?.map(job=><JobCard job={job} key={job._id}></JobCard>)
           }
        </div>
    );
};

export default HotJobs;