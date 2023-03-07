import React from 'react';
import './index.css';


function ProfileSideBar() {
  return (
    <>
      <div className='flex flex-col items-center gap-10 border'>
        <h1 className='welcome-user text-3xl text-black pt-4'>Welcome, Bartholomew!</h1>
        <img className='w-[20rem] h-[20rem] rounded-full object-cover' 
            src='./burgerbinassets/defaultprofileimage.jpg'/>
        <button className='w-[20rem] bg-blue-500 hover:bg-blue-400 text-white font-bold 
          py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-3xl'>Profile</button>
        <button className='w-[20rem] bg-yellow-500 hover:bg-yellow-400 text-white font-bold 
          py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded-3xl'>Friends</button>
        <button className='w-[20rem] bg-green-500 hover:bg-green-400 text-white font-bold 
          py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-3xl'>Games</button>
      </div>
      <div className='flex flex-col items-center p-5 border'>
      <button className='bg-red-500 hover:bg-red-400 text-white font-bold 
          py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-3xl'>Logout</button>
      </div>
    </>
  )
}

export default function Home() {
  
  return (
    <>
    <div className='flex justify-between border'>
      <div className='flex flex-col justify-between bg-white border min-h-screen w-[400px]'>
        <ProfileSideBar/>
      </div>
      <div className='border max-h-[110px] p-7'>
        <img src="./burgerbinassets/burgerbinlogo.png"/>
      </div>   
    </div>
    </>
  )
}