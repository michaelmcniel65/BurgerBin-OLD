import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function ProfileSideBar() {
    return (
      <>
      {/*White background and logo*/}
      <div className='white-background flex flex-col justify-between bg-white h-screen lg:h-[20rem] w-96 lg:w-[4rem] lg:rounded-br-lg'>
        <div className='first-section flex flex-col items-center gap-10 lg:gap-2 lg:pt-3'>
          <img className='website-logo pt-5 lg:hidden' 
            src="./burgerbinassets/burgerbinlogo.png">
              <Link to="/"></Link>
          </img>

          {/*Welcome message and profile picture*/}
          <h1 className='welcome-user text-3xl text-black pt-4 lg:hidden'>Welcome, Bartholomew!
          </h1>
          <img className='profile-picture w-[20rem] lg:w-[3.5rem] h-[20rem] lg:h-[3.5rem] lg:p-1 rounded-full object-cover' 
              src='./burgerbinassets/defaultprofileimage.jpg'>
                <Link to="/"></Link>
          </img>

          {/*Profile button*/}
          <button className='profile-button w-[20rem] bg-blue-500 hover:bg-blue-400 text-white font-bold 
            py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-3xl lg:hidden'>
                <Link to="/Profile">Profile</Link>
          </button>
          <button className='profile-button-small bg-blue-500 hover:bg-blue-400 w-[3rem] h-[3rem] rounded-full xl:hidden'>
            <i className="fa fa-address-card" aria-hidden="true"/>
            <Link to="/Profile"></Link>
          </button>

          {/*Friends button*/}
          <button className='friends-button w-[20rem] bg-yellow-500 hover:bg-yellow-400 text-white font-bold 
            py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded-3xl lg:hidden'>
                <Link to="/Friends">Friends</Link>
          </button>
          <button className='profile-button-small bg-yellow-500 hover:bg-yellow-400 w-[3rem] h-[3rem] rounded-full xl:hidden'>
            <i className="fa fa-users" aria-hidden="true"/>
            <Link to="/Friends"></Link>
          </button>

          {/*Games button*/}
          <button className='games-button w-[20rem] bg-green-500 hover:bg-green-400 text-white font-bold 
            py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-3xl lg:hidden'>
                <Link to="/Games">Games</Link>
          </button>
          <button className='profile-button-small bg-green-500 hover:bg-green-400 w-[3rem] h-[3rem] rounded-full xl:hidden'>
            <i className="fa fa-gamepad" aria-hidden="true"/>
            <Link to="/Games"></Link>
          </button>
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
      </>
    )
  }

export default ProfileSideBar