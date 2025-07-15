import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      {/* Fixed navigation links in top left */}
      <nav className="fixed p-6 z-10 flex space-x-4 w-full">
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
      
      <main className="w-screen flex flex-col items-center justify-center min-h-screen px-6 mt-24 md:mt-0">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-semibold mb-8 font-serif text-gray-800"><span className="text-5xl">About</span></h1>

          <div className="text-left space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              I’ve spent the past 10 years working on design systems as a means to deliver quality at scale. I’m particularly interested in developer tools, but I believe design systems are essential to any strong user experience.
            </p>
            
            <p>
              For the past 7 years, I was at {' '}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>, where I helped build and evolve a design system used by millions of developers. My work focused on creating consistent patterns, bridging design and engineering, and most recently, leading the documentation experience for GitHub’s                {' '}
              <a 
                href="https://primer.style" 
                target="_blank" 
                rel="noopener noreferrer"
                className="!underline"
              >
                design system
              </a>.
            </p>
            <p> I recently joined <a href="https://lattice.com" target="_blank" rel="noopener noreferrer" className="!underline">Lattice HR</a> to work on their Core UI team. In a past life, I helped build the <a href="https://github.com/buzzfeed/solid"  target="_blank" rel="noopener noreferrer" className="!underline">design system for BuzzFeed</a>.</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
