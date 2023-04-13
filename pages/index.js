import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [nav,setNav]=useState(false)
    const [color, setColor]=useState('transparent');
    const [textColor,setTextColor]=useState("white");


    const  handleNav=()=>{
        setNav(!nav);
    }

    useEffect( ()=>{
        const changeColor=()=>{
            if(window.screenY>+90)
            {
                setColor('#fffff')
                setTextColor('#000000')

            }else{
                setColor('transparent')
                setTextColor('white')
            }
        }
        window.addEventListener('scroll',changeColor)
    },[]
    )
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    
<div 
 className='fixed left-0 top-0 w-full z-10 ease-in duration-300 '>
        <div className=' max-w-[1200px] flex justify-between items-center p-4  text-white'>
            <Link href='/' >
             <Image src="/icetlogo.svg"
             
             
             
              width={300}
              height={100}
              priority
             />
            </Link>
            
                {/*Mobile button*/}
                <div onClick={handleNav}  className='block m:hidden z-10' >
                   {nav ?  <AiOutlineClose size={20} style={{color: `${textColor}`}}/> :<AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
                </div>
                {/*Mobile menu*/ }
                <div className={nav 
                ? ' m:hidden absolute left-0 right-0 top-0 bottom-0 w-full h-screen items-center bg-black ease-in duration-300 flex justify-center'
                   :' m:hidden absolute left-[-100%] right-0 top-0 bottom-0 w-full h-screen items-center bg-black ease-in duration-300 flex justify-center' 
                    } >
                <ul>
                <li className='p-4   text-4xl hover:text-gray-500 '>
                    <Link href="/">Home</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500 '>
                    <Link href="/#gallery">Gallery</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500 '>
                    <Link href="/work">Work</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500 '>
                    <Link href="/contact">Contact</Link>
                </li>



            </ul>
                </div>
        </div>
 


    </div>


    </main>
  )
}
