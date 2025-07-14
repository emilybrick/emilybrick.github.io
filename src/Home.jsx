import { Link } from 'react-router-dom'
import { useState } from 'react'

function Home() {
  const [copied, setCopied] = useState(false)
  
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('brick.emily@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }
  return (
    <>
      {/* Fixed navigation links in top left */}
      <nav className="bg-white fixed p-6 z-10 flex space-x-4 w-full">
        <Link 
          to="/" 
          className="text-gray-600 hover:text-blue-600 transition-colors text-md font-medium"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="text-gray-600 hover:text-blue-600 transition-colors text-md font-medium"
        >
          About
        </Link>
        <Link 
          to="/resume" 
          className="text-gray-600 hover:text-blue-600 transition-colors text-md font-medium"
        >
          Resume
        </Link>
      </nav>
      
      <main className="w-screen flex flex-col items-center justify-center min-h-screen px-6 bg-white">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-6xl font-semibold mb-6 font-serif text-gray-800">Hello!</h1>
          <p className="text-lg leading-relaxed mb-8 text-gray-700">
            I'm Emily, a design systems and software designer based out of Philadelphia. I love systems small and large and work on the internet for a living.
          </p>
        </div>
        <nav className="flex space-x-6 text-md">
          <div className="flex items-center space-x-2">
            <a
              href="mailto:brick.emily@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition"
              aria-label="Email"
            >
              Email
            </a>
            <button
              onClick={copyEmail}
              className="text-gray-600 hover:text-blue-600 transition"
              style={{ background: 'none', padding: 2, border: 'none', outline: 'none' }}
              aria-label="Copy email to clipboard"
              title={copied ? "Copied!" : "Copy email"}
            >
              {copied ? (
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              ) : (
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              )}
            </button>
          </div>
          <a
            href="https://github.com/emilybrick"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://instagram.com/emilyhiller_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/in/emilybrick"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </nav>
      </main>
    </>
  )
}

export default Home
