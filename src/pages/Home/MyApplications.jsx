import React, { Suspense } from 'react';
import ApplicationState from './ApplicationState';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationPromiss } from '../api/applicationsApi';

const MyApplications = () => {
    const{user} = useAuth()
    console.log("Application Token: ", user.accessToken);
    return (
        <div>
            <ApplicationState></ApplicationState>
            <Suspense fallback={"My application is loaded"}>
                <ApplicationList myApplications={myApplicationPromiss(user.email,user.accessToken)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;