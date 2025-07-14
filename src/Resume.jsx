import { Link } from 'react-router-dom'

function Resume() {
  return (
    <>
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
      
      <main className="w-screen w-full flex flex-col items-center justify-center min-h-screen px-6 bg-white">
        <div className="max-w-4xl w-full mx-auto py-12 mt-24">
          
          {/* Experience Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div className="md:w-1/3 text-left md:text-right">
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8 font-serif">Experience</h2>
              </div>
            </div>

            <div className="space-y-8">

              {/* Lattice - Sr Staff Product Designer */}
              <div className="border-b border-gray-200 pb-6 pt-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">June 2025 – Present</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Sr Staff Product Designer</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="https://www.lattice.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Lattice
                      </a> | Remote
                    </p>
                  </div>
                </div>
              </div>

              {/* GitHub - Staff Systems Designer */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">May 2022 – June 2025</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Staff Systems Designer, Design Infrastructure</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        GitHub
                      </a> | Remote
                    </p>
                  </div>
                </div>
              
              {/* GitHub - Staff Design Manager */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">November 2021 – April 2022</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Staff Design Manager, Design Infrastructure</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        GitHub
                      </a> | Remote
                    </p>
                  </div>
                </div>

              {/* GitHub - Staff Systems Designer */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">November 2020 – November 2021</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Staff Systems Designer, Design Infrastructure</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        GitHub
                      </a> | Remote
                    </p>
                  </div>
                </div>

              {/* GitHub - Senior Systems Designer */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">December 2019 – November 2020</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Senior Systems Designer, Design Infrastructure</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        GitHub
                      </a> | Remote
                    </p>
                  </div>
                </div>

              {/* GitHub - Systems Designer */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">September 2018 – December 2019</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Systems Designer, Design Infrastructure</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        GitHub
                      </a> | Remote
                    </p>
                  </div>
                </div>
              </div>

              {/* Trello - Product Designer */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">April 2018 – September 2018</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Product Designer</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="https://www.trello.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Trello
                      </a> | New York, NY
                    </p>
                  </div>
                </div>
              </div>

              {/* BuzzFeed - Senior Product Designer */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">July 2015 – March 2018</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Senior Product Designer</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="https://www.buzzfeed.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        BuzzFeed
                      </a> | New York, NY
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">December 2014 – July 2015</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Product Designer</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="https://www.buzzfeed.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        BuzzFeed
                      </a> | New York, NY
                    </p>
                  </div>
                </div>
              </div>

              {/* Shapeways */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">January 2014 – December 2014</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Product Designer</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="https://www.shapeways.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Shapeways
                      </a> | New York, NY
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">August 2013 – January 2014</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Junior Product Designer</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="https://www.shapeways.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Shapeways
                      </a> | New York, NY
                    </p>
                  </div>
                </div>
              </div>

              {/* Birchbox */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">May 2013 – July 2013</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Freelance Designer</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="https://www.birchbox.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Birchbox
                      </a> | New York, NY
                    </p>
                  </div>
                </div>
              </div>

              {/* Solve Media */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">June 2012 – May 2013</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Interactive & Marketing Designer</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="http://www.solvemedia.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Solve Media
                      </a> | New York, NY
                    </p>
                  </div>
                </div>
              </div>

              {/* NBC Universal */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">June 2011 – August 2011</span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Graphic Design Intern</h3>
                    <p className="text-blue-600 mb-2">
                      <a href="http://www.nbcuniversal.com/business/nbc-sports" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        NBC Universal
                      </a> | Philadelphia, PA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div className="md:w-1/3 text-left md:text-right">
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8 font-serif">Education</h2>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div className="md:w-1/3 text-left md:text-right">
                  <span className="text-gray-500">September 2008 – May 2012</span>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="font-semibold text-md text-gray-500 font-serif">Bachelor of Fine Arts in Graphic Design</h3>
                  <p className="text-blue-600 mb-2">
                    <a href="https://www.uarts.edu/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      The University of the Arts
                    </a> | Philadelphia, PA
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Toolkit Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div className="md:w-1/3 text-left md:text-right">
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8 font-serif">Toolkit</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="md:w-1/3 text-left md:text-right mb-2 md:mb-0">
                  <span className="text-gray-500">Tools</span>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <p className="text-gray-700">Figma, GitHub, Notion, GSuite, Raycast, Slack</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="md:w-1/3 text-left md:text-right mb-2 md:mb-0">
                  <span className="text-gray-500">Languages</span>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <p className="text-gray-700">HTML/CSS, React, Git</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Resume
