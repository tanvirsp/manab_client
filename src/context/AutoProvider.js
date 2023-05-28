import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';


export const  AUTH_CONTEXT = createContext();

const AutoProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currenUser =>{
            setUser(currenUser);
            setLoading(false);

        })
        return ()=>unSubscribe();

    }, []);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    };

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    };


    const updateUser = (updateInfo) =>{
        return updateProfile(auth.currentUser, updateInfo)
    };
  

    const autoInfo ={
        createUser,
        loginUser,
        user,
        setUser,
        logOut,
        updateUser,
        loading
      
    };

    return (
        <AUTH_CONTEXT.Provider value = {autoInfo}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AutoProvider;