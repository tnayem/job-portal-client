import React from 'react';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { _id, location, company, company_logo, description,requirements, salaryRange } = job
    console.log(job);
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className='flex'>
                <figure>
                    <img
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div className='ml-4'>
                    <h3 className="text-xl font-semibold">{company}</h3>
                    <p>{location}</p>
                </div>
            </div>
            <div className="card-body">
                {/* <h2 className="card-title">
                    Card Title
                    <div className="badge badge-secondary">NEW</div>
                </h2> */}
                <p>Selary: {salaryRange.min}-{salaryRange.max}-{salaryRange.currency}</p>
                <p>{description}</p>
                <div className="card-actions">
                    {
                        requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <Link to={`jobs/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;