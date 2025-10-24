import React, { Suspense } from 'react';
import ApplicationState from './ApplicationState';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationPromiss } from '../api/applicationsApi';

const MyApplications = () => {
    const{user} = useAuth()
    return (
        <div>
            <ApplicationState></ApplicationState>
            <Suspense fallback={"My application is loaded"}>
                <ApplicationList myApplications={myApplicationPromiss(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;