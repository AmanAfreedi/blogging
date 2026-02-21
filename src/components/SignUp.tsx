
import { Link, useNavigate } from 'react-router-dom'
import bg from '../assets/bg.jpg'
import { useState } from 'react';
import { signUp } from './Aps';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = signUp(name, email, password);
      console.log(response);
    } catch (error) {
      
    }
    navigate('/otp');
  }
  return (
    <div style={{backgroundImage : `url(${bg})` }} className='w-screen bg-cover h-screen flex justify-center items-center block bg-[#2C3E50] bg-gradient-to-b to-[#2C3E50] from-[#f9f9f9]'>
      <div className=' h-[60%] w-92 rounded-4xl flex shadow-lg shadow-[#2C3E50] transition-shadow duration-300 ease-in-out'>
          
          <form onSubmit={handleSubmit} className='rounded-4xl w-full bg-transparent backdrop-blur-lg  h-full  flex flex-col justify-center items-center'>
            <div className=' flex flex-col justify-center items-center w-full '>
            <p className='self-center justify-self-center text-4xl mb-5 text-white'>Sign Up</p>
            <input onChange={(e)=>{setName(e.target.value)}} type='Name' placeholder='Name' className='w-[80%] h-10 text-white rounded-lg border border-gray-300 mt-5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-transparent' />
            <input onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Email' className='w-[80%] h-10 text-white rounded-lg border border-gray-300 mt-5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-transparent' />
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' className='w-[80%] text-white h-10  rounded-lg border border-gray-300 mt-5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-transparent' />
           
            </div>
            <button className='w-[80%] h-10 bg-yellow-500 rounded-lg mt-5 text-white  hover:bg-yellow-600 transition-colors duration-300'>Submit</button>
                <Link to='/' className='w-[80%] h-10  rounded-lg mt-5 text-center text-black hover:underline  items-center justify-center text-white'>Already have an account? Sign In</Link>
          </form>
          
      </div>
    </div>
  )
}

export default SignUp
