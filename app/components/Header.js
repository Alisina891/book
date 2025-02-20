'use client'
import Image from "next/image";
import { useRef  , useEffect , useState} from 'react'
import { motion } from 'framer-motion';
import MoveButton from './Menu/menu';
import Modal from './Menu/Modal';
import Modal1 from './Menu/Modal copy'

export default function Header({light , onClick , setLight}){

    const [modalIsOpen , setModalIsOpen] = useState(false); 
    const [registerIsOpen , setRegisterIsOpen] = useState(false);

    const [isOpen , setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {setIsOpen(false);

            }
        };

     document.addEventListener("mousedown", handleClickOutside)

     return () => {
        document.removeEventListener("mousedown" , handleClickOutside)
     };
    } , []);
    
    const toggleMenu = () => {
        
        setIsOpen((prev) => !prev)
    }

    
 return (
   
     <div className="fixed top-0 w-full z-10">
        <div className={`flex justify-between ${light===false ? 'bg-gradient-to-tr from-gray-700 to-gray-900': 'bg-gradient-to-tr from-gray-100 to-gray-200'}`}>
        <Image
            src={'/images/book.png'}
            alt="book-image"
            width={80}
            height={80}
            className="ml-5"
        />
        <div className="flex justify-center items-center gap-3 mr-5">

         <div className="sm:hidden "
         onClick={() => setIsOpen(toggleMenu)}
         >
          <Image
           src={`${light === false ? '/images/menu.png' : '/images/white-menu.png'}`}
           alt='menu-image'
           width={15}
           height={15}
           />
          </div>
          <div className="hidden sm:flex gap-5 ">
            <button className={`font-semibold font-sans  ${light ? 'text-black' : 'white'}`} 
            onClick={() => setModalIsOpen(true)}>Login</button>
            <button
            onClick={() => setRegisterIsOpen(true)} className={`font-semibold font-sans  ${light ? 'text-black' : 'white'}`} >Register</button>
          </div>

          <div
          className=" cursor-pointer"
          onClick={onClick}
          
          >
          <div className="sm:hidden">
          <Image
          src={`${light === true ? '/images/moon.png' : '/images/sun.png'}`}
          alt="sun-image"
          width={15}
          height={15}
          />
          </div>
          <div className=" hidden sm:flex items-center justify-center">
            <MoveButton
            light={light}
            setLight={setLight} />
          </div>
          </div>
          
        </div>    
    </div>
    <motion.div
        ref={menuRef}
        initial={{ scaleX: 0, opacity: 0}}
        animate={isOpen ? {scaleX: 1, opacity: 1} : {scaleY: 0 , opacity: 0}}
        transition={{duration: isOpen ? 0.2 : 1,ease: "easeInOut"}}
        className={`w-full h-auto bg-white rounded flex flex-col justify-center items-center  ${light===false ? 'bg-gradient-to-tr from-gray-500 to-gray-900': 'bg-gradient-to-tl from-gray-200 to-gray-300 text-black'} py-12 sm:hidden`}>
            <button
            onClick={() => setModalIsOpen(true)} className={` rounded w-[320px] py-1 border hover:${light === true ? 'bg-gradient-to-b hover:from-gray-500 hover:to-gray-100 hover:text-white border-black hover:border-none': 'bg-gradient-to-b hover:from-gray-300 hover:to-gray-700 hover:text-black'}`}>login</button>
            <button
            onClick={() => setRegisterIsOpen(true)} className={` rounded w-[320px] py-1 border hover:${light === true ? 'bg-gradient-to-b hover:from-gray-500 hover:to-gray-100 hover:text-white border-black hover:border-none': 'bg-gradient-to-b hover:from-gray-300 hover:to-gray-700 hover:text-black'} mt-10`}>register</button>
            
        </motion.div> 
        <Modal 
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}/>
        <Modal1 
        ok={registerIsOpen}
        notOk={setRegisterIsOpen}
        />

</div>
  )
}
