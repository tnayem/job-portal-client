import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import auth from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [loading,setLoading]= useState(true)
    // Create User
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login user 
    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo={
        createUser,
        logIn,
        loading,
        setLoading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;