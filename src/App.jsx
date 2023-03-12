import React from 'react'
import { signUp, login, useAuth, logout } from "./firebase_setup/firebase";
import { useRef, useState } from "react";
import { createBrowserRouter, createRoutesFromElements, 
  Route, Link, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Friends from './Friends'
import Games from './Games'
import './index.css';

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />}>
                <Route index element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/games" element={<Games />} />
            </Route>
        )
    )

    return (
      <div>
        <RouterProvider router={router}/>
      </div>
    )
}

function NavWithAuth() {
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
        {/*White background and logo*/}
        <div className='white-background flex flex-row-reverse w-full bg-white h-20 justify-between'>
          <div className='login-logout flex flex-row items-center justify-evenly w-[40rem]'>
            <div hidden={currentUser}>
                <input className='email-input' ref={emailRef} type="email" placeholder='Email...'/>
                <input className='password-input' ref={passwordRef} type="password" placeholder="Password..."/>
            </div>

            <button hidden={loading || currentUser} onClick={handleSignUp} className='text-blue-900 bg-white border border-blue-300 
            hover:bg-blue-100 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-800 
            dark:text-white dark:border-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-600 
            dark:focus:ring-blue-700'>Sign Up</button>
            <button hidden={loading || currentUser} onClick={handleLogin} className='text-blue-900 bg-white border border-blue-300 
            hover:bg-blue-100 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-800 
            dark:text-white dark:border-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-600 
            dark:focus:ring-blue-700'>Login</button>
            <button hidden ={loading || !currentUser} onClick={handleLogout} className='logout-button text-red-900 bg-white border border-red-300 
            hover:bg-red-100 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-800 
            dark:text-white dark:border-red-600 dark:hover:bg-red-700 dark:hover:border-red-600 
            dark:focus:ring-red-700 lg:hidden'>Logout</button>
            <button hidden ={loading || !currentUser} onClick={handleLogout} className='profile-button-small bg-red-500 hover:bg-red-400 w-[3rem] h-[3rem] rounded-full xl:hidden'>
              <i className="fa fa-caret-square-o-down" aria-hidden="true"/></button>

            <Link to='/profile'>
            <img hidden={!currentUser} className='profile-picture w-[4rem] lg:w-[3.5rem] h-[4rem] lg:h-[3.5rem] lg:p-1 rounded-full object-cover' 
              src='./burgerbinassets/defaultprofileimage.jpg'/>
            </Link>
          </div>

          {currentUser ? 
          <div className='nav-buttons flex flex-row w-[30rem] justify-evenly items-center'>
            {/*Profile button*/}
            
            <Link to='/'>
            <button hidden={!currentUser} className='home-button text-gray-900 bg-white border border-gray-300 
            hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 
            dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 
            dark:focus:ring-gray-700 lg:hidden'>Home
            </button>
            <button hidden={!currentUser} className='home-button-small bg-gray-500 hover:bg-gray-400 w-[4rem] h-[3rem] rounded-full xl:hidden'>
              <i className="fa fa-address-card" aria-hidden="true"/>
            </button>
            </Link>
  
            {/*Friends button*/}
            <Link to='/friends'>
            <button hidden={!currentUser} className='friends-button text-gray-900 bg-white border border-gray-300 
            hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 
            dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 
            dark:focus:ring-gray-700 lg:hidden'>Friends
            </button>
            <button hidden={!currentUser} className='profile-button-small bg-gray-500 hover:bg-gray-400 w-[4rem] h-[3rem] rounded-full xl:hidden'>
              <i className="fa fa-users" aria-hidden="true"/>
            </button>
            </Link>
  
            {/*Games button*/}
            <Link to='/games'>
            <button hidden={!currentUser} className='games-button text-gray-900 bg-white border border-gray-300 
            hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 
            dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 
            dark:focus:ring-gray-700 lg:hidden'>Games
            </button>
            <button hidden={!currentUser} className='profile-button-small bg-gray-500 hover:bg-gray-400 w-[4rem] h-[3rem] rounded-full xl:hidden'>
              <i className="fa fa-gamepad" aria-hidden="true"/>
            </button>
            </Link>
          </div> 
          : <div></div> }

          <div className='first-section flex flex-row items-center'>
            <img className='sm:hidden website-logo p-3 w-full h-auto' 
              src="./burgerbinassets/burgerbinlogo.png"/>
            <img className='md:hidden ssm:hidden website-logo p-3 w-full h-auto' 
              src="./burgerbinassets/burgerbinlogosmall.png"/>
          </div>
        </div>

        <div>
            <Outlet />
        </div>
    </>
  )
}

const Root = () => {
    return (
        <NavWithAuth />
    )
}

export default App