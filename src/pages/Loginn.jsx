import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from '../config/firebase-config';
import { getDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';



const Loginn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggin, setLoggin] = useState(null);
    const  loading = useSelector(state => state)
    console.log(loading)


    const login = (e) => {
        e.preventDefault();
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                getDoc(doc(db, "UserData", user.uid))
                    .then((user) => {
                        localStorage.setItem(
                            "sociogram-lite-user",
                            JSON.stringify({ ...user.data(), id: user.id })
                        );
                        toast.success("Login Successfull")
                        setEmail("");
                        setPassword("");
                    })

                setLoggin(user);
            })
            .catch((error) => {
                toast.error("Login failed")
            })
    };

    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged((loggin) => {
            if (loggin) {
                setLoggin(loggin)
            }
            else {
                setLoggin(null)
            }
        });

        return () => unSubscribe()
    }, []);

    return (
        <div className='h-screen flex flex-col justify-center items-center '>
            {/* <Loader /> */}
            <div className='p-3 mb-8'>
                <h1 className='text-5xl font-semibold text-secondary font-sociogram italic'>Sociogram</h1>
            </div>
            <div className='w-96 flex flex-col space-y-5 shadow-xl p-6'>
                <h1 className='text-4xl text-tertiary font-semibold'>Welcome Back</h1>
                <p className='text-tertiary text-opacity-75 text-sm font-thin mt-3'>Please enter your details</p>
                {/* <hr /> */}
                <input
                    type="email"
                    placeholder='email'
                    className='h-12 border border-gray-300 focus:border-gray-500 pl-4 rounded-md focus:outline-none'
                    onChange={(e) => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder='password'
                    className='h-12 border border-gray-300 focus:border-gray-500 pl-4 rounded-md focus:outline-none'
                    onChange={(e) => setPassword(e.target.value)} />
                <div className='flex justify-center'>
                    <button
                        className={`bg-secondary text-primary h-12 rounded-md w-full hover:bg-opacity-90 transition-all`}
                        onClick={login}
                    >Login</button>
                </div>
                <div className='flex flex-row justify-center items-center text-tertiary'>
                    <p className='px-1 font-thin text-[15px]'>dont have an account?</p>
                    <Link to='/register' className='text-secondary underline font-thin text-[16px]'>Register</Link>
                </div>
            </div> 
        </div>
    )
}

export default Loginn