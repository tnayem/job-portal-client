import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const {id} = useParams()
    const applications = useLoaderData()
    return (
        <div>
           <h2>View application for id: {applications.length}</h2>
        </div>
    );
};

export default ViewApplications;