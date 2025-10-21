import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    console.log(createUser);
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='flex flex-col justify-center min-h-screen'>
            <form onSubmit={handleRegister} className="fieldset bg-base-200 border-base-300 rounded-box w-6/12 mx-auto border p-4">
                <legend className="fieldset-legend text-5xl font-bold text-center">Register</legend>

                <label className="label">Email</label>
                <input type="email" name='email' className="input w-full" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input w-full" placeholder="Password" />

                <button type='submit' className="btn btn-neutral mt-4">Register</button>
            </form>
            <p className='text-center'>Have account please <Link className='text-blue-600' to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;