import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './Home.jsx'
import Work from './Work.jsx'
import Resume from './Resume.jsx'
import PrimerDocumentation from './assets/Work/Primer_documentation.jsx'
import SelectPanel from './assets/Work/Select_panel.jsx'

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
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work/primer-documentation" element={<PrimerDocumentation />} />
        <Route path="/work/select-panel" element={<SelectPanel />} />
      </Routes>
    </Router>
  )
}

export default App
