import { motion } from 'framer-motion';
import Image from 'next/image';
export default function Main({light}) {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
       <div className='mt-20 w-full'>
        <label className='flex w-[390px] gap-3 items-center border-sky-500  sm:w-[450px] border rounded-md ml-4 md:w-[400px]  '>

        <Image
            alt='Search-image'
            src={`${light === true ? '/images/search.png' : '/images/white.png'}`}
            height={20}
            width={20}
            className='ml-3'
            />
            <input
            type='text'
             className={`py-1  bg-transparent border-none focus:outline-none placeholder:font-serif ${light ? "placeholder:text-black" : "placeholder:text-white"}`}
             placeholder='Search for anything...' />
        </label>    
        
        </div> 
       <div className='mt-48 flex mb-96'>
       <motion.div
        className='w-4 h-4 bg-blue-400 rounded-full mx-1' 
        animate={{y: [-12, 5 , -12]}}
        transition={{duration: 0.5, repeat: Infinity, ease: "easeInOut"}}
        />
        <motion.div
        className='w-4 h-4 bg-blue-400 rounded-full mx-1' 
        animate={{y: [-12, 5 , -12]}}
        transition={{duration: 0.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        /><motion.div
        className='w-4 h-4 bg-blue-400 rounded-full mx-1' 
        animate={{y: [-12, 5 , -12]}}
        transition={{duration: 0.5, repeat: Infinity, ease: "easeInOut" ,delay: 0.4}}
        />
       </div>
        <div className='flex justify-center items-center gap-4 mb-5'>
            <p className={light ? 'text-black' : 'text-white'}>&#9426; 2024 Tutiatech,Inc</p>
            <a href='https://github.com/tutiatechnology' >
            <Image
            src={light === true ?'/images/black.png' : '/images/whiteL.png'}
            height={24}
            width={24}
            alt='logo'
            className=' cursor-pointer'
            />
            </a>
        </div>
    </div>
  )
}
