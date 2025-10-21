import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword, signOut} from "firebase/auth";
import auth from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [loading,setLoading]= useState(true)
    const [user,setUser]= useState(null)
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
    // Log Out 
    const logOut = ()=>{
        return signOut(auth)
    }
    // Observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo={
        createUser,
        logIn,
        loading,
        setLoading,
        user,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;