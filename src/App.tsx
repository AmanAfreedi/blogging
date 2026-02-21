
import { Route, Routes } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/SignUp'
import Otp from './components/Otp'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Login ></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/otp' element={<Otp></Otp>}></Route>
      </Routes>
    </>
  )
}

export default App
