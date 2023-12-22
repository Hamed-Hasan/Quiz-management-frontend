"use client"
import React from 'react';
import { useState } from 'react';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import "../../../styles/global.css"
import Link from 'next/link';



const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };


    return (
        <>
            <div>
                <div className="relative h-screen grid bg-[#0A0A0A]">
                    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
                        <div className="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511140973288-19bf21d7e771?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                            <div className="absolute bg-black opacity-25 inset-0 z-0"></div>
                            <div className="w-full lg:max-w-2xl md:max-w-md z-10 items-center text-center">
                                <div className="font-bold leading-tight mb-6 mx-auto w-full content-center items-center"></div>
                            </div>
                        </div>

                        <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
                            <div className="max-w-xl w-full space-y-12">
                                <div className="lg:text-left text-center">
                                    <div className="flex items-center justify-center">
                                        <div className="bg-black flex flex-col w-full border border-gray-900 rounded-lg px-8 py-10">
                                            <form className="flex flex-col  ">
                                            
                                                <label htmlFor="email" className="font-bold text-lg text-white mt-3">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    placeholder="Write Your Email.."
                                                    className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white mb-3" />
                                                <div className="font-bold text-lg text-red-600 mt-1">
                                                  

                                                </div>
                                                <label htmlFor="password" className="font-bold text-lg text-white">Password</label>

                                                <div className="relative">
                                                    <input
                                                        type={showPassword ? 'text' : 'password'}
                                                      
                                                        placeholder="Write Your Password.."
                                                        className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white w-full"
                                                    />

                                                    <div className="password-toggle" onClick={togglePasswordVisibility}>
                                                        {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                                                    </div>
                                                </div>
                                                <div className="font-bold text-lg text-red-600 mt-1">
                                                  

                                                </div>
                                                <button
                                                    type="submit"
                                                    className="border mt-12 border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold relative"
                                                   
                                                >
                                                    <div className='flex items-center justify-center'>
                                                        Signup
                                                    </div>
                                                </button>
                                                <div className="flex items-center justify-between mt-4"><span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span> <Link href="/" className="text-xs  text-gray-500 uppercase dark:text-gray-400 hover:underline">DO YOU HAVE AN ACCOUNT?</Link> <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;