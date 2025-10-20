import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './view/Home'
import Loding from './components/Loding'
import Shop from './view/Shop'
import Login from './view/Login'
import Signup from './view/Signup'
import Dashboard from './view/Dashbord'


const App = () => {

    const [loding,setloding] = useState(true);

  const loading =async ()=>{
    setloding(false)
  }

  useEffect(() => {
     setTimeout(() => {
      loading()
    }, 4000); 
  }, []);
  return (
    <BrowserRouter>
      {loding ? (
        <Loding />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/dashbord' element={<Dashboard/>} />
          

        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App