import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Bonjour, Welcome to Verba!</h1>
        <p>A completely free application to help you learn French</p>
        <p>Not just words, but grammer, slang, sentence structure, and how to really speak like a Native!</p>
      </div>
    </>
  )
}

export default App
