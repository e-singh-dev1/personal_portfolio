import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
const SocialLinks = () => {
  return (
    <div className='hidden lg:flex fle-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] 
             hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
             <a href='https://www.linkedin.com/in/eshan-singh-39a138176/' className='flex justify-between items-center w-full text-white'>
              <>
              Linkedin <FaLinkedin size={30}/>
              </>
             </a>
            </li>

            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] 
             hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-tr-md'>
             <a href='https://github.com/e-singh-dev1' className='flex justify-between items-center w-full text-white'>
              <>
              GitHub <FaGithub size={30}/>
              </>
             </a>
            </li>

            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] 
             hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
             <a href='mailto:foo@gmail.com' className='flex justify-between items-center w-full text-white'>
              <>
              Mail <HiOutlineMail size={30}/>
              </>
             </a>
            </li>

            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] 
             hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-br-md'>
             <a href='/Eshan_Singh_Resume.pdf' className='flex justify-between items-center w-full text-white' download={true}>
              <>
              Resume <BsFillPersonLinesFill size={30}/>
              </>
             </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks