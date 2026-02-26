
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Otp from './components/Otp'
import LandingPage from './components/landingPage'



function App() {
  

  return (
    <>
    
      <Routes>
        <Route path='/' element={<LandingPage ></LandingPage>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/otp' element={<Otp></Otp>}></Route>
      </Routes>
    </>
  )
}

export default App
