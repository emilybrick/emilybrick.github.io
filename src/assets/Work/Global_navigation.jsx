import { Link } from 'react-router-dom'
import { useState } from 'react'
import navWireframes from '@/assets/images/globalNavigation_wireframes.png';
import navHighFidelity1 from '@/assets/images/globalNavigation_highFidelity1.png';
import navHighFidelity2 from '@/assets/images/globalNavigation_highFidelity2.png';
import navHighFidelity3 from '@/assets/images/globalNavigation_highFidelity3.png';
import navResponsive1 from '@/assets/images/globalNavigation_responsive1.png';
import navResponsive2 from '@/assets/images/globalNavigation_responsive2.png';
import navResponsive3 from '@/assets/images/globalNavigation_responsive3.png';
import navResponsive4 from '@/assets/images/globalNavigation_responsive4.png';
import navVision from '@/assets/images/globalNavigation_vision.png';

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
        <p className='mb-6 text-subtitle'>Exploring a scalable vision for GitHub's navigation</p>
      </div>
      <div className='max-w-4xl'>
        <a href={navVision} target="_blank" rel="noopener noreferrer">
          <img
            src={navVision} 
            width={800}
            alt="Global Navigation Vision"
            className="w-full h-auto mb-4"
          />
        </a>
      </div>
      <div className='text-left max-w-2xl'>
        <div className='space-y-4 mb-4'>
          <p>I took on the role in early 2019 of iterating on the GitHub Global Nav as part of a larger overhaul to rethink GitHub’s platform. Our goal was to consider GitHub an operating system that works together.</p>
          <p>The initial explorations involved rethinking GitHub’s double stacked tab navigation on popular products such as Pull Requests and Issues, and including a side navigation for easy access to high priority items. We wanted to create a “compact” version of the navigation that allowed users to focus on the task at hand, while still having an easy way to navigate around the product. This was a multi-prong approach, which worked in concert with the Github Command Palette.</p>
          <p>We worked through and tested several iterations before I went on maternity leave in 2020. The GitHub navigation went through rigorous amounts of iterations and several designers through the years, but I’m proud to say what eventually shipped took some of the core elements and ideas of our explorations. My role involved early exploration, iteration, and user testing to validate concepts. When I returned from maternity leave, I began managing the designer who took on one of the earlier betas that shipped to customers in late 2021.</p>
        </div>
      </div>
      <div className='max-w-4xl'>
        <a href={navHighFidelity1} target="_blank" rel="noopener noreferrer">
          <img
            src={navHighFidelity1} 
            width={800}
            alt="Global Navigation High Fidelity"
            className="w-full h-auto mb-4"
          />
        </a>
        <a href={navHighFidelity2} target="_blank" rel="noopener noreferrer">
          <img
            src={navHighFidelity2} 
            width={800}
            alt="Global Navigation High Fidelity"
            className="w-full h-auto mb-4"
          />
        </a>
        <a href={navHighFidelity3} target="_blank" rel="noopener noreferrer">
          <img
            src={navHighFidelity3} 
            width={800}
            alt="Global Navigation High Fidelity"
            className="w-full h-auto mb-4"
          />
        </a>
        <a href={navWireframes} target="_blank" rel="noopener noreferrer">
          <img
            src={navWireframes} 
            width={800}
            alt="Global Navigation Wireframes"
            className="w-full h-auto mb-4"
          />
        </a>
        <a href={navResponsive1} target="_blank" rel="noopener noreferrer">
          <img
            src={navResponsive1} 
            width={800}
            alt="Global Navigation Responsive"
            className="w-full h-auto mb-4"
          />
        </a>
        <a href={navResponsive2} target="_blank" rel="noopener noreferrer">
          <img
            src={navResponsive2} 
            width={800}
            alt="Global Navigation Responsive"
            className="w-full h-auto mb-4"
          />
        </a>
        <a href={navResponsive3} target="_blank" rel="noopener noreferrer">
          <img
            src={navResponsive3} 
            width={800}
            alt="Global Navigation Responsive"
            className="w-full h-auto mb-4"
          />
        </a>
        <a href={navResponsive4} target="_blank" rel="noopener noreferrer">
          <img
            src={navResponsive4} 
            width={800}
            alt="Global Navigation Responsive"
            className="w-full h-auto mb-4"
          />
        </a>
      </div>
    </main>
  </div>
  );
}
  export default GlobalNavigation