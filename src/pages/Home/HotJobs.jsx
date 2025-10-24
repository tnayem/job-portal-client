import React, { use } from 'react';
import JobCard from './JobCard';

const HotJobs = ({hotJobsPromiss}) => {
    const jobs = use(hotJobsPromiss)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
           {
            jobs?.map(job=><JobCard job={job} key={job._id}></JobCard>)
           }
        </div>
    );
};

export default HotJobs;