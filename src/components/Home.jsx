import React,{useState} from 'react'
import HeroImage from '../assets/HeroImage.jpg'
import {MdArrowRightAlt} from 'react-icons/md'
import Portfolio from './Portfolio'
import { Link } from 'react-router-dom'
const Home = () => {
  const[state,setState] = useState(false);
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
     <div className='flex flex-col justify-center h-full'>
      <h2 className='text-4xl sm:text-5xl font-bold text-white'>Welcome To My Portfolio Website!</h2>
      <p className='text-gray-400 py-4 max-md: text-xl'>
      Hello ! I'm Eshan,a passionate and dedicated full stack developer.Feel free to explore my work, delve into my technical prowess, and get a glimpse of the impact I've made so far. If you're looking to collaborate, innovate, or simply share ideas, I'm just a click away. Let's embark on a digital adventure together and turn your visions into reality.
      </p>
      <div>
        <button className='group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
          Portfolio &nbsp;
          <span className='group-hover:rotate-90 duration-300'><MdArrowRightAlt size={25}/></span> 
        </button>
      </div>
     </div>
     <div>
      <img src={HeroImage} alt='Profile' className='rounded-2xl w-2/3 md:w-full px-2 py-2'/>
     </div>
      </div>
    </div>
  )
}

export default Home;