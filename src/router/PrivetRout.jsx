import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocation } from 'react-router';

const PrivetRout = ({children}) => {
    const {user} = use(AuthContext)
    console.log(user);
    
    return (
        <div>
            
        </div>
    );
};

export default PrivetRout;