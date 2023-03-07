import React from 'react';
import './index.css';


function ProfileSideBar() {
  return (
    <>
    <div className='flex flex-col items-center gap-10 border'>
      <h1 className='welcome-user text-3xl text-black pt-4'>Welcome, Bartholomew!</h1>
      <img className='w-[20rem] h-[20rem] rounded-full object-cover' 
           src='./burgerbinassets/defaultprofileimage.jpg'/>
      
    </div>
    </>
  )
}

export default function Home() {
  
  return (
    <>
    <div className='flex justify-between border'>
      <div className='bg-white border min-h-screen w-[400px]'>
        <ProfileSideBar/>
      </div>
      <div className='border max-h-[110px] p-7'>
        <img src="./burgerbinassets/burgerbinlogo.png"/>
      </div>   
    </div>
    </>
  )
}