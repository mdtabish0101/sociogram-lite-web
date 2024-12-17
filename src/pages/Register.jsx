import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../config/firebase-config';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const loading = useSelector((state)=>state.Loader.loading);
  const dispatch = useDispatch();


  const register = (e) => {
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    e.preventDefault();
    dispatch({type:"SET_LOADING", payload: true})
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          email: user.email,
          profilePicUrl: '',
          bio: 'Your Bio here',
        }
        setDoc(doc(db, "UserData", user.uid), userData)
          .then(() => {
            toast.success("Registration Successfull")
            setError("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
          })
          .catch((error) => {
            toast.error("Somthing went wrong")
            setError("Error saving user data: " + error.message);
          });
          dispatch({type:"SET_LOADING", payload: false})
      })
      .catch((error) => {
        toast.error("Register Unsucessfull")
        setError(error.message);
        dispatch({type:"SET_LOADING", payload: false})

      })
  }

  return (

    <div className='h-screen flex flex-col justify-center items-center bg-opacity-80 bg-secondary'>
      {loading && <Loader/>}
      <div className='mb-8'>
        <h1 className='text-5xl font-semibold text-primary font-sociogram italic bg-opacity-80 bg-secondary'>Sociogram</h1>
      </div>
      <div className='w-96 flex flex-col space-y-5 shadow-xl p-7 rounded-xl bg-primary'>
        <div>
          <h1 className='text-4xl text-tertiary font-semibold bg-primary'>Welcome</h1>
        </div>
        <p className='text-tertiary text-opacity-75 text-sm font-thin mt-3 bg-primary'>Please enter your details</p>
        {/* <hr /> */}
        <input
          type="email"
          placeholder='email'
          className='h-12 pl-4 rounded-md focus:outline-none text-gray-600'
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder='password'
          className='h-12 pl-4 rounded-md focus:outline-none text-gray-600'
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <input
          type="password"
          placeholder='confirm password'
          className='h-12 pl-4 rounded-md focus:outline-none text-gray-600'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} />
        <div className='flex flex-col justify-center items-center bg-primary'>
          
          <button
            className={`bg-secondary text-primary h-12 rounded-md w-full hover:bg-opacity-90 transition-all`}
            onClick={register}
          >Register</button>
        </div>
        <div className='flex flex-row justify-center items-center text-tertiary bg-primary'>
          <p className='px-1 font-thin text-[15px] bg-primary'>Have an account?</p>
          <Link to='/login' className='text-secondary underline font-thin text-[16px] bg-primary'>login</Link>
        </div>
      </div>
    </div>
  )
}

export default Register