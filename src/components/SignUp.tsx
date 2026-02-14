
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center block bg-[#2C3E50] bg-gradient-to-b to-[#2C3E50] from-[#f9f9f9]'>
      <div className=' h-[70%] w-[70%] rounded-4xl border flex border-gray-300 bg-white hover:shadow-lg shadow-[#2C3E50] transition-shadow duration-500 ease-in-out'>
          <div className='rounded-l-4xl bg-yellow-300 flex  h-full w-[60%]'>
          </div>
          <form action="" className='rounded-r-4xl  h-full w-[40%] flex flex-col justify-center items-center'>
            <div className=' flex flex-col justify-center items-center w-full '>
            <p className='self-center justify-self-center text-4xl'>Sign Up</p>
            <input type='Name' placeholder='Name' className='w-[80%] h-10  rounded-lg border border-gray-300 mt-5 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent' />
            <input type='email' placeholder='Email' className='w-[80%] h-10  rounded-lg border border-gray-300 mt-5 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent' />
            <input type="password" placeholder='Password' className='w-[80%] h-10  rounded-lg border border-gray-300 mt-5 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent' />
            </div>
            <button className='w-[80%] h-10 bg-yellow-500 rounded-lg mt-5 text-white  hover:bg-yellow-600 transition-colors duration-300'>Submit</button>
                <Link to='/' className='w-[80%] h-10  rounded-lg mt-5 text-center text-black hover:underline  items-center justify-center'>Already have an account? Sign In</Link>
          </form>
          
      </div>
    </div>
  )
}

export default SignUp
