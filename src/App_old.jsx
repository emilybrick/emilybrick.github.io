import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="w-screen flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6">Hi there!</h1>
        <p className="text-lg leading-relaxed mb-8 text-gray-700">
          I’m Emily!!, a design systems and software designer based out of Philadelphia. I love systems small and large, making the internet better for everyone, and restoring old houses. I spent the last seven years at{' '}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>{' '}
          working on systems and recently joined{' '}
          <a
            href="https://lattice.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Lattice HR
          </a>.
        </p>
      </div>
        <nav className="flex space-x-8 text-xl">
          <a
            href="mailto:youremail@example.com"
            className="text-gray-600 hover:text-blue-600 transition"
            aria-label="Email"
          >
            Email
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </nav>
    </main>
  )
}

export default App
