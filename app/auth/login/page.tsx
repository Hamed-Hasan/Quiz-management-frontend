"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import toast from 'react-hot-toast';
import { useUserLoginMutation } from '@/redux/api/authApi';
import validationSchema from '@/schema/loginSchema';
import "../../../styles/global.css"


interface ApiResponse {
    data?: any;
    error?: unknown;
    status?: number;
  }

  
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    // Use the login mutation hook
    const [loginUser, { isLoading, isError }] = useUserLoginMutation();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
      
        try {
          // Validate form data using Yup
          await validationSchema.validate({ email, password }, { abortEarly: false });
      
          // Call the login API
          const response: ApiResponse = await loginUser({ email, password });
      
          console.log('API Response:', response); // Log the response to the console for debugging
      
          // Check if the login was successful (status code 200)
          if (response.data?.accessToken) {
            // Set the accessToken in localStorage
            localStorage.setItem('accessToken', response.data.accessToken);
      
            // Display success message using React Hot Toast
            toast.success('Login successful!');
      
            // Redirect to the quiz page after a short delay
            setTimeout(() => {
              router.push('/quiz'); // Adjust the route based on your project structure
            }, 500);
          } else {
            // If login is not successful, show an error message and log the response
            console.error('Login failed. API Response:', response);
            toast.error('Login failed. Please check your credentials and try again.');
          }
        } catch (error) {
          // Handle validation errors
          if ((error as any).name === 'ValidationError') {
            ((error as any).errors as string[]).forEach((errorMessage: string) => {
              toast.error(errorMessage);
            });
          } else {
            // Handle other errors
            console.error('Login failed', error);
            toast.error('Login failed. Please check your credentials and try again.');
          }
        }
      };
      
      
      

    return (
        <div>
<div className="relative h-screen grid bg-[#010001]">
    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
        <div className="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514254220549-515803732172?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className="absolute bg-black opacity-25 inset-0 z-0"></div>
            <div className="w-full lg:max-w-2xl md:max-w-md z-10 items-center text-center">
                <div className="font-bold leading-tight mb-6 mx-auto w-full content-center items-center">

                    <div className="flex items-center">
                        <span className="text-6xl text-primary text-[#FFA001]">-</span>
                        <div className='pb-6'>
                            {/* <TypeWriter /> */}
                            TypeWriter
                        </div>
                    </div>
                    <p className='font-normal text-left opacity-80'>
                        Embark on a coding odyssey with Arraytics! Conquer our JavaScript take-home exam by crafting an elegant MERN Shopping App. Securely separate frontend and backend, authenticate through APIs, showcase data with flair, and dockerize for seamless deployment. Keep it simple, impress at Arraytics!
                    </p>
                </div>
            </div>
        </div>

        <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
            <div className="max-w-xl w-full space-y-12">
                <div className="lg:text-left text-center">
                    <div className="flex items-center justify-center">
                        <div className="bg-black flex flex-col w-full border border-gray-900 rounded-lg px-8 py-10">
                            <form onSubmit={handleLogin} className="flex flex-col">
                                {/* Your form inputs and labels */}
                                <label className="font-bold text-lg text-white mt-3">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Write Your Email.."
                                    className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white mb-3"
                                />

                                <label className="font-bold text-lg text-white">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Write Your Password.."
                                        className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white w-full"
                                    />
                                    <div className="password-toggle" onClick={togglePasswordVisibility}>
                                        {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="border mt-12 border-indigo-600 bg-black text-white rounded-lg py-2 font-semibold relative"
                                >
                                  <div className='flex items-center justify-center'>
                                    {isLoading && (
                                    <div className="spinner"></div>
                                    )}
                                    <div>
                                    {isLoading ? 'Loggin In...' : 'Login'}
                                    </div>
                                </div>
                                </button>

                                {isError && (
                                    <div className="font-bold text-lg text-red-600 mt-1">
                                        Login failed. Please check your credentials and try again.
                                    </div>
                                )}

                                <div className="flex items-center justify-between mt-4">
                                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                                    <Link href="/auth/signup" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">
                                        Create an account
                                    </Link>
                                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Login;
