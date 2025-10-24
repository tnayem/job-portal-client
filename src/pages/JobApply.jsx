import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const JobApply = () => {
    const { id } = useParams()
    const { user } = useAuth()
    // console.log(user,id);
    const handleApplyJobSubmit = (e) =>{
        e.preventDefault()
        const form = e.target 
        const linkedin = form.linkedin.value
        const github = form.github.value
        const resume = form.resume.value 
        const application = {
            id,
            applicant:user.email,
            linkedin,
            github,
            resume
        }
        console.log(application);
        axios.post("http://localhost:3000/application",application)
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <form onSubmit={handleApplyJobSubmit} className='flex flex-col justify-center h-screen items-center'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">Linkedin</label>
                    <input name='linkedin' type="url" className="input" placeholder="Your Linkedin link" />

                    <label className="label">Github</label>
                    <input name='github' type="url" className="input" placeholder="Your Github link" />

                    <label className="label">Resume</label>
                    <input name='resume' type="url" className="input" placeholder="Your Resume Link" />
                    <input className='btn btn-primary my-4' type="submit" value="Apply" />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;