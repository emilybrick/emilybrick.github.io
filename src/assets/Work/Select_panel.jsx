import { Link } from 'react-router-dom'
import { useState } from 'react'

function SelectPanel() {
  const [count, setCount] = useState(0);

  return (

    <div>
      {/* Fixed navigation links in top left */}
      <nav className="fixed p-6 z-10 flex space-x-4 w-full bg-color">
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
      <div className='text-left max-w-2xl'>
        <Link to="/work" className="text-sm">
        <span className='text-lg mt-6'>←</span> Back to All Work
        </Link>
        <h1 className='mt-4 mb-1 text-title'>SelectPanel</h1>
        <p className='mb-6 text-subtitle'>SelectPanels are one of the highest touch components that Primer maintains. It allows users to quickly navigate and select one or multiple items from a list.</p>
      </div>
      <div className='max-w-4xl'>

      </div>
      <p>Coming soon...</p>  
    </main>
  </div>
  );
}
  export default SelectPanel