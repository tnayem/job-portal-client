import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id,title,company} = useLoaderData()
    return (
        <div>
            <h1 className='text-xl'>{title}</h1>
            <h1>{company}</h1>
            <Link to={`/applyJob/${_id}`} className='btn btn-primary'>Apply Job</Link>
        </div>
    );
};

export default JobDetails;