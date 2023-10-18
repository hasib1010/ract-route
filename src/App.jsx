import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>

    <h1>sagsgas</h1>
    </>
  )
}

export default App
