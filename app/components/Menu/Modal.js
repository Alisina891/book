'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';


export default function Modal({modalIsOpen , setModalIsOpen}) {

    const [loading , setLoading ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    }
    const handleClose = () => {
        setModalIsOpen(false);
        setLoading(false)
    }

  return (
   <div>
    {modalIsOpen && (
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
                    <Image
                    src={'/images/book.png'}
                    alt='book.image'
                    width={200}
                    height={200}
                    />
                    <h1 className='text-3xl font-bold tracking-tight text-black  border-t border-b '>Sign in to your account</h1>
                    <form className='w-full flex flex-col items-center justify-cente'
                    onSubmit={handleSubmit}>
                    <label>
                        <input
                        type='eamil'
                        placeholder='Email address'
                        required
                        pattern=".*@.*"
                        title='Please enter a valid email address'
                        className=' w-screen max-w-[350px]  border-b py-2 pl-3  mt-3  text-black '
                        
                        />
                    </label>
                    <label>
                    <input
                        type='text'
                        placeholder='Password'
                        className='w-screen max-w-[350px] border-black py-2 pl-3  text-black '
                        required
                        
                        />
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
                    <button className='bg-gradient-to-t hover:from-gray-300 hover:to-gray-900 w-full mx-7 rounded py-1 text-black hover:text-white font-bold mt-9 mb-4 '
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
