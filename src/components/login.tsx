
import { Link, Navigate, useNavigate } from 'react-router-dom'
import bg from '../assets/bg.jpg'

const login = () => {
  
  return (
    <div style={{backgroundImage : `url(${bg})` }}  className='w-screen h-screen bg-cover flex justify-center items-center block bg-blue-100 '>
      <div className=' h-[60%] w-92 rounded-4xl   flex shadow-lg shadow-[#2C3E50] transition-shadow duration-300 ease-in-out'>
          
          <form action="" className='rounded-4xl backdrop-blur-lg h-full w-[100%] flex flex-col justify-center items-center'>
            <div className=' flex flex-col justify-center items-center w-full '>
            <p className='self-center text-white justify-self-center text-4xl mb-5'>Sign In</p>
            <input type='email' placeholder='Email' className='w-[80%] h-10  text-white rounded-lg border border-gray-300 mt-5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-transparent' />
            <input type="password" placeholder='Password' className='w-[80%] h-10 text-white rounded-lg border border-gray-300 mt-5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-transparent' />
            </div>
            <button  className='w-[80%] h-10 bg-yellow-500 rounded-lg mt-5 text-white  hover:bg-yellow-600 transition-colors duration-300'>Submit</button>
            <Link to='/signup' className='w-[80%] text-white h-10 hover:underline  rounded-lg mt-5 text-center text-black flex items-center justify-center'>Don't have an account? Sign Up</Link>
          </form>
          
      </div>
    </div>
  )
}

export default login
