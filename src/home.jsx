import React from "react";
import { signUp, login, useAuth, logout } from "./firebase_setup/firebase";
import { useRef, useState } from "react";

function Home() {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignUp() {

        setLoading(true);
        try {
            await signUp(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Error!");
        }
        setLoading(false)
        
    }

    async function handleLogin() {

        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Error!");
        }
        setLoading(false)
        
    }

    async function handleLogout() {
        setLoading(true);
        try {
            await logout();
        } catch {
           alert("Logout Error!") 
        }
        setLoading(false);
    }

    return (
        <>
        <div>Currently logged in as: {currentUser?.email }</div>
        <div>
            <input ref={emailRef} type="email" placeholder='Email...'/>
            <input ref={passwordRef} type="password" placeholder="Password..."/>
        </div>

        <button disabled={loading || currentUser} onClick={handleSignUp}>Sign Up</button>
        <button disabled={loading || currentUser} onClick={handleLogin}>Login</button>
        <button disabled ={loading || !currentUser} onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Home