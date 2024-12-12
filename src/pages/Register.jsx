import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");


  const register = (e) => {
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    e.preventDefault(); // Prevents the default form submission
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user; // Access the user object
        console.log("User created:", user);
        setError("")
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error creating account:", error.message);

      });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='p-3 mb-8'>
        <h1 className='text-5xl font-semibold text-secondary font-sociogram italic'>Sociogram</h1>
      </div>
      <div className='w-96 flex flex-col space-y-5 shadow-xl p-6'>
        <div>
          <h1 className='text-4xl text-tertiary font-semibold'>Welcome</h1>
        </div>
        <p className='text-tertiary text-opacity-75 text-sm font-thin mt-3'>Please enter your details</p>
        {/* <hr /> */}
        <input
          type="email"
          placeholder='email'
          className='h-12 border border-gray-300 focus:border-gray-500 pl-4 rounded-md focus:outline-none text-gray-600'
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder='password'
          className='h-12 border border-gray-300 focus:border-gray-500 pl-4 rounded-md focus:outline-none text-gray-600'
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <input
          type="password"
          placeholder='confirm password'
          className='h-12 border border-gray-300 focus:border-gray-500 pl-4 rounded-md focus:outline-none text-gray-600'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} />
        <div className='flex flex-col justify-center items-center'>
          {error && <p className='text-red-500 text-sm mb-1'>{error}</p>}
          <button
            className='bg-secondary text-primary h-12 rounded-md w-full hover:bg-opacity-90 transition-all'
            onClick={register}>Register</button>
        </div>
        <div className='flex flex-row justify-center items-center text-tertiary'>
          <p className='px-1 font-thin text-[15px]'>Have an account?</p>
          <Link to='/login' className='text-secondary underline font-thin text-[16px]'>login</Link>
        </div>
      </div>
    </div>
  )
}

export default Register