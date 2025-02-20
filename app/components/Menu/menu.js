'use client'
import Image from "next/image";
import { motion } from 'framer-motion';

export default function MoveButton({light , setLight}) {
    
  return (
    <div className="flex items-center justify-center  bg-gray-400 pl-6 rounded-full ">
        <motion.button
        className="px-2 py-1 font-semibold  text-white bg-blue-500  rounded-full "
        animate={{x: light? -25 : 0}}
        transition={{type: 'spring', stiffness: 200, damping: 10}}
        >
            <Image
            src={`${light ? '/images/sun.png' : '/images/moon.png'}`}
            alt="sun-image"
            height={18}
            width={18}
            />
        </motion.button>
    </div>
  )
}
