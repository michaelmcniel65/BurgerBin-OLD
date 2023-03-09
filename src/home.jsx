import React from 'react';
import './index.css';


function ProfileSideBar() {
  return (
    <>
    <div className='white-background flex flex-col justify-between bg-white min-h-screen w-96'>
      <div className='first-section flex flex-col items-center gap-10'>
        <img className='website-logo pt-5' 
          src="./burgerbinassets/burgerbinlogo.png"
        />
        <h1 className='welcome-user text-3xl text-black pt-4'>Welcome, Bartholomew!
        </h1>
        <img className='profile-picture w-[20rem] h-[20rem] rounded-full object-cover' 
            src='./burgerbinassets/defaultprofileimage.jpg'
        />
        <button className='profile-button w-[20rem] bg-blue-500 hover:bg-blue-400 text-white font-bold 
          py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-3xl'>Profile
        </button>
        <button className='friends-button w-[20rem] bg-yellow-500 hover:bg-yellow-400 text-white font-bold 
          py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded-3xl'>Friends
        </button>
        <button className='games-button w-[20rem] bg-green-500 hover:bg-green-400 text-white font-bold 
          py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-3xl'>Games
        </button>
      </div>
      <div className='second-section flex flex-col items-center p-5'>
      <button className='logout-button bg-red-500 hover:bg-red-400 text-white font-bold 
          py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-3xl'>Logout
        </button>
      </div>
    </div>
    </>
  )
}


function contentScroll() {
  return (
    <>

    </>
  )
}

export default function Home() {
  
  return (
    <>
    <div className='flex'>
      <ProfileSideBar/>
      <div className='border w-[300px]'></div>
      <div></div>
    </div>
    </>
  )
}