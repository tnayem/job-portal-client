import React from 'react';
import { AuthContext } from './AuthContext';
import {createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo={
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;