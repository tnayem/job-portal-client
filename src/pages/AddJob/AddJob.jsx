import axios from 'axios';
import React from 'react';

const AddJob = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        const {max,min,currency, ...newJobs} = data
        newJobs.salaryRange={max,min,currency}
        newJobs.requirements = newJobs.requirements.split(",").map(req=>req.trim())
        newJobs.responsibilities = newJobs.responsibilities.split(",").map(res=>res.trim())
        newJobs.status = "active"
        console.log(newJobs);
        // save to the database
        axios.post('http://localhost:3000/jobs',newJobs)
        .then(result=>{
            console.log(result.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Add Job</legend>

                <label className="label">Job Title</label>
                <input type="text" name='title' className="input" placeholder="Job Title" />

                <label className="label">Company</label>
                <input type="text" name='company' className="input" placeholder="Company Name" />

                <label className="label">Location</label>
                <input type="text" name='location' className="input" placeholder="Company location" />
                <label className="label">Company Logo</label>
                <input type="text" name='company_logo' className="input" placeholder="Company Logo Url" />
            </fieldset>
            {/* Job type field set */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Job Type</legend>
                <div className="filter">
                    <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                    <input value="On-Site" className="btn" type="radio" name="jobType" aria-label="On-Site" />
                    <input value="Remote" className="btn" type="radio" name="jobType" aria-label="Remote" />
                    <input value="Hybrid" className="btn" type="radio" name="jobType" aria-label="Hybrid" />
                </div>
            </fieldset>
            {/* Job Category */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Job Category</legend>
                <select defaultValue="Job Category" className="select" name='category'>
                    <option disabled={true}>Job Category</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                </select>
            </fieldset>
            {/* Application Dadeline */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Application Dadeline</legend>
                <input type="date" name='applicationDeadline' className="input" />
            </fieldset>
            {/* Selary Range */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Selary Range</legend>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    <div>
                        <label className="label">Minimum Selary</label>
                        <input type="number" name='min' className="input" placeholder="Minimum Selary" />
                    </div>

                    <div>
                        <label className="label">Maximum Selary</label>
                        <input type="number" name='max' className="input" placeholder="Maximum Selary" />
                    </div>

                    <div>
                        <label className="label">Select Currency</label>
                        <select defaultValue="Select Currency" className="select" name='currency'>
                            <option disabled={true}>Select Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>EU</option>
                        </select>
                    </div>
                </div>
            </fieldset>
            {/* Job Description */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Job Description</legend>
                <textarea name='description' className="textarea" placeholder="Description"></textarea>
            </fieldset>
            {/* Job Requirements*/}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Job Requirements</legend>
                <textarea name='requirements' className="textarea" placeholder="Job Requirements (separeted by coma)"></textarea>
            </fieldset>
            {/* Job Responsibilities*/}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Job Responsibilities</legend>
                <textarea name='responsibilities' className="textarea" placeholder="Job Responsibilities (separeted by coma)"></textarea>
            </fieldset>
            {/* HR Info */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">HR Info</legend>
                <label className="label">HR Name</label>
                <input type="text" name='hr_name' className="input" placeholder="HR Name" />
                <label className="label">HR Email</label>
                <input type="email" name='hr_email' className="input" placeholder="HR Email" />
            </fieldset>
            <input type="submit" className='btn btn-primary' value="Add Job" />
        </form>
    );
};

export default AddJob;