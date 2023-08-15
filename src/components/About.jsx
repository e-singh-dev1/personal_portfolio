import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-15'>
            Hey there! I'm Eshan, a full stack developer with two years of hands-on experience. My world revolves around turning innovative ideas into impeccable digital solutions. From captivating front-end designs to robust back-end architecture, I thrive on the perfect balance between aesthetics and functionality. I've honed my skills in a variety of technologies, ensuring smooth user experiences and efficient system performance.
            </p>
            <br/>
            <p className='text-xl'>
            Collaboration is in my DNA. I love working in dynamic teams, where diverse perspectives lead to groundbreaking outcomes. My commitment to clean code and continuous learning keeps me at the forefront of web development trends. When I'm not coding, I'm exploring new tech horizons, contributing to the tech community, or seeking inspiration from the world around me. Join me in pushing the boundaries of technology and creating an impactful and exciting digital future
            </p>
        </div>
    </div>
  )
}

export default About