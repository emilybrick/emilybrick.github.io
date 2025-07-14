import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      {/* Fixed navigation links in top left */}
      <nav className="bg-white fixed p-6 z-10 flex space-x-4 w-full">
        <Link 
          to="/" 
          className="text-gray-600 hover:text-blue-600 transition-colors text-lg font-medium"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="text-gray-600 hover:text-blue-600 transition-colors text-lg font-medium"
        >
          About
        </Link>
        <Link 
          to="/resume" 
          className="text-gray-600 hover:text-blue-600 transition-colors text-lg font-medium"
        >
          Resume
        </Link>
      </nav>
      
      <main className="w-screen flex flex-col items-center justify-center min-h-screen px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8 font-serif text-gray-800">About</h1>
          
          <div className="text-left space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              I've been working on design systems for the past 10 years as a means to achieve quality at scale. I have a particular love for developer tools, but believe design systems are the foundation for any strong user experience.
            </p>
            
            <p>
              I spent the past 7 years at{' '}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>, where I helped build and evolve a design system that serves millions of 
              developers worldwide. I focused on creating consistent patterns and bridging the gap between design and engineering, and (most recently) building out GitHub's {' '}
              <a 
                href="https://primer.style" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                design system documentation
              </a>. 
            </p>
            <p> I recently joined <a href="https://lattice.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Lattice HR</a>, working on their Core UI team. In a past life, I helped build the <a href="https://github.com/buzzfeed/solid">design system for BuzzFeed</a>.</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
