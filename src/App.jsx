import './App.css'
import {Link, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import { NavLink } from 'react-router-dom'


function App() {
  return (
    <>
      <header>
        <div className="logo">VERBA</div>

        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/lessons">Lessons Hub</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink> 
        </nav>
      </header>
      
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<About />} />
        <Route path="/lessons" element={<div>Lessons Hub — coming soon</div>} />
        <Route path="/contact" element={<div>Contact — coming soon</div>} />
      </Routes>
      </main>
    </>
  )
}

export default App
