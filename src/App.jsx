import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar/Navbar'
import GymPricing from './Component/GymPricing/GymPricing'
import { LineChart } from 'recharts'
import LineC from './Component/LineChart/LineC'
import Phones from './Component/Phones/Phones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <GymPricing></GymPricing>
    <LineC></LineC>
    <Phones></Phones>
    </>
  )
}

export default App
