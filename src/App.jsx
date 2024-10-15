import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Daisynav from './Components/DaisyNavbar/Daisynav'
import Navbar from './Components/DaisyNavbar/Navbar/Navbar'
import PriceOptions from './Components/DaisyNavbar/PriceOptions/PriceOptions'

import Linechart from './Components/DaisyNavbar/LineChart/LineChart'

function App() {


  return (
    <>
    <div>
    <div className='w-[1240px] mx-auto'>
     
    <Navbar></Navbar>
    {/* <Daisynav></Daisynav> */}

    <PriceOptions></PriceOptions>
    <Linechart></Linechart>
    </div>
   
</div>
    </>
  )
}

export default App
