import { Link } from 'react-router-dom'
import { useState } from 'react'
import commandPalette from '@/assets/images/commandPalette.gif';
import commandPalette2 from '@/assets/images/commandPalette_2.png';
import commandPalette1 from '@/assets/images/commandPalette_1.png';

function CommandPalette() {
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
        <h1 className='mt-4 mb-1 text-title'>GitHub's Command Palette</h1>
        <p className='mb-6 text-subtitle'>Introducing a way for users to quickly navigate and execute commands within GitHub</p>
      </div>
      <div className='max-w-4xl'>
        <a href={commandPalette} target="_blank" rel="noopener noreferrer">
          <img
            src={commandPalette}
            width={800}
            alt="Command Palette Demo"
            className="w-full h-auto mb-4"
          />
        </a>
      </div>
      <div className='text-left max-w-2xl'>
        <div className='space-y-4 mb-4'>
          <p>GitHub had long been struggling with the complexity of its navigation and product offerings. It was critical that folks could navigate workflows and run commands with ease despite GitHub’s broad landscape in the product development cycle.</p>
          <p>We started working on a <Link to="/work/global-navigation" className ="!underline" target="_blank" rel="noopener noreferrer">navigation redesign</Link>, and part of that work was finding a way to get the navigation UI out of the user’s way – so that they could focus on the task at hand and what was most important. Every time someone had to think twice about how to get to where they needed to be – or hope that they had a Pull Request or Repository URL saved in their URL bar – was a point of friction that added up quickly.</p>
          <p>We also tasked ourselves with the lofty goal of reframing GitHub’s Core UI as its own "OS," the operating system that the product lives and breathes within. In what ways can we intuit how the user wants to move across the product? How can we reduce the friction of context-switching and task completion?</p>
          <p>My initial role in this project was to lead the design exploration and first iteration of the feature. I took on a manager role mid-project and oversaw the initial design and build of the product, which shipped in 2022.</p>
          <p>Blog post: <a href="https://github.blog/changelog/2021-10-27-command-palette-beta/" target="_blank" rel="noopener noreferrer" className="!underline">Introducing the GitHub Command Palette</a></p>
          <p>The Command Palette was designed to be a quick way to navigate and execute commands without having to leave the keyboard. It was inspired by similar features in other products, such as the Command Palette in Visual Studio Code and the Spotlight Search in macOS.</p>
          <p>The Command Palette was slotted to be deprecated in July of 2025, but <a href="https://www.theregister.com/2025/07/22/github_command_palette_backtrack/" target="_blank" rel="noopener noreferrer" className="!underline">customers spoke up</a> quite <a href="https://www.neowin.net/news/github-customers-rejoice-as-command-palette-deprecation-is-delayed/" target="_blank" rel="noopener noreferrer" className="!underline">a bit</a> and it is now in talks to remain maintained, which you can read more about <a href="https://github.blog/changelog/2025-07-15-upcoming-deprecation-of-github-command-palette-feature-preview/" target="_blank" rel="noopener noreferrer" className="!underline">here</a></p>
        </div>
      </div>
      <div className='max-w-4xl'>
        <a href={commandPalette1} target="_blank" rel="noopener noreferrer">
          <img
            src={commandPalette1}
            width={800}
            alt="Command Palette Demo"
            className="w-full h-auto mb-4"
          />
        </a>
        <a href={commandPalette2} target="_blank" rel="noopener noreferrer">
          <img
            src={commandPalette2}
            width={800}
            alt="Command Palette Demo"
            className="w-full h-auto mb-4"
          />
        </a>
      </div>
    </main>
  </div>
  );
}
  export default CommandPalette