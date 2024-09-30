import React from "react";
import {useState} from 'react'
import { Link } from "react-router-dom";

export default function SignupForm() {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <form  className="flex flex-col">
          <div className="flex items-center justify-center">
          <img 
                src="/images/logoimg.svg"
                alt ="logo"
                width ={50}
                height={50}
                className='invert'
          />
            <h1 className="m-2 text-white text-4xl">PostX</h1>
          </div>
          <h2 className="text-2xl text-gray-200 mb-4 text-center">Create your account</h2>
          <input 
            onChange={(e)=> setName(e.target.value)} 
            placeholder= "Name" 
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
            type="text" 
          />
          <input 
            onChange={(e)=> setUserName(e.target.value)} 
            placeholder="User Name" 
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
            type="text" 
            />
          <input
            onChange={(e)=> setEmail(e.target.value)} 
            placeholder="Email address"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
          />
          <input
            onChange={(e)=> setPassword(e.target.value)} 
            placeholder="Password"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
          />
          <input
            onChange={(e)=> setConfirmPassword(e.target.value)} 
            placeholder="Confirm Password"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
          />
          <p className="text-white mt-4">
            Already have an account?
            <Link to='/signin' className='text-blue-500 -200 hover:underline px-2'>Sign in</Link>
          </p>
          <button
            className="w-full h-12  text-white font-bold py-2 px-4 rounded-md mt-4 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-150"
            type="submit"
          >
            Sign Up
          </button>      
        </form>
      </div>
    </div>
  )
}


