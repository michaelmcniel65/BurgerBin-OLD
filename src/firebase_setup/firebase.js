import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyAVflTBFjbGqlcQD_xS_UmItR7oNaCuyko",
    authDomain: "burgerbin-82699.firebaseapp.com",
    projectId: "burgerbin-82699",
    storageBucket: "burgerbin-82699.appspot.com",
    messagingSenderId: "62434977141",
    appId: "1:62434977141:web:8fef094b5d377a6a509f3c",
    measurementId: "G-4KXE4TF7Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth);
}

export function useAuth() {
    const [currentUser, setCurrentUser ] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
        return unsub;
    }, [])

    return currentUser;
}

