import { Link } from 'react-router-dom'
import bg from '../assets/bg.jpg'

const Otp = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='w-screen bg-cover h-screen flex justify-center items-center bg-[#2C3E50] bg-gradient-to-b to-[#2C3E50] from-[#f9f9f9]'>
      <div className='h-[60%] w-92 rounded-4xl flex shadow-lg shadow-[#2C3E50] transition-shadow duration-300 ease-in-out'>
        <form action="" className='rounded-4xl w-full bg-transparent backdrop-blur-lg h-full flex flex-col justify-center items-center'>

          <p className='text-4xl mb-2 text-white'>Verify OTP</p>
          <p className='text-gray-300 text-sm mb-7 text-center w-[75%]'>Enter the 6-digit code sent to your email address</p>

          <div className='flex gap-3 mb-5'>
            <input type='text' maxLength={5} className='w-50 h-12 text-center text-white text-xl font-semibold rounded-lg border border-gray-300 bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent' />
            
           
          </div>

          <p className='text-gray-400 text-xs mb-5'>
            Didn't receive a code? <span className='text-yellow-400 hover:text-yellow-300 underline underline-offset-2 cursor-pointer'>Resend</span>
          </p>

          <button className='w-[80%] h-10 bg-yellow-500 rounded-lg text-white hover:bg-yellow-600 transition-colors duration-300'>Verify</button>
          <Link to='/signup' className='w-[80%] h-10 rounded-lg mt-5 text-center text-white hover:underline flex items-center justify-center'>← Back to Sign Up</Link>

        </form>
      </div>
    </div>
  )
}

export default Otp