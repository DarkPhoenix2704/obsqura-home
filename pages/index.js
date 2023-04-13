import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ItemsCarousel from 'react-items-carousel';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'









const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [EventsactiveItemIndex, setEventsActiveItemIndex] = useState(0);
    const [WkshopsactiveItemIndex, setWkshopsActiveItemIndex] = useState(0);
  const chevronWidth = 40;
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

    

    <div className='flex items-center justify-between h-screen mb-[4rem] bg-fixed bg-center bg-cover custom-img '>
    <div className='p-5 text-white mt-[-10rem]'>
            <div className='py-5 mt-[-8rem]'>
            <h2 className='text-7xl font-bold font-spaceGrotesk"'>UNLEASH THE</h2>
            <br></br>
            <h2 className='text-7xl font-bold font-spaceGrotesk" '>REALITY</h2>
            </div>
            <div class="flex"><a href="#mtabs" class="px-4 py-2 text-xs md:text-base  md:px-8 md:py-5  mr-2 text-black font-bold font-spaceGrotesk bg-violet-600 hover:bg-zinc-900 hover:text-white transition-all duration-300">EXPLORE</a><a aria-current="page" class="px-4 py-2  text-xs md:text-base md:px-8 md:py-5  mr-2 text-white font-bold font-spaceGrotesk bg-zinc-600 hover:bg-zinc-900 hover:text-white transition-all duration-300 active" href="/">REGISTER</a></div>
          
    </div>
    
        </div>
       
        <div class="py-5 lg:py-10 mb-[7rem]"><div class="px-4 lg:px-64 sm:px-4 container mx-auto">
            <h1 className='text-4xl font-bold'>About</h1>
            <br></br>
            <h1 class="text-white font-spaceGrotesk lg:text-2xl md:text-xl text-lg">Obscura is the national level annual technical festival of Ilahia College of Engineering and Technology Mulavoor. It is a three-day event that showcases the technical prowess and creativity of students from across the region. The festival provides a platform for students to showcase their talent, interact with industry experts, and learn about the latest technological advancements.
</h1><br></br></div></div>
     
     <div className='px-2 lg:px-40 sm:px-4 mb-[6rem]'>
        <h1 className='text-3xl font-bold  text-white'>Events</h1>
        
       
     </div>
     
     <div style={{ padding: `0 ${chevronWidth}px` }} className='mb-[10rem]'>
      <ItemsCarousel
        requestToChangeActive={setEventsActiveItemIndex}
        activeItemIndex={EventsactiveItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 200,width:300, background: '#EEE' }}>First card</div>
        <div style={{ height: 200,width:300, background: '#EEE' }}>Second card</div>
        <div style={{ height: 200, width:300,background: '#EEE' }}>Third card</div>
        <div style={{ height: 200,width:300, background: '#EEE' }}>Fourth card</div>
        <div style={{ height: 200,width:300, background: '#EEE' }}>First card</div>
        <div style={{ height: 200,width:300, background: '#EEE' }}>Second card</div>
        <div style={{ height: 200, width:300,background: '#EEE' }}>Third card</div>
        <div style={{ height: 200,width:300, background: '#EEE' }}>Fourth card</div>
      </ItemsCarousel>
     </div>

     <div className='px-2 lg:px-40 sm:px-4 mb-[6rem]'>
        <h1 className='text-3xl font-bold  text-white'>Workshops</h1>
        
       
     </div>
     
     <div style={{ padding: `0 ${chevronWidth}px` }} className='mb-[10rem]'>
      <ItemsCarousel
        requestToChangeActive={setWkshopsActiveItemIndex}
        activeItemIndex={WkshopsactiveItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        
      >
        <div style={{ height: 200,width:300, background: '#EEE' }}><a href='/'>fisrt</a></div>
        <div style={{ height: 200,width:300, background: '#EEE' }}>Second card</div>
        <div style={{ height: 200, width:300,background: '#EEE' }}>Third card</div>
        <div style={{ height: 200,width:300, background: '#EEE' }}>Fourth card</div>
        <div style={{ height: 200,width:300, background: '#EEE' }}>First card</div>
        <div style={{ height: 200,width:300, background: '#EEE' }}>Second card</div>
        <div style={{ height: 200, width:300,background: '#EEE' }}>Third card</div>
        <div style={{ height: 200,width:300, background: '#EEE' }}>Fourth card</div>
      </ItemsCarousel>
     </div>
       
 
    </main>
    
        

  )
}

