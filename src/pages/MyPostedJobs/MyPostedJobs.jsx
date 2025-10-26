import React, { Suspense } from 'react';
import MyPostedJobsList from './MyPostedJobsList';
import { createdJobsPromiss } from '../api/jobsApi';
import useAuth from '../../hooks/useAuth';

const MyPostedJobs = () => {
    const {user} = useAuth()
    return (
        <div>
           <Suspense fallback={"My Posted Jobs Loading"}>
                <MyPostedJobsList myPostedJobs = {createdJobsPromiss(user.email,user.accessToken)}></MyPostedJobsList>
           </Suspense>
        </div>
    );
};

export default MyPostedJobs;