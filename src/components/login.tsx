import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/bg.jpg'
const login = () => {
  return (
    <div style={{backgroundImage : `url(${bg})` }}  className='w-screen h-screen bg-cover flex justify-center items-center block bg-blue-100 '>
      <div className=' h-[70%] w-[70%] rounded-4xl   flex shadow-md  shadow-black transition-shadow duration-300 ease-in-out'>
          <div className='rounded-l-4xl  flex  h-full w-[60%]'>
            
          </div>
          <form action="" className='rounded-r-4xl backdrop-blur-sm h-full w-[40%] flex flex-col justify-center items-center'>
            <div className=' flex flex-col justify-center items-center w-full '>
            <p className='self-center text-white justify-self-center text-4xl'>Sign In</p>
            <input type='email' placeholder='Email' className='w-[80%] h-10  rounded-lg border border-gray-300 mt-5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-transparent' />
            <input type="password" placeholder='Password' className='w-[80%] h-10  rounded-lg border border-gray-300 mt-5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-transparent' />
            </div>
            <button className='w-[80%] h-10 bg-yellow-500 rounded-lg mt-5 text-white  hover:bg-yellow-600 transition-colors duration-300'>Submit</button>
            <Link to='/signup' className='w-[80%] text-white h-10 hover:underline  rounded-lg mt-5 text-center text-black flex items-center justify-center'>Don't have an account? Sign Up</Link>
          </form>
          
      </div>
    </div>
  )
}

export default login
