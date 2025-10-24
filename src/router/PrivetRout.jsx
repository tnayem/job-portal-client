import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRout = ({children}) => {
    const {user,loading} = use(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className='flex items-center justify-center min-h-screen'><span className="loading loading-bars loading-xl"></span></div>
    }
    if(!user){
       return <Navigate to='/login' state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivetRout;