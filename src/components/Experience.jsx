import React from 'react'
import Azure from '../assets/azure.png'
import Csharp from '../assets/Csharp_Logo.png'
import SQL from '../assets/SQl.png'
import Docker from '../assets/docker-image-768x512.jpg'
import Java from '../assets/java.png'
import MongoDB from '../assets/mongodb.jpg'
import Tailwind from '../assets/tailwind.png'
import ReactImg from '../assets/react.png'
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Azure,
      title: "Azure",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Csharp,
      title: "C#",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: SQL,
      title: "SQL",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImg,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Java,
      title: "Java",
      style: "shadow-white",
    },
    {
      id: 7,
      src: Docker,
      title: "Docker",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div name='experience' className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>  
      <div className="max-w-screen-lg mx-auto py-30 flex flex-col justify-center w-full h-screen text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-1 inline">
               Experience
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-2 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience