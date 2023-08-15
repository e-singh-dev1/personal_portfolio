import React from 'react'
import IMDB from '../assets/portfolio/imdb.png'
const Portfolio = () => {
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white sm:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here :</p>
            </div>  
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-4'>
         <div className='shadow-md shadow-gray-600 rounded-e-lg'>
            <img className='rounded-md duration-200 hover:scale-105' src={IMDB} alt="SQl" />
        <div className='flex items-center justify-center'>
             <a href='https://imdb-clone-112338.netlify.app/' alt ='Demo'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
            </a>
            <a href="https://github.com/e-singh-dev1/IMDB_Clone" alt='Code'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </a>
         </div>
         </div>
        </div>
        </div>
    </div>
  )
}

export default Portfolio