import React, { use } from 'react';

const MyPostedJobsList = ({ myPostedJobs }) => {
    const jobs = use(myPostedJobs)
    console.log(jobs);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Job Title</th>
                        <th>Dadeline</th>
                        <th>View Applications</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {
                        jobs?.map((job,index) => 
                            <tr>
                                <th>{index+1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>Blue</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyPostedJobsList;