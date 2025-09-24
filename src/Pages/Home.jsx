import { useState, useEffect } from 'react'

function Home() {
    // Create a piece of state called "word"
    // "word" holds the current value on the homepage and will display ("Welcome" or "Bienvenue")
    // "setWord" is the function we will use to change the "word"
    const [word, setWord] = useState("Welcome")

    useEffect (() => {
        const interval = setInterval(() => {
          setWord(prev => prev === "Welcome" ? "Bienvenue" : "Welcome")
        }, 1000)
    
        return () => clearInterval(interval)
      }, [])
      
      return  (
      <div>
        <h1>Bonjour, <span id='welcome-swap'>{word}</span> to Verba!</h1>
        <p>A completely free application to help you learn French</p>
        <p>Not just words, but grammar, slang, sentence structure, and how to really speak like a Native!</p>
      </div>
      )
}

export default Home