import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Work from './Work.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  )
}

export default App
