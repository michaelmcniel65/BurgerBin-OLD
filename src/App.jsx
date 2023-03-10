import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom'
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
      <div className='App'>
        <RouterProvider router={router}/>
      </div>
    )
}

const Root = () => {
    return (
        <>
        {/*White background and logo*/}
        <div className='white-background flex flex-col justify-between bg-white h-screen lg:h-[20rem] w-96 lg:w-[4rem] lg:rounded-br-lg'>
          <div className='first-section flex flex-col items-center gap-10 lg:gap-2 lg:pt-3'>
            <Link to='/'>
            <img className='website-logo pt-5 lg:hidden' 
              src="./burgerbinassets/burgerbinlogo.png"/>
            </Link>
  
            {/*Welcome message and profile picture*/}
            <h1 className='welcome-user text-3xl text-black pt-4 lg:hidden'>Welcome, Bartholomew!</h1>
            <Link to='/'>
            <img className='profile-picture w-[20rem] lg:w-[3.5rem] h-[20rem] lg:h-[3.5rem] lg:p-1 rounded-full object-cover' src='./burgerbinassets/defaultprofileimage.jpg'/>
            </Link>
  
            {/*Profile button*/}
            <Link to='/profile'>
            <button className='profile-button w-[20rem] bg-blue-500 hover:bg-blue-400 text-white font-bold 
              py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-3xl lg:hidden'>Profile
            </button>
            <button className='profile-button-small bg-blue-500 hover:bg-blue-400 w-[3rem] h-[3rem] rounded-full xl:hidden'>
              <i className="fa fa-address-card" aria-hidden="true"/>
            </button>
            </Link>
  
            {/*Friends button*/}
            <Link to='/friends'>
            <button className='friends-button w-[20rem] bg-yellow-500 hover:bg-yellow-400 text-white font-bold 
              py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded-3xl lg:hidden'>Friends
            </button>
            <button className='profile-button-small bg-yellow-500 hover:bg-yellow-400 w-[3rem] h-[3rem] rounded-full xl:hidden'>
              <i className="fa fa-users" aria-hidden="true"/>
            </button>
            </Link>
  
            {/*Games button*/}
            <Link to='/games'>
            <button className='games-button w-[20rem] bg-green-500 hover:bg-green-400 text-white font-bold 
              py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-3xl lg:hidden'>Games
            </button>
            <button className='profile-button-small bg-green-500 hover:bg-green-400 w-[3rem] h-[3rem] rounded-full xl:hidden'>
              <i className="fa fa-gamepad" aria-hidden="true"/>
            </button>
            </Link>
          </div>
          <div className='second-section flex flex-col items-center p-5'>
  
            {/*Logout button*/}
            <button className='logout-button bg-red-500 hover:bg-red-400 text-white font-bold 
                py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-3xl lg:hidden'>Logout
            </button>
            <button className='profile-button-small bg-red-500 hover:bg-red-400 w-[3rem] h-[3rem] rounded-full xl:hidden'>
              <i className="fa fa-caret-square-o-down" aria-hidden="true"/></button>
          </div>
        </div>

        <div>
            <Outlet />
        </div>
        </>
    )
}

export default App