import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from '../config/firebase-config';
import { getDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';



const Loginn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggin, setLoggin] = useState(null);
    const  loading = useSelector((state) => state.Loader.loading)
    const dispatch = useDispatch()


    const login = (e) => {
        e.preventDefault();
        dispatch({type:"SET_LOADING", payload:true})
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
                dispatch({type:"SET_LOADING", payload:false})
            })
            .catch((error) => {
                toast.error("Login failed")
                dispatch({type:"SET_LOADING", payload:false})
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
        <div className='h-screen flex flex-col justify-center items-center bg-opacity-80 bg-primary'>
            {loading && <Loader/>}
            <div className='mb-8'>
                <h1 className='text-5xl font-semibold text-secondary font-sociogram italic bg-opacity-80 bg-primary'>Sociogram</h1>
            </div>
            <div className='w-96 flex flex-col space-y-5 shadow-2xl rounded-xl p-7 bg-accent'>
                <h1 className='text-4xl text-tertiary font-semibold bg-inherit'>Welcome Back</h1>
                <p className='text-tertiary text-opacity-75 text-sm font-thin mt-3 bg-inherit'>Please enter your details</p>
                {/* <hr /> */}
                <input
                    type="email"
                    placeholder='email'
                    className='h-12 pl-4 rounded-md focus:outline-none'
                    onChange={(e) => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder='password'
                    className='h-12 pl-4 rounded-md focus:outline-none'
                    onChange={(e) => setPassword(e.target.value)} />
                <div className='flex justify-center bg-inherit'>
                    <button
                        className={`bg-secondary text-primary h-12 rounded-md w-full hover:bg-opacity-90 transition-all`}
                        onClick={login}
                    >Login</button>
                </div>
                <div className='flex flex-row justify-center items-center text-tertiary bg-inherit'>
                    <p className='px-1 font-thin text-[15px] bg-inherit'>dont have an account?</p>
                    <Link to='/register' className='text-secondary underline font-thin text-[16px] bg-inherit'>Register</Link>
                </div>
            </div> 
        </div>
    )
}

export default Loginn