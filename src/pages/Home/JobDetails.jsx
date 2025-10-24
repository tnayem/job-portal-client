import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            This Jobs Details
        </div>
    );
};

export default JobDetails;