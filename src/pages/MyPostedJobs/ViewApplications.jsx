import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const { id } = useParams()
    const applications = useLoaderData()
    const handleOnChange =(e,jobId)=>{
        console.log(e.target.value,jobId);
        axios.patch(`http://localhost:3000/application/${jobId}`,{status:e.target.value})
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div>
            <h2>View application for id: {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row*/}
                        {
                            applications.map(application => <tr key={application._id}>
                                <th>1</th>
                                <td>{application.applicant}</td>
                                <td>{ }</td>
                                <td>
                                    <select onChange={(e)=>handleOnChange(e,application._id)} defaultValue="Update a status" className="select">
                                        <option disabled={true}>{application.status}</option>
                                        <option>Pending</option>
                                        <option>Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;