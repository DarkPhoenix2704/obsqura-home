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
    <main >

    
<div 
 className=' left-0 top-0 w-full z-10 ease-in duration-300 '>
        <div className='  flex justify-between m-5 p-5  text-white'>
            <Link href='/' >
             <Image src="/icetlogo.svg"
             
             
             
              width={300}
              height={100}
              priority
             />
            </Link>
            
                {/*Mobile button*/}
                <div onClick={handleNav}  className='block m:hidden z-10 ' >
                   {nav ?  <AiOutlineClose size={20} style={{color: `${textColor}`}}/> :<AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
                </div>
                {/*Mobile menu*/ }
                <div className={nav 
                ? ' m:hidden absolute left-0 right-0 top-0 bottom-0 w-full h-screen items-center bg-black ease-in duration-300 flex justify-center'
                   :' m:hidden absolute left-[-100%] right-0 top-0 bottom-0 w-full h-screen items-center bg-black ease-in duration-300 flex justify-center' 
                    } >
                <ul>
                <li className='p-4   text-4xl hover:text-gray-500 '>
                    <Link href="/">About</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500 '>
                    <Link href="/#gallery">Events</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500 '>
                    <Link href="/work">Workshops</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500 '>
                    <Link href="/work">Competitions</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500 '>
                    <Link href="/contact">Contact Support</Link>
                </li>



            </ul>
                </div>
        </div>
 


    </div>

    

    <div className='flex items-center justify-between h-screen mb-[8rem] bg-fixed bg-center bg-cover custom-img '>
    <div className='p-5 text-white mt-[-10rem]'>
            <div className='py-5 mt-[-8rem]'>
            <h2 className='text-7xl font-bold font-spaceGrotesk"'>UNLEASH THE</h2>
            <br></br>
            <h2 className='text-7xl font-bold font-spaceGrotesk" '>REALITY</h2>
            </div>
            <div class="flex"><a href="#mtabs" class="px-4 py-2 text-xs md:text-base  md:px-8 md:py-5  mr-2 text-black font-bold font-spaceGrotesk bg-violet-600 hover:bg-zinc-900 hover:text-white transition-all duration-300">EXPLORE</a><a aria-current="page" class="px-4 py-2  text-xs md:text-base md:px-8 md:py-5  mr-2 text-white font-bold font-spaceGrotesk bg-zinc-600 hover:bg-zinc-900 hover:text-white transition-all duration-300 active" href="/">REGISTER</a></div>
          
    </div>
    
        </div>
       
       <div>
        <h1>About</h1>
       </div>
       
       <div>
       <div id="mtabs" class="sticky top-0 z-30  bg-black"><div class="container mx-auto bg-black"><div class="flex z-10 flex-row justify-start whitespace-nowrap overflow-auto scrollbar-hide mx-0"><a aria-current="page" class="text-violet-600 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-5 my-4 cursor-pointer" href="/">ALL</a><a class="text-zinc-500 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-5 my-4 cursor-pointer" href="/workshops">WORKSHOPS</a><a class="text-zinc-500 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-8 my-4 cursor-pointer" href="/competitions">COMPETITIONS</a><a class="text-zinc-500 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-8 my-4 cursor-pointer" href="/expo">EXPO</a><a class="text-zinc-500 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-8 my-4 cursor-pointer" href="/events">EVENTS</a></div><div class="lg:mx-10"><div class="w-full bg-gray-100/20 h-0.5"></div></div></div></div>
       </div>
 
    </main>
    
        

  )
}

