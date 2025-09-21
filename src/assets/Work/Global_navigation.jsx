import { Link } from 'react-router-dom'
import { useState } from 'react'

function GlobalNavigation() {
  const [count, setCount] = useState(0);

  return (

    <div>
      {/* Fixed navigation links in top left */}
      <nav className="fixed p-6 z-10 flex space-x-4 w-full bg-color top-0">
      <Link 
        to="/" 
        className="font-semibold"
      >
        Home
      </Link>
      <Link 
        to="/work" 
        className="font-semibold"
      >
        Work
      </Link>
      <Link 
        to="/resume" 
        className="font-semibold"
      >
        Resume
      </Link>
    </nav>
    <main className='w-screen flex flex-col items-center py-24 px-6'>
      <div className='text-left sm:w-xl md:w-2xl'>
        <Link to="/work" className="text-sm">
        <span className='text-lg mt-6'>←</span> Back to All Work
        </Link>
        <h1 className='mt-4 mb-1 text-title'>GitHub's Global Navigation</h1>
        <p className='mb-6 text-subtitle'>Explorations to launch a new vision for navigation for GitHub</p>
      </div>
      <div className='text-left max-w-2xl'>
        <div className='space-y-4 mb-4'>
          <p>I took on the role in early 2019 of iterating on the GitHub Global Nav as part of a larger overhaul to rethink GitHub’s platform. Our goal was to consider GitHub an operating system that works together.</p>
          <p>The initial explorations involved rethinking GitHub’s double stacked tab navigation on popular products such as Pull Requests and Issues, and including a side navigation for easy access to high priority items. We wanted to create a “compact” version of the navigation that allowed users to focus on the task at hand, while still having an easy way to navigate around the product. This was a multi-prong approach, which worked in concert with the Github Command Palette.</p>
          <p>We worked through and tested several iterations before I left on maternity leave in 2020. The GitHub navigation went through rigorous amounts of iterations and several designers through the years, but I’m proud to say what eventually shipped took some of the core elements and ideas of our explorations. My role involved early exploration, iteration, user testing, and eventually managing the designer who took on the initial beta that shipped to customers in late 2021.</p>
        </div>
      </div>
    </main>
  </div>
  );
}
  export default GlobalNavigation