import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ItemsCarousel from 'react-items-carousel';
import {AiOutlineMenu, AiOutlineClose, AiFillInstagram, AiFillPhone} from 'react-icons/ai'










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
                    <Link href="#about">About</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500 '>
                    <Link href="#events">Events</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500 '>
                    <Link href="#workshop">Workshops</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500 '>
                    <Link href="#competitions">Competitions</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500 '>
                    <Link href="#contact">Contact Support</Link>
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
            <div class="flex"><a href="#events" class="px-4 py-2 text-xs md:text-base  md:px-8 md:py-5  mr-2 text-black font-bold font-spaceGrotesk bg-violet-600 hover:bg-zinc-900 hover:text-white transition-all duration-300">EXPLORE</a><a aria-current="page" class="px-4 py-2  text-xs md:text-base md:px-8 md:py-5  mr-2 text-white font-bold font-spaceGrotesk bg-zinc-600 hover:bg-zinc-900 hover:text-white transition-all duration-300 active" href="/">REGISTER</a></div>
          
    </div>
    
        </div>
       
        <div id='about' class="py-5 lg:py-10 mb-[7rem]"><div class="px-4 lg:px-64 sm:px-4 container mx-auto">
            <h1 className='text-4xl font-bold'>About</h1>
            <br></br>
            <h1 class="text-white font-spaceGrotesk lg:text-2xl md:text-xl text-lg">Obscura is the national level annual technical festival of Ilahia College of Engineering and Technology Mulavoor. It is a three-day event that showcases the technical prowess and creativity of students from across the region. The festival provides a platform for students to showcase their talent, interact with industry experts, and learn about the latest technological advancements.
</h1><br></br></div></div>
     
     <div id='events' className='px-2 lg:px-40 sm:px-4 mb-[6rem]'>
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
        <div className='text-black font-bold items-center ' style={{ height: 200,width:300, background: '#EEE' }}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60y5IKXel6z0_aqrSNfGQp8euiIuv52pzpg&usqp=CAU' style={{width:300,height:200   }}></img></div>
        <div className='text-black font-bold items-center' style={{ height: 200,width:300, background: '#EEE' }}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60y5IKXel6z0_aqrSNfGQp8euiIuv52pzpg&usqp=CAU' style={{width:300,height:200   }}></img></div>
        <div className='text-black font-bold items-center' style={{ height: 200, width:300,background: '#EEE' }}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60y5IKXel6z0_aqrSNfGQp8euiIuv52pzpg&usqp=CAU' style={{width:300,height:200   }}></img></div>
        <div className='text-black font-bold items-center' style={{ height: 200,width:300, background: '#EEE' }}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60y5IKXel6z0_aqrSNfGQp8euiIuv52pzpg&usqp=CAU' style={{width:300,height:200   }}></img></div>
        <div className='text-black font-bold items-center' style={{ height: 200,width:300, background: '#EEE' }}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60y5IKXel6z0_aqrSNfGQp8euiIuv52pzpg&usqp=CAU' style={{width:300,height:200   }}></img></div>
        <div className='text-black font-bold items-center' style={{ height: 200, width:300,background: '#EEE' }}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60y5IKXel6z0_aqrSNfGQp8euiIuv52pzpg&usqp=CAU' style={{width:300,height:200   }}></img></div>
        <div className='text-black font-bold items-center' style={{ height: 200,width:300, background: '#EEE' }}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60y5IKXel6z0_aqrSNfGQp8euiIuv52pzpg&usqp=CAU' style={{width:300,height:200   }}></img></div>
      </ItemsCarousel>
     </div>

     <div id='workshop' className='px-2 lg:px-40 sm:px-4 mb-[6rem]'>
        <h1 className='text-5xl font-bold  text-white'>Workshops</h1>
        
       
     </div>
     
     <div className='class="bg-black grid grid-rows-2 items-stretch lg:grid-cols-3 home-cards-container ' style={
        {opacity: 1, transform: 'none' }}>

<div style={{opacity: 1, transform: 'none'}}>
    <a class="" href="/workshop/A09MECW">
        <div class="home-card ml-2 mr-2 h-full pt-2 pb-5  lg:pl-5 lg:pr-5 lg:w-auto w-full duration-300 hover:scale-105 text-white " style={{width: 400}}>
            <div class="shadow-lg hover:bg-zinc-900  cursor-pointerbg-white hover:scale-none"><div class="bg-black relative">
                <img class="m-0 p-0 w-full" src="https://t4.ftcdn.net/jpg/03/17/47/97/360_F_317479799_fMZdfR27iBjpxOtW1g5af9eIrQdQ92Zf.jpg" alt="WORKSHOP ON BAJA BUGGY"/>
                <div class="absolute top-0 text-xs left-0 bg-blue-800 tracking-tight backdrop-blur-md px-4 py-1  font-spaceGrotesk">Comming Soon</div>
                <div class="absolute bottom-0 right-5 rounded-t-lg bg-black/50 tracking-tight backdrop-blur px-4 py-1 !text-bglime-400 font-spaceGrotesk">₹</div>
              </div><div class="p-5 lg:p-6">
                        <h2 class="text-white text-1xl md:text-1xl uppercase font-bold mb-2 font-spaceGrotesk md:truncate ">.<br></br></h2>
                        <h5 class="text-gray-300 font-medium text-lg mb-1 font-spaceGrotesk uppercase">. &nbsp;.</h5>
                        </div>
                        </div>
                        </div>
                        </a>
                        </div>  


         
<div style={{opacity: 1, transform: 'none'}}>
    <a class="" href="/workshop/A09MECW">
        <div class="home-card ml-2 mr-2 h-full pt-2 pb-5 lg:pl-5 lg:pr-5 lg:w-auto w-full duration-300 hover:scale-105 text-white " style={{width: 400,height:600}}>
            <div class="shadow-lg hover:bg-zinc-900  cursor-pointerbg-white hover:scale-none"><div class="bg-black relative">
                <img class="m-0 p-0 w-full" src="https://t4.ftcdn.net/jpg/03/17/47/97/360_F_317479799_fMZdfR27iBjpxOtW1g5af9eIrQdQ92Zf.jpg" alt="WORKSHOP ON BAJA BUGGY"/>
                <div class="absolute top-0 text-xs left-0 bg-blue-800 tracking-tight backdrop-blur-md px-4 py-1  font-spaceGrotesk">Comming Soon</div>
                <div class="absolute bottom-0 right-5 rounded-t-lg bg-black/50 tracking-tight backdrop-blur px-4 py-1 !text-bglime-400 font-spaceGrotesk">₹</div>
              </div><div class="p-5 lg:p-6">
                        <h2 class="text-white text-1xl md:text-1xl uppercase font-bold mb-2 font-spaceGrotesk md:truncate ">.<br></br></h2>
                        <h5 class="text-gray-300 font-medium text-lg mb-1 font-spaceGrotesk uppercase">. &nbsp;.</h5>
                        </div>
                        </div>
                        </div>
                        </a>
                        </div>  



         
<div style={{opacity: 1, transform: 'none'}}>
    <a class="" href="/workshop/A09MECW">
        <div class="home-card ml-2 mr-2 h-full pt-2 pb-5 lg:pl-5 lg:pr-5 lg:w-auto w-full duration-300 hover:scale-105 text-white " style={{width: 400,height:600}}>
            <div class="shadow-lg hover:bg-zinc-900  cursor-pointerbg-white hover:scale-none"><div class="bg-black relative">
                <img class="m-0 p-0 w-full" src="https://t4.ftcdn.net/jpg/03/17/47/97/360_F_317479799_fMZdfR27iBjpxOtW1g5af9eIrQdQ92Zf.jpg" alt="WORKSHOP ON BAJA BUGGY"/>
                <div class="absolute top-0 text-xs left-0 bg-blue-800 tracking-tight backdrop-blur-md px-4 py-1  font-spaceGrotesk">Comming Soon</div>
                <div class="absolute bottom-0 right-5 rounded-t-lg bg-black/50 tracking-tight backdrop-blur px-4 py-1 !text-bglime-400 font-spaceGrotesk">₹</div>
              </div><div class="p-5 lg:p-6">
                        <h2 class="text-white text-1xl md:text-1xl uppercase font-bold mb-2 font-spaceGrotesk md:truncate ">.<br></br></h2>
                        <h5 class="text-gray-300 font-medium text-lg mb-1 font-spaceGrotesk uppercase">. &nbsp;.</h5>
                        </div>
                        </div>
                        </div>
                        </a>
                        </div>  






    
<div style={{opacity: 1, transform: 'none'}}>
    <a class="" href="/workshop/A09MECW">
        <div class="home-card ml-2 mr-2 h-full pt-2 pb-5 lg:pl-5 lg:pr-5 lg:w-auto w-full duration-300 hover:scale-105 text-white " style={{width: 400,height:600}}>
            <div class="shadow-lg hover:bg-zinc-900  cursor-pointerbg-white hover:scale-none"><div class="bg-black relative">
                <img class="m-0 p-0 w-full" src="https://t4.ftcdn.net/jpg/03/17/47/97/360_F_317479799_fMZdfR27iBjpxOtW1g5af9eIrQdQ92Zf.jpg" alt="WORKSHOP ON BAJA BUGGY"/>
                <div class="absolute top-0 text-xs left-0 bg-blue-800 tracking-tight backdrop-blur-md px-4 py-1  font-spaceGrotesk">Comming Soon</div>
                <div class="absolute bottom-0 right-5 rounded-t-lg bg-black/50 tracking-tight backdrop-blur px-4 py-1 !text-bglime-400 font-spaceGrotesk">₹</div>
              </div><div class="p-5 lg:p-6">
                        <h2 class="text-white text-1xl md:text-1xl uppercase font-bold mb-2 font-spaceGrotesk md:truncate ">.r<br></br></h2>
                        <h5 class="text-gray-300 font-medium text-lg mb-1 font-spaceGrotesk uppercase">. &nbsp;.</h5>
                        </div>
                        </div>
                        </div>
                        </a>
                        </div>  




         
<div style={{opacity: 1, transform: 'none'}}>
    <a class="" href="/workshop/A09MECW">
        <div class="home-card ml-2 mr-2 h-full pt-2 pb-5 lg:pl-5 lg:pr-5 lg:w-auto w-full duration-300 hover:scale-105 text-white " style={{width: 400,height:600}}>
            <div class="shadow-lg hover:bg-zinc-900  cursor-pointerbg-white hover:scale-none"><div class="bg-black relative">
                <img class="m-0 p-0 w-full" src="https://t4.ftcdn.net/jpg/03/17/47/97/360_F_317479799_fMZdfR27iBjpxOtW1g5af9eIrQdQ92Zf.jpg" alt="WORKSHOP ON BAJA BUGGY"/>
                <div class="absolute top-0 text-xs left-0 bg-blue-800 tracking-tight backdrop-blur-md px-4 py-1  font-spaceGrotesk">Comming Soon</div>
                <div class="absolute bottom-0 right-5 rounded-t-lg bg-black/50 tracking-tight backdrop-blur px-4 py-1 !text-bglime-400 font-spaceGrotesk">₹</div>
              </div><div class="p-5 lg:p-6">
                        <h2 class="text-white text-1xl md:text-1xl uppercase font-bold mb-2 font-spaceGrotesk md:truncate ">.<br></br></h2>
                        <h5 class="text-gray-300 font-medium text-lg mb-1 font-spaceGrotesk uppercase">. &nbsp;.</h5>
                        </div>
                        </div>
                        </div>
                        </a>
                        </div>  


           
<div style={{opacity: 1, transform: 'none'}}>
    <a class="" href="/workshop/A09MECW">
        <div class="home-card ml-2 mr-2 h-full pt-2 pb-5 lg:pl-5 lg:pr-5 lg:w-auto w-full duration-300 hover:scale-105 text-white " style={{width: 400,height:600}}>
            <div class="shadow-lg hover:bg-zinc-900  cursor-pointerbg-white hover:scale-none"><div class="bg-black relative">
                <img class="m-0 p-0 w-full" src="https://t4.ftcdn.net/jpg/03/17/47/97/360_F_317479799_fMZdfR27iBjpxOtW1g5af9eIrQdQ92Zf.jpg" alt="WORKSHOP ON BAJA BUGGY"/>
                <div class="absolute top-0 text-xs left-0 bg-blue-800 tracking-tight backdrop-blur-md px-4 py-1  font-spaceGrotesk">Comming Soon</div>
                <div class="absolute bottom-0 right-5 rounded-t-lg bg-black/50 tracking-tight backdrop-blur px-4 py-1 !text-bglime-400 font-spaceGrotesk">₹</div>
              </div><div class="p-5 lg:p-6">
                        <h2 class="text-white text-1xl md:text-1xl uppercase font-bold mb-2 font-spaceGrotesk md:truncate ">.<br></br></h2>
                        <h5 class="text-gray-300 font-medium text-lg mb-1 font-spaceGrotesk uppercase">. &nbsp;.</h5>
                        </div>
                        </div>
                        </div>
                        </a>
                        </div>  



       


                 
                                                                                             

     </div>

     <div id='competitions' className='px-2 lg:px-40 sm:px-4 mb-[6rem]'>
        <h1 className='text-5xl font-bold  text-white'>Competitions</h1></div>
        
       
        <div className='class="bg-black grid grid-rows-2 items-stretch lg:grid-cols-3 home-cards-container ' style={
        {opacity: 1, transform: 'none' }}>

<div style={{opacity: 1, transform: 'none'}}>
    <a class="" href="/workshop/A09MECW">
        <div class="home-card ml-2 mr-2 h-full pt-2 pb-5  lg:pl-5 lg:pr-5 lg:w-auto w-full duration-300 hover:scale-105 text-white " style={{width: 400}}>
            <div class="shadow-lg hover:bg-zinc-900  cursor-pointerbg-white hover:scale-none"><div class="bg-black relative">
                <img class="m-0 p-0 w-full" src="https://t4.ftcdn.net/jpg/03/17/47/97/360_F_317479799_fMZdfR27iBjpxOtW1g5af9eIrQdQ92Zf.jpg" alt="WORKSHOP ON BAJA BUGGY"/>
                <div class="absolute top-0 text-xs left-0 bg-blue-800 tracking-tight backdrop-blur-md px-4 py-1  font-spaceGrotesk">Comming Soon</div>
                <div class="absolute bottom-0 right-5 rounded-t-lg bg-black/50 tracking-tight backdrop-blur px-4 py-1 !text-bglime-400 font-spaceGrotesk">₹</div>
              </div><div class="p-5 lg:p-6">
                        <h2 class="text-white text-1xl md:text-1xl uppercase font-bold mb-2 font-spaceGrotesk md:truncate ">.<br></br></h2>
                        <h5 class="text-gray-300 font-medium text-lg mb-1 font-spaceGrotesk uppercase">. &nbsp;.</h5>
                        </div>
                        </div>
                        </div>
                        </a>
                        </div>  


         
<div style={{opacity: 1, transform: 'none'}}>
    <a class="" href="/workshop/A09MECW">
        <div class="home-card ml-2 mr-2 h-full pt-2 pb-5 lg:pl-5 lg:pr-5 lg:w-auto w-full duration-300 hover:scale-105 text-white " style={{width: 400,height:600}}>
            <div class="shadow-lg hover:bg-zinc-900  cursor-pointerbg-white hover:scale-none"><div class="bg-black relative">
                <img class="m-0 p-0 w-full" src="https://t4.ftcdn.net/jpg/03/17/47/97/360_F_317479799_fMZdfR27iBjpxOtW1g5af9eIrQdQ92Zf.jpg" alt="WORKSHOP ON BAJA BUGGY"/>
                <div class="absolute top-0 text-xs left-0 bg-blue-800 tracking-tight backdrop-blur-md px-4 py-1  font-spaceGrotesk">Comming Soon</div>
                <div class="absolute bottom-0 right-5 rounded-t-lg bg-black/50 tracking-tight backdrop-blur px-4 py-1 !text-bglime-400 font-spaceGrotesk">₹</div>
              </div><div class="p-5 lg:p-6">
                        <h2 class="text-white text-1xl md:text-1xl uppercase font-bold mb-2 font-spaceGrotesk md:truncate ">.<br></br></h2>
                        <h5 class="text-gray-300 font-medium text-lg mb-1 font-spaceGrotesk uppercase">. &nbsp;.</h5>
                        </div>
                        </div>
                        </div>
                        </a>
                        </div>  



         
<div style={{opacity: 1, transform: 'none'}}>
    <a class="" href="/workshop/A09MECW">
        <div class="home-card ml-2 mr-2 h-full pt-2 pb-5 lg:pl-5 lg:pr-5 lg:w-auto w-full duration-300 hover:scale-105 text-white " style={{width: 400,height:600}}>
            <div class="shadow-lg hover:bg-zinc-900  cursor-pointerbg-white hover:scale-none"><div class="bg-black relative">
                <img class="m-0 p-0 w-full" src="https://t4.ftcdn.net/jpg/03/17/47/97/360_F_317479799_fMZdfR27iBjpxOtW1g5af9eIrQdQ92Zf.jpg" alt="WORKSHOP ON BAJA BUGGY"/>
                <div class="absolute top-0 text-xs left-0 bg-blue-800 tracking-tight backdrop-blur-md px-4 py-1  font-spaceGrotesk">Comming Soon</div>
                <div class="absolute bottom-0 right-5 rounded-t-lg bg-black/50 tracking-tight backdrop-blur px-4 py-1 !text-bglime-400 font-spaceGrotesk">₹</div>
              </div><div class="p-5 lg:p-6">
                        <h2 class="text-white text-1xl md:text-1xl uppercase font-bold mb-2 font-spaceGrotesk md:truncate ">.<br></br></h2>
                        <h5 class="text-gray-300 font-medium text-lg mb-1 font-spaceGrotesk uppercase">.&nbsp;.</h5>
                        </div>
                        </div>
                        </div>
                        </a>
                        </div>  






    
<div style={{opacity: 1, transform: 'none'}}>
    <a class="" href="/workshop/A09MECW">
        <div class="home-card ml-2 mr-2 h-full pt-2 pb-5 lg:pl-5 lg:pr-5 lg:w-auto w-full duration-300 hover:scale-105 text-white " style={{width: 400,height:600}}>
            <div class="shadow-lg hover:bg-zinc-900  cursor-pointerbg-white hover:scale-none"><div class="bg-black relative">
                <img class="m-0 p-0 w-full" src="https://t4.ftcdn.net/jpg/03/17/47/97/360_F_317479799_fMZdfR27iBjpxOtW1g5af9eIrQdQ92Zf.jpg" alt="WORKSHOP ON BAJA BUGGY"/>
                <div class="absolute top-0 text-xs left-0 bg-blue-800 tracking-tight backdrop-blur-md px-4 py-1  font-spaceGrotesk">Comming Soon</div>
                <div class="absolute bottom-0 right-5 rounded-t-lg bg-black/50 tracking-tight backdrop-blur px-4 py-1 !text-bglime-400 font-spaceGrotesk">₹</div>
              </div><div class="p-5 lg:p-6">
                        <h2 class="text-white text-1xl md:text-1xl uppercase font-bold mb-2 font-spaceGrotesk md:truncate ">.<br></br></h2>
                        <h5 class="text-gray-300 font-medium text-lg mb-1 font-spaceGrotesk uppercase">. &nbsp;.</h5>
                        </div>
                        </div>
                        </div>
                        </a>
                        </div>  




         
<div style={{opacity: 1, transform: 'none'}}>
    <a class="" href="/workshop/A09MECW">
        <div class="home-card ml-2 mr-2 h-full pt-2 pb-5 lg:pl-5 lg:pr-5 lg:w-auto w-full duration-300 hover:scale-105 text-white " style={{width: 400,height:600}}>
            <div class="shadow-lg hover:bg-zinc-900  cursor-pointerbg-white hover:scale-none"><div class="bg-black relative">
                <img class="m-0 p-0 w-full" src="https://t4.ftcdn.net/jpg/03/17/47/97/360_F_317479799_fMZdfR27iBjpxOtW1g5af9eIrQdQ92Zf.jpg" alt="WORKSHOP ON BAJA BUGGY"/>
                <div class="absolute top-0 text-xs left-0 bg-blue-800 tracking-tight backdrop-blur-md px-4 py-1  font-spaceGrotesk">Comming Soon</div>
                <div class="absolute bottom-0 right-5 rounded-t-lg bg-black/50 tracking-tight backdrop-blur px-4 py-1 !text-bglime-400 font-spaceGrotesk">₹</div>
              </div><div class="p-5 lg:p-6">
                        <h2 class="text-white text-1xl md:text-1xl uppercase font-bold mb-2 font-spaceGrotesk md:truncate "><br></br></h2>
                        <h5 class="text-gray-300 font-medium text-lg mb-1 font-spaceGrotesk uppercase">. &nbsp;.</h5>
                        </div>
                        </div>
                        </div>
                        </a>
                        </div>  


           
<div style={{opacity: 1, transform: 'none'}}>
    <a class="" href="/workshop/A09MECW">
        <div class="home-card ml-2 mr-2 h-full pt-2 pb-5 lg:pl-5 lg:pr-5 lg:w-auto w-full duration-300 hover:scale-105 text-white " style={{width: 400,height:600}}>
            <div class="shadow-lg hover:bg-zinc-900  cursor-pointerbg-white hover:scale-none"><div class="bg-black relative">
                <img class="m-0 p-0 w-full" src="https://t4.ftcdn.net/jpg/03/17/47/97/360_F_317479799_fMZdfR27iBjpxOtW1g5af9eIrQdQ92Zf.jpg" alt="WORKSHOP ON BAJA BUGGY"/>
                <div class="absolute top-0 text-xs left-0 bg-blue-800 tracking-tight backdrop-blur-md px-4 py-1  font-spaceGrotesk">Comming Soon</div>
                <div class="absolute bottom-0 right-5 rounded-t-lg bg-black/50 tracking-tight backdrop-blur px-4 py-1 !text-bglime-400 font-spaceGrotesk">₹</div>
              </div><div class="p-5 lg:p-6">
                        <h2 class="text-white text-1xl md:text-1xl uppercase font-bold mb-2 font-spaceGrotesk md:truncate ">.<br></br></h2>
                        <h5 class="text-gray-300 font-medium text-lg mb-1 font-spaceGrotesk uppercase">. &nbsp;.</h5>
                        </div>
                        </div>
                        </div>
                        </a>
                        </div>  



       


                 
                                                                                             

     </div>
 
 
    <div >
        <footer id='contact' class=" font-spaceGrotesk bg-fixed bg-cover bg-center footer-img"><div class="mx-auto p-5 pt-10">
        <div class="grid grid-cols-1 lg:grid-cols-6"><div class="lg:col-span-2 w-full p-8">
        <p class="text-white right-0">Ilahia College Of Engineering And Technology<br></br>Mulavoor, Kerala,India.</p><div class="mt-3 w-full">
        <a class=" text-white hover:text-violet-600 font-bold" rel="noreferrer" target="_blank" href="https://goo.gl/maps/EH4b7ukCk3Rcnb6M9">Location<i class="fas fa-arrow-up-right"></i> </a></div></div>

         <div class="lg:col-span-3 p-10 md:pb-5">
            <h4 class="text-xl font-bold text-white">Contact</h4>
            <div class="contact-f-half  sm:w-full md:w-1/2"><h1 class="text-2xl font-bold text-white"> Student Co-ordinators</h1><a href="tel:+917306266971"><div><div class="contact-container mt-3 transition-all duration-300 flex   bg-zinc-800 px-5 py-5 rounded-md hover:bg-white hover:text-black"><div class="contact-icon px-6 py-5 border-white/20 border-solid border-2 rounded-xl mr-3 " style={{borderRadius: 500}}>
           
           
            <AiFillPhone size={18} style={{color: `${textColor}`}} />
           

             </div><div class="contact"><p></p><p class=" text-md font-semibold font-spaceGrotesk">Manaf</p><div class="  pr-2  flex  flex-row"><p class="text-sm font-spaceGrotesk">000000000 &nbsp;</p></div></div></div></div></a><a href="tel:+918086348962"><div><div class="contact-container mt-3 transition-all duration-300 flex   bg-zinc-800 px-5 py-5 rounded-md hover:bg-white hover:text-black"><div class="contact-icon px-6 py-5 border-white/20 border-solid border-2 rounded-xl mr-3 " style={{borderRadius: 500}}>
                
             <AiFillPhone size={18} style={{color: `${textColor}`}} /></div><div class="contact"><p></p><p class=" text-md font-semibold font-spaceGrotesk">Ashly</p><div class="  pr-2  flex  flex-row"><p class="text-sm font-spaceGrotesk">8086348962 &nbsp;</p></div></div></div></div></a></div>
            <h4 class="mt-5 mb-5 text-xl font-bold text-white">Social Media</h4><ul class="text-lg text-gray-300"><li>
            <a href='https://www.instagram.com/obsqura.23/'>
            <AiFillInstagram size={35} style={{color: `${textColor}`}} />
            </a>

            

            </li>
            <li></li>
            </ul>
            </div>          
                   
                   
                   </div></div>
                    <div class="w-full h-0.5 bg-gray-300/20 container mx-auto"></div><div class="flex justify-center gap-5 py-10"><a href="https://instagram.com/asthra_sjcet" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram text-3xl text-white transition-all duration-300 hover:text-teal-500"></i></a><a href="https://www.facebook.com/asthra.sjcet/" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook text-3xl text-white transition-all duration-300 hover:text-teal-500"></i></a>
                    <a href="https://www.youtube.com/watch?v=Un7VDHwZIrI" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-youtube text-3xl text-white transition-all duration-300 hover:text-teal-500"></i></a></div><div class="bg-black"><p class="py-5 text-center text-white"> Made with <i class="fa fa-heart text-red-500" aria-hidden="true"></i>  by <a href="/team" class="font-bold text-white hover:text-blue-600">Team ILAHIA</a></p>
                        </div>
                        </footer>
    </div>



 
    </main>
    
        

  )
}



