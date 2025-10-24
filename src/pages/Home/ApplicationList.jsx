import React, { use } from 'react';
import ApplicationRow from './ApplicationRow';

const ApplicationList = ({ myApplications }) => {
    const applications = use(myApplications)
    console.log(applications.length);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                #
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        applications.map((application,index)=><ApplicationRow key={application._id} application={application} index={index}></ApplicationRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationList;