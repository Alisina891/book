'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';


export default function Modal({ok, notOk}) {

    const [loading , setLoading ] = useState(false);
    const [password , setPassword] = useState('')
    const [confirmPassword , setConFirmPassword] = useState('');
    const [error , setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError(" Password must match");
            return
        }
    
        setError('')
        setLoading(true)
    }

    const handleClose =() => {
        notOk(false);
        setLoading(false)
    }
    
    
  return (
   <div>
    {ok && (
        <div className='fixed inset-0 bg-gray-700 bg-opacity-90 backdrop-blure-md flex items-center justify-center '>
            <motion.div
            initial={{ opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0 , scale: 0.8}}
            transition={{duration: 0.1,ease: "easeInOut"}}
            className='bg-white rounded shadow-lg  
            bg-gradient-to-t from-gray-300 to-gray-500 w-screen max-w-[380px]' >
                <button onClick={handleClose}>
                    <Image
                    alt='book.images'
                    src={'/images/close.png'}
                    width={20}
                    height={20}
                    className=' mt-2 ml-3 border-2 border-black p-[2px] '
                    />
                </button>

                <div className='flex items-center justify-center flex-col '>
                    <h1 className='text-3xl font-bold tracking-tight text-black '>Create an account</h1>
                    <form className='w-full flex flex-col items-center justify-cente'
                    onSubmit={handleSubmit}>
                    <label className='flex flex-col text-start justify-center items-start ml-5 w-full mt-2'>
                        User Name
                        <input
                        type='text'
                        placeholder='User name'
                        required
                        className=' w-[350px] rounded px-20 bg-gray-700 text-white border-b py-2 pl-3  mt-1  '
                        
                        />
                    </label>
                    <label className='flex flex-col text-start justify-center items-start ml-5 w-full mt-1'>
                        <span>Email<span className='text-red-600 font-bold ml-1'>*</span></span>
                        <input
                        type='email'
                        placeholder='Email'
                        required
                        className=' w-[350px] rounded px-20 bg-gray-700 text-white border-b py-2 pl-3  mt-1   '
                        
                        />
                    </label>
                    <label className='flex flex-col text-start justify-center items-start ml-5 w-full mt-2'>
                        password
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                        type='text'
                        required
                        className=' w-[350px] rounded px-20 bg-gray-700 text-white border-b py-2 pl-3  mt-1   '
                        
                        />
                    </label>
                    <label className='flex flex-col text-start justify-center items-start ml-5 w-full mt-2'>
                        confirm password
                        <input
                        onChange={(e) => setConFirmPassword(e.target.value)}
                        type='text'
                        required
                        className=' w-[350px] rounded px-20 bg-gray-700 text-white border-b py-2 pl-3 mt-1    '
                        
                        />
                        {error && <p className='text-red-700'>{error}</p> }
                    </label>
                    
                    <div className='flex w-full text-black text-sm mt-5 font-bold'>
                    <div className='w-full flex gap-3 items-center content-center'>
                    <input
                    type='checkbox'
                    className='w-4 h-4 ml-8  '
                    />
                    <p>Remember me</p>
                    </div>
                    <p className='w-[300px] mr-7'>Forgot your passwore?</p>
                    </div>
                    <button className='bg-gradient-to-t hover:from-gray-300 hover:to-gray-900 w-[330px] rounded py-2 text-black hover:text-white font-bold mt-9 mb-4 '
                    type='sumbit'>Sign in</button>

                    {loading && (
                        <motion.div 
                        className='flex justify-center mt-4'
                        initial={{rotate: 0}}
                        animate={{rotate: 360}}
                        transition={{repeat: Infinity,duration: 1}} >
                            <div className='border-t-4 border-blue-500 border-solid rounded-full w-12 h-12'></div>
                        </motion.div>
                    )}
                    </form>
                    
                </div>
               
            </motion.div>
            
        </div>
    )}
   </div>
  )
}
