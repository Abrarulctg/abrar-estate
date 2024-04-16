import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //Creating an User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log("user in the auth state changed.", currentUser);
            setUser(currentUser);
            // user.getIdToken().then(token => console.log("TOKEN: ", token)) //undefined
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    // Google sign in
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // Github Sign in
    const githubProvider = new GithubAuthProvider;
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    //Facebook Login
    const facebookProvider = new FacebookAuthProvider;
    const signInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    const updateUserNamePhoto = (displayName, photo) => {
        return updateProfile(auth.user, displayName, photo);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        loading,
        user,
        setUser,
        createUser,
        signInUser,
        updateUserNamePhoto,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;