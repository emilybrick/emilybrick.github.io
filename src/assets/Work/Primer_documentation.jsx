import { Link } from 'react-router-dom'
import { useState } from 'react'

function PrimerDocumentation() {
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
         <span className='text-lg mt-1'>←</span> Back to All Work
        </Link>
      <h1 className='mt-4 mb-5'><span className='text-4xl font-bold-italic'>Primer Documentation</span></h1>
        <article>
          <div className='space-y-4 mb-4'>
            <h2>Background</h2>
            <p>
              I joined the Primer team in <time datetime="2018">2018</time>, when it was still small and focused mainly on CSS utilities and simple components for GitHub’s Rails app. Early on, I worked with the team to unify patterns across high-traffic pages, introduce responsive design, and establish a basic component library.
            </p>
            <p>
              As we grew, View and React components were added, each with their own documentation site powered by Doctocat, our Primer-flavored Gatsby boilerplate. While Doctocat made it easy to spin up consistently branded sites, the separate sites quickly led to fragmentation, inconsistency, and confusion around the “source of truth” for components. There was no single canonical list of components, and Hubbers had to scan multiple pages to get the “full picture” of a single pattern or component.
            </p>
            <p>
              In <time datetime="2022">2022</time>, I shifted to focusing part-time on fixing our documentation. I partnered with a program manager to run usability tests, interviews, and workshops across engineering, design, and product. The feedback confirmed what many of us already felt: documentation was fragmented, inconsistent, and hard to trust.
            </p>
            <p>
              With limited resources, I led the effort to consolidate everything into a single “Primer design system” site, combining design, React, Rails, and CSS documentation into one clear, unified experience. This dramatically improved usability and consistency for our users.
            </p>
          </div>
          <div className='space-y-4 mb-4'>
            <h2>The problem</h2>
            <p>
              Even though the new unified documentation site was a huge step forward, we were still constrained by Gatsby, which was hard to maintain, slow to scale, and full of dependency issues. Gatsby became a bottleneck that slowed down the growth and scale of the documentation necessary.
            </p>
            <p>
              We want to replatform the documentation site and give it a bit of a facelift that we didn’t have the bandwidth or resources to in the prior ship.
            </p>
          </div>
          <div className='space-y-4 mb-4'>
            <h2>Goal</h2>
            <p>
              Improve the user experience, documentation, and visual design of Primer documentation as complete the migration of our old documentation from Gatsby &rarr; NextJS.
            </p>
          </div>
          <div className='space-y-4 mb-4'>
            <h2>Why I loved this challenge</h2>
            <p>
              It was rewarding to redesign the documentation site in <time datetime="2024">2024</time>, because we had already done the “heavy lifting” of consolidating the user experience a year prior, and we were able to focus on the technical framework and branded visuals to upgrade the site’s look and feel.
            </p>
            <p>
              We also took the re-platforming opportunity to remap the documentation information architecture (IA) to better match the current products and business roadmap.
            </p>
          </div>
      </article>
      </div>
    </main>
  </div>
  );
}
  export default PrimerDocumentation