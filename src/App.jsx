import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './view/Home'
import Loding from './components/Loding'

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
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App