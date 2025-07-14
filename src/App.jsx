import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './Home.jsx'
import About from './About.jsx'
import Resume from './Resume.jsx'
import './App.css'

function RedirectHandler() {
  const navigate = useNavigate()
  
  useEffect(() => {
    // Check if we have a redirect parameter from the 404.html
    const urlParams = new URLSearchParams(window.location.search)
    const redirectPath = urlParams.get('redirect')
    
    if (redirectPath) {
      // Remove the redirect parameter and navigate to the original path
      window.history.replaceState({}, '', '/')
      navigate(redirectPath)
    }
  }, [navigate])
  
  return null
}

function App() {
  return (
    <Router>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  )
}

export default App
