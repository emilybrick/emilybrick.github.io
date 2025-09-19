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
      <div className='text-left sm:min-w-xl md:min-w-2xl'>
        <Link to="/work" className="text-sm">
        <span className='text-lg mt-1'>←</span> Back to All Work
        </Link>
        <h1 className='mt-4 mb-1'><span className='text-left text-4xl font-bold-italic'>Primer Documentation</span></h1>
        <p className='mb-4'>Rethinking GitHub's design system documentation from the ground up.</p>
      </div>
      <div className='text-left max-w-3xl'>
        <a href="/public/images/documentation_product_hp.png" target="_blank" rel="noopener noreferrer">
          <img
            src="/public/images/documentation_product_hp.png"
            width={800}
            alt="Primer Documentation"
            className="w-full h-auto mb-4"
          />
        </a>
      </div>
      <div className='text-left max-w-2xl'>
      <div className='space-y-4 mb-4'>
        <h2>Background</h2>
        <p>
          I joined the Primer team in <time datetime="2018">2018</time>, when it was still small and focused mainly on CSS utilities and simple components for GitHub’s Rails app. Early on, I worked with the team to unify patterns across high-traffic pages, introduce responsive design, and establish a basic component library.
        </p>
        <p>
          As we grew, View and React components were added, each with their own documentation site powered by Doctocat, our Primer-flavored Gatsby boilerplate. While Doctocat made it easy to spin up consistently branded sites, the separate sites quickly led to fragmentation, inconsistency, and confusion around the “source of truth” for components. There was no single canonical list of components, and Hubbers had to scan multiple pages to get the “full picture” of a single pattern or component.
        </p>
        <p>
          In <time datetime="2022">2022</time>, I shifted to focusing part-time on our documentation. I partnered with a program manager to run usability tests, interviews, and workshops across engineering, design, and product. The feedback confirmed what many of us already felt: documentation was fragmented, inconsistent, and hard to trust.
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
        <h2>Why I loved this challenge</h2>
        <p> We set out to improve the user experience and visual design of Primer documentation as well as complete the migration of our old documentation from Gatsby &rarr; NextJS.
        </p>
        <p>
          It was rewarding to redesign the documentation site in <time datetime="2024">2024</time>, because we had already done the “heavy lifting” of consolidating and streamlining the documentation a year prior, and we were able to focus on the technical framework and branded visuals to upgrade the site’s look and feel.
        </p>
        <p>
          We also took the re-platforming opportunity to remap the documentation IA to better map to the business and where it was headed. Primer became a scalable umbrella for all of GitHub's design properties, including Product UI, Marketing UI, and Brand Design.
        </p>
      </div>
      <Link to={"https://primer.style"} className="!underline">Check out the Primer documentation site</Link>
    </div>
    <div className='max-w-3xl mt-6'>
      <a href="/public/images/documentation_full_lightmode.png" target="_blank" rel="noopener noreferrer">
        <img
          src="/public/images/documentation_full_lightmode.png"
          width={800}
          alt="Primer Documentation"
          className="w-full h-auto mb-4"
        />
      </a>
      <a href="/public/images/documentation_component_page.png" target="_blank" rel="noopener noreferrer">
        <img
          src="/public/images/documentation_component_page.png"
          width={800}
          alt="Primer Documentation"
          className="w-full h-auto mb-4"
        />
      </a>
      <a href="/public/images/documentation_component_page_2.png" target="_blank" rel="noopener noreferrer">
        <img
          src="/public/images/documentation_component_page_2.png"
          width={800}
          alt="Primer Documentation"
          className="w-full h-auto mb-4"
        />
      </a>
      <a href="/public/images/documentation_octicon.png" target="_blank" rel="noopener noreferrer">
        <img
          src="/public/images/documentation_octicon.png"
          width={800}
          alt="Primer Documentation"
          className="w-full h-auto mb-4"
        />
      </a>
    </div>
    </main>
  </div>
  );
}
  export default PrimerDocumentation