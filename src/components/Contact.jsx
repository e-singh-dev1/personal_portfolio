import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
     <div className='flex flex-col p-0 justify-center align-bottom max-w-screen-lg mx-auto h-full'>
      <div className='mt-25 pt-4 md:mt-20 md:pt-6'>
      <p className="text-4xl font-bold inline border-b-2 border-gray-500 mt-20">
            Contact
          </p>
          <p className="py-4">Kindly seize the opportunity by filling out the form below to engage in meaningful communication with me. Your input is highly valued.</p>
          <div className=" flex justify-center items-center align-baseline">
          <form
            action="https://getform.io/f/6b53a6dd-21ea-4a1d-a0bd-bf8cac291b42"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white font-bold bg-gradient-to-b from-cyan-500 to-blue-500 px-4 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Contact