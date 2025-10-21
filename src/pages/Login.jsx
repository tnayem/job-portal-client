import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';

const Login = () => {
    const handleLogin=(e)=>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
    }
    return (
        <div className='flex flex-col justify-center min-h-screen'>
            <form onSubmit={handleLogin} className="fieldset bg-base-200 border-base-300 rounded-box w-6/12 mx-auto border p-4">
                <legend className="fieldset-legend text-5xl font-bold text-center">Login</legend>

                <label className="label">Email</label>
                <input type="email" name='email' className="input w-full" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input w-full" placeholder="Password" />

                <button type='submit' className="btn btn-neutral mt-4">Login</button>
            </form>
            <p className='text-center'>Haven't account please <Link className='text-blue-600' to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;