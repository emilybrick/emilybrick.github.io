import { Link } from 'react-router-dom'
import { useState } from 'react'
import SPAnatomyImage from '@/assets/images/selectpanel_anatomy.png';
import SPImage from '@/assets/images/selectpanel.png';
import SPLoadingImage from '@/assets/images/selectpanel_loading.png';
import SPErrorImage from '@/assets/images/selectpanel_error.png';

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
        <p className='mb-6 text-subtitle'>SelectPanels are one of GitHub's highest touch components. They allow users to quickly navigate and select one or multiple items from a list.</p>
      </div>
      <div className='max-w-4xl'>
        <a href={SPAnatomyImage} target="_blank" rel="noopener noreferrer">
          <img
            src={SPAnatomyImage}
            width={800}
            alt="Primer Documentation"
            className="w-full h-auto mb-4"
          />
        </a>
      </div>
      <div className='text-left max-w-2xl'>
        <div className='space-y-4 mb-4'>
          <h2>Background</h2>
          <p>The team embarked on a journey in 2024 to explore a new SelectPanel component with the intention of making it easier to use and more visually balanced. We decided to create a new variation of the component, rather than modifying the original component directly. This was to ensure the team could user test the new variation of the component in production without committing to it, and a way to keep the risk assessment low. It also left room for the component to diverge more from the original, potentially becoming an entirely separate component.</p>
          <p>The newer variation – SelectPanel v2 – offered cleaner padding, better typographic balance, and offered responsive solutions that the original component did not. More importantly, the newer component also offered one key difference: it included explicit Save and Cancel buttons at the bottom of the dialog, whereas the original variant saved the user’s options on close (without the user needing to explicitly save and cancel).</p>
          <p> After a few months, several teams began using the “V2” version of the component, while the rest of GitHub stayed with the original component.</p>
        </div>
        <div className='space-y-4 mb-4'>
          <h2>The problem</h2>
          <p>We ended up with divergent components achieving the same thing. Some teams were using the V2 version in their UI, other products had already been using the original component, with no real need to migrate to the new version. </p>
        </div>
        <div className='space-y-4 mb-4'>
          <h2>Why not just migrate all products to use the new SelectPanel V2?</h2>
          <p>After being in production for a few months, we learned users did not respond well to the experimental component. The main feedback was that needing to take the step to explicitly ‘Save’ or ‘Cancel’ the user’s selection felt too heavy handed for what it was doing. Most folks preferred the ‘click out to save and close’ behavior for its simplicity, specifically in the Pull Request context where the user may need to select options from several SelectPanels in the same view.</p>
        </div>
        <div className='space-y-4 mb-4'>
          <h2>The goal</h2>
          <p>We needed to understand what was working in the experimental component, and bring that back into the original component. Once we were able to consolidate all the desired changes to the original component, we then went through and migrated each experimental component back to the original variation. In the end we established a variant of the SelectPanel that worked across mobile and desktop, single select and multi select, for both modal and nonmodal versions. We were able to fully deprecate the experimental component and migrate five instances of it in production back to the redesigned original variation.</p>
        </div>
        <div className='space-y-4 mb-4'>
          <h2>Why I loved working on this project</h2>
          <p>The SelectPanel project required so many different facets of expertise to go smoothly. It required carving out clarity from a complex landscape, responding to user feedback with rigor, gaining consensus across multiple feature teams, and finding reasonable compromise when technical challenges arose. Moreover, I had great engineering partners to collaborate with.</p>
        </div>
      </div>
      <div className='max-w-4xl'>
        <a href={SPImage} target="_blank" rel="noopener noreferrer">
          <img
            src={SPImage}
            width={800}
            alt="Primer Documentation"
            className="w-full h-auto mb-4"
          />
        </a>
        <a href={SPLoadingImage} target="_blank" rel="noopener noreferrer">
          <img
            src={SPLoadingImage}
            width={800}
            alt="Primer Documentation"
            className="w-full h-auto mb-4"
          />
        </a>
        <a href={SPErrorImage} target="_blank" rel="noopener noreferrer" className='flex justify-center'>
          <img
            src={SPErrorImage}
            width={600}
            alt="Primer Documentation"
            className="h-auto mb-4"
          />
        </a>
      </div>
    </main>
  </div>
  );
}
  export default SelectPanel