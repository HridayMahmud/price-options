import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Daisynav from './Components/DaisyNavbar/Daisynav'
import Navbar from './Components/DaisyNavbar/Navbar/Navbar'
import PriceOptions from './Components/DaisyNavbar/PriceOptions/PriceOptions'

import Linechart from './Components/DaisyNavbar/LineChart/LineChart'
import Navber2 from './Components/DaisyNavbar/Navbar2/Navber2'
import Linechart2 from './Components/DaisyNavbar/LineChart/Linechart2'
import Phones from './Components/DaisyNavbar/Phones/Phones'

function App() {


  return (
    <>
    <div>
    <div className='w-[1240px] mx-auto'>
     
    <Navbar></Navbar>
    {/* <Navber2></Navber2> */}
    {/* <Daisynav></Daisynav> */}

    <PriceOptions></PriceOptions>
    <Linechart></Linechart>
    
    {/* <Linechart2></Linechart2> */}
    <Phones></Phones>
    </div>
   
</div>
    </>
  )
}

export default App
