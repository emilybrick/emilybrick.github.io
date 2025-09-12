import { Link } from 'react-router-dom'

function Resume() {
  return (
    <>
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
      
      <main className="w-screen w-full flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl w-full mx-auto py-10 mt-16 md:mt-36">
          
          {/* Experience Section */}
          <section className="mb-12">
              <div className="flex flex-col md:items-center mb-12 md:mb-14">
                <svg width="35" height="60" viewBox="0 0 68 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.9413 20.9227C23.497 21.6637 21.8905 21.7936 20.3326 21.945C16.4001 22.3128 12.4893 22.2209 8.67576 20.9768C7.13954 20.4791 5.79265 19.7056 4.68376 18.5156C3.86697 17.6393 2.99068 16.8117 2.17929 15.9246C-0.195351 13.3119 -0.40631 10.2503 0.48621 7.0264C0.918947 5.46314 2.10356 4.45162 3.42882 3.64023C4.54312 2.95326 5.70069 2.3258 6.88531 1.76865C9.92529 0.351432 13.0356 0.270294 16.0756 1.6821C18.5963 2.85049 21.052 4.17575 23.497 5.501C24.449 6.02029 25.3524 6.66398 26.1746 7.37259C28.2084 9.12518 30.4965 10.5208 32.6224 12.1381C33.3364 12.679 33.45 12.6628 34.3317 11.9704C37.6854 9.33073 41.2987 7.08049 44.9554 4.89517C45.8479 4.36507 46.7458 3.84578 47.6491 3.34273C50.7378 1.61719 54.0861 0.670576 57.5588 0.113427C60.3229 -0.330129 62.7354 0.567801 64.9532 2.09861C66.9817 3.49959 68.3502 7.11836 67.3711 9.7256C65.889 13.6743 63.3737 16.7197 59.6846 18.7428C55.5033 21.0309 51.0353 22.3507 46.2373 22.421C44.8093 22.4427 43.4083 22.2479 42.0182 21.9558C41.2176 21.7881 40.4278 21.561 39.6327 21.3608C38.1506 20.9876 37.9126 21.1661 37.9612 22.7456C38.0262 24.7416 38.5779 26.6132 39.4975 28.382C40.0276 29.3989 40.5955 30.3888 41.012 31.4652C41.58 32.9419 41.6557 34.4187 41.3041 35.9657C40.774 38.2917 39.6706 40.358 38.4913 42.3864C37.0363 44.8855 35.5541 47.3683 34.3912 50.0297C33.7962 51.382 33.2877 52.7613 32.8549 54.1731C32.7305 54.5896 32.6386 55.0224 32.6061 55.4497C32.5737 55.8608 32.8549 56.0934 33.2282 55.9365C33.8827 55.6661 34.5156 55.3415 35.1268 54.9845C36.9281 53.9459 38.7672 52.9993 40.6983 52.2312C42.5699 51.4847 44.501 51.3008 46.4862 51.4793C48.877 51.6957 50.5431 52.8587 51.4843 55.1143C52.6094 57.8189 52.9935 60.5614 52.2145 63.4283C51.771 65.0619 51.3436 66.6954 50.9434 68.3398C50.6621 69.5082 50.4349 70.6874 50.1969 71.8612C49.9156 73.246 50.2888 74.4523 51.2192 75.5016C51.7277 76.075 52.2362 76.643 52.7392 77.2164C54.2267 78.8932 55.1625 80.8297 55.5033 83.0529C56.0064 86.293 56.4391 89.5331 56.3093 92.8274C56.239 94.6503 55.8549 95.1587 54.0537 95.3859C52.2848 95.6077 50.6513 95.2074 49.8291 93.1519C48.7364 90.4148 47.4652 87.7535 46.6376 84.9137C46.1292 83.1827 45.7289 81.441 45.6261 79.6235C45.545 78.1522 45.2853 76.6971 44.5497 75.3718C43.9709 74.3278 43.8951 73.1919 43.9655 72.0289C44.1061 69.7733 44.7228 67.6258 45.4314 65.5C45.9128 64.0503 46.4375 62.6115 46.8973 61.1564C47.4652 59.3443 47.5247 57.5052 47.0379 55.6661C46.9135 55.1955 46.7404 54.7194 46.497 54.3029C45.9615 53.3888 45.307 53.14 44.2792 53.4375C43.2785 53.7296 42.3535 54.2164 41.4718 54.7573C40.0762 55.612 38.6807 56.472 37.3392 57.4078C35.1647 58.9224 32.7684 59.3984 30.1828 59.1225C29.696 59.0685 29.2091 58.9711 28.7439 58.8196C26.8615 58.2084 26.1259 57.0346 26.418 55.0765C26.5153 54.4328 26.7047 53.7999 26.894 53.1724C27.8244 50.0783 29.1118 47.1303 30.6101 44.2743C31.6 42.3918 32.6278 40.5257 33.4067 38.5405C33.8232 37.4695 34.1748 36.3822 34.4074 35.2571C34.6724 33.9481 34.6833 32.6336 34.1586 31.3895C33.5636 29.9831 32.882 28.6146 32.2113 27.2406C31.9354 26.6781 31.6 26.6835 31.2538 27.2082C31.1348 27.3921 31.0374 27.5868 30.9455 27.787C28.9657 32.1847 25.942 35.8305 22.6748 39.3032C20.695 41.4128 18.6828 43.4899 16.7084 45.6049C14.5285 47.9417 12.7922 50.5598 11.613 53.5511C10.7529 55.7364 10.6068 57.9001 11.4399 60.0962C12.7219 63.477 13.49 66.9984 14.4528 70.4657C14.6259 71.0985 14.7774 71.7368 14.8909 72.3805C15.1776 73.9925 14.9775 75.5125 14.1499 76.9675C11.9592 80.8189 9.42223 84.4377 6.65271 87.8942C6.27407 88.3702 5.85756 88.8029 5.19223 88.8516C4.5323 88.9003 4.09957 88.4405 4.36462 87.8292C4.75408 86.9313 5.20845 86.0496 5.73315 85.2274C7.5236 82.42 9.08145 79.472 10.8394 76.643C12.1052 74.6037 12.2837 72.5807 11.3912 70.4062C10.1471 67.377 8.94081 64.3316 7.6426 61.3295C6.70681 59.1604 6.37684 56.9372 6.67435 54.6113C6.87449 53.0264 7.40459 51.5388 8.07534 50.0946C9.49255 47.0384 11.5589 44.4311 13.728 41.8996C15.3615 39.9902 16.9951 38.0861 18.6882 36.2308C22.1555 32.4335 24.3138 27.9546 25.6553 23.0431C25.7418 22.7293 25.8284 22.4102 25.8717 22.0857C25.9744 21.3284 25.9203 21.2743 24.9196 20.9497C25.109 20.8469 25.3199 20.7604 25.493 20.6306C26.4937 19.8733 26.418 19.262 25.255 18.786C20.338 16.7738 15.6428 14.3721 11.5481 10.9156C11.0937 10.5316 10.596 10.1854 10.0172 9.99065C9.14636 9.69855 8.6974 9.86624 8.29712 10.7101C7.72915 11.9109 7.68587 13.1009 8.29712 14.3288C8.63249 14.9996 8.28089 15.3782 7.57228 15.2538C7.18282 15.1835 6.84745 15.005 6.56076 14.7508C5.48973 13.8258 4.98127 12.6844 5.31123 11.2564C5.65201 9.79051 6.57158 8.92504 8.14566 8.70326C9.76301 8.47607 11.2992 8.86553 12.7489 9.55791C14.1769 10.2395 15.5887 10.9535 16.9735 11.7162C19.597 13.1713 22.3557 14.3667 24.9196 15.9408C25.2388 16.1355 25.6607 16.4222 25.9744 16.1463C26.4504 15.7244 26.9373 15.27 27.1915 14.6642C27.2294 14.5723 27.0887 14.3667 26.9805 14.2693C26.8237 14.1233 26.6289 14.0043 26.4342 13.9123C23.5781 12.5708 21.4577 10.4342 19.6997 7.86483C18.2609 5.75524 16.2432 4.24607 14.1823 2.80722C13.3169 2.20138 12.3108 1.71996 11.2668 1.93092C8.61626 2.47184 6.4093 3.79169 4.85685 6.07438C4.7054 6.29616 4.61344 6.56662 4.53771 6.82626C3.98597 8.81144 3.8291 10.7966 4.54853 12.7764C5.42482 15.1943 7.00972 17.1308 8.80017 18.9104C9.17341 19.2837 9.69269 19.5325 10.1795 19.7705C11.4615 20.3926 12.8084 20.8145 14.2148 21.0687C17.8011 21.7178 21.3766 21.6259 24.9467 20.9443L24.9413 20.9227ZM45.2583 20.8794C49.2827 20.8469 52.1658 19.7759 55.0273 18.4723C58.1755 17.0443 60.5285 14.8103 62.4488 12.0137C64.4718 9.07108 64.1743 6.11765 62.3893 3.27241C61.2263 1.41705 59.5656 0.730077 57.4723 1.36836C55.3248 2.02288 53.4803 3.09931 52.0252 4.81403C50.7486 6.31239 49.3801 7.70796 47.8709 8.97372C46.1941 10.3855 44.3441 11.5377 42.4779 12.6682C42.3481 12.7493 42.1588 12.8629 42.2616 13.0306C42.3102 13.1064 42.5591 13.1064 42.6997 13.0631C43.0675 12.9549 43.43 12.8305 43.7761 12.6736C45.7667 11.7865 47.7681 10.9156 49.7425 9.99065C51.6411 9.09813 53.6642 8.67621 55.7089 8.33002C56.0821 8.26511 56.4716 8.24888 56.8502 8.29216C57.8185 8.40034 58.3053 9.0224 58.1647 9.98524C58.024 10.9535 57.4885 11.7 56.7366 12.295C56.0497 12.8413 55.2653 13.2254 54.4593 13.5716C53.7075 13.8907 52.9718 14.2747 52.1334 14.3126C51.8142 14.3288 51.4356 14.3721 51.3004 13.9772C51.1976 13.6743 51.4464 13.4742 51.652 13.3065C52.6581 12.4681 53.6696 11.6405 54.6757 10.802C55.0544 10.4883 55.433 10.18 55.7846 9.83919C55.9793 9.64987 56.1362 9.39564 56.0334 9.10354C55.8874 8.70867 55.5196 8.73571 55.2058 8.75735C54.1077 8.83849 53.0584 9.14681 52.0685 9.62282C49.0718 11.0671 46.167 12.6844 43.2785 14.3397C42.0344 15.0483 40.9742 16.0003 40.0762 17.1092C39.0701 18.3533 39.2324 19.208 40.6767 19.7759C42.4076 20.4521 44.2305 20.8145 45.2475 20.874L45.2583 20.8794ZM39.5461 14.3397C39.2919 14.4641 38.9998 14.5939 38.7131 14.7453C37.4203 15.4431 36.0951 16.1085 34.6184 16.2221C32.2275 16.4114 32.5683 16.8766 32.9361 18.6454C32.9685 18.8023 32.9956 18.9645 33.0335 19.1214C33.1579 19.6353 33.4662 19.711 33.8665 19.4243C34.4831 18.9862 35.0294 18.4236 35.6948 18.0828C37.2851 17.2715 38.2642 15.7785 39.6273 14.7183C39.6976 14.6642 39.7084 14.5344 39.7301 14.4424C39.7301 14.4316 39.6489 14.3938 39.5461 14.3397Z" fill="#D8AF9B"/>
                </svg>
                <h2 className="text-left md:text-center text-4xl md:text-5xl font-semibold text-gray-800 mt-4 font-serif">Resume</h2>
              </div>

            <div className="space-y-8">

              {/* Lattice - Sr Staff Product Designer */}
              <div className=" pb-4 pt-4 border-b border-gray-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">June 2025 – Present</span>
                  </div>
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Senior Staff Product Designer</h3>
                    <p className="text-gray-500 mb-2">
                      <a href="https://www.lattice.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
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
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Staff Systems Designer, Design Infrastructure</h3>
                    <p className="text-gray-500 mb-2">
                      <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
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
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Staff Design Manager, Design Infrastructure</h3>
                    <p className="text-gray-500 mb-2">
                      <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
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
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Staff Systems Designer, Design Infrastructure</h3>
                    <p className="text-gray-500 mb-2">
                      <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
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
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Senior Systems Designer, Design Infrastructure</h3>
                    <p className="text-gray-500 mb-2">
                      <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
                        GitHub
                      </a> | Remote
                    </p>
                  </div>
                </div>

              {/* GitHub - Systems Designer */}
              <div className="pb-4 border-b border-gray-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">September 2018 – December 2019</span>
                  </div>
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Systems Designer, Design Infrastructure</h3>
                    <p className="text-gray-500 mb-2">
                      <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
                        GitHub
                      </a> | Remote
                    </p>
                  </div>
                </div>
              </div>

              {/* Trello - Product Designer */}
              <div className="pb-4 border-b border-gray-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">April 2018 – September 2018</span>
                  </div>
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Product Designer</h3>
                    <p className="text-gray-500 mb-2">
                      <a href="https://www.trello.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
                        Trello
                      </a> | New York, NY
                    </p>
                  </div>
                </div>
              </div>

              {/* BuzzFeed - Senior Product Designer */}
              <div className="pb-4 border-b border-gray-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">July 2015 – March 2018</span>
                  </div>
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Senior Product Designer</h3>
                    <p className="text-gray-500 mb-2">
                      <a href="https://www.buzzfeed.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
                        BuzzFeed
                      </a> | New York, NY
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">December 2014 – July 2015</span>
                  </div>
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Product Designer</h3>
                    <p className="text-gray-500 mb-2">
                      <a href="https://www.buzzfeed.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
                        BuzzFeed
                      </a> | New York, NY
                    </p>
                  </div>
                </div>
              </div>

              {/* Shapeways */}
              <div className="pb-4 border-b border-gray-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">January 2014 – December 2014</span>
                  </div>
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Product Designer</h3>
                    <p className="text-gray-500 mb-2">
                      <a href="https://www.shapeways.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
                        Shapeways
                      </a> | New York, NY
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">August 2013 – January 2014</span>
                  </div>
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Junior Product Designer</h3>
                    <p className="text-gray-500 mb-2">
                      <a href="https://www.shapeways.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
                        Shapeways
                      </a> | New York, NY
                    </p>
                  </div>
                </div>
              </div>

              {/* Birchbox */}
              <div className="pb-4 border-b border-gray-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">May 2013 – July 2013</span>
                  </div>
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Freelance Designer</h3>
                    <p className="text-gray-500 mb-2">
                      <a href="https://www.birchbox.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
                        Birchbox
                      </a> | New York, NY
                    </p>
                  </div>
                </div>
              </div>

              {/* Solve Media */}
              <div className="pb-4 border-b border-gray-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">June 2012 – May 2013</span>
                  </div>
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Interactive & Marketing Designer</h3>
                    <p className="text-gray-500 mb-2">
                      <span className="font-bold">Solve Media</span> | New York, NY
                    </p>
                  </div>
                </div>
              </div>

              {/* NBC Universal */}
              <div className="pb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="md:w-1/3 text-left md:text-right">
                    <span className="text-gray-500">June 2011 – August 2011</span>
                  </div>
                  <div className="md:w-2/3 md:pl-12">
                    <h3 className="font-semibold text-md text-gray-500 font-serif">Graphic Design Intern</h3>
                    <p className="text-gray-500 mb-2">
                      <a href="http://www.nbcuniversal.com/business/nbc-sports" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
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
              <div className="md:w-2/3 md:pl-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">Education</h2>
              </div>
            </div>
            
            <div className="pb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div className="md:w-1/3 text-left md:text-right">
                  <span className="text-gray-500">September 2008 – May 2012</span>
                </div>
                <div className="md:w-2/3 md:pl-12">
                  <h3 className="font-semibold text-md text-gray-500 font-serif">Bachelor of Fine Arts in Graphic Design</h3>
                  <p className="text-gray-500 mb-2">
                    <a href="https://en.wikipedia.org/wiki/University_of_the_Arts_(Philadelphia)" target="_blank" rel="noopener noreferrer" className="hover:underline text-link">
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
              <div className="md:w-2/3 md:pl-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">Toolkit</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="md:w-1/3 text-left md:text-right mb-2 md:mb-0">
                  <span className="text-gray-500">Tools</span>
                </div>
                <div className="md:w-2/3 md:pl-12">
                  <p className="text-gray-700">Figma, GitHub, Notion, GSuite, Raycast, Slack</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="md:w-1/3 text-left md:text-right mb-2 md:mb-0">
                  <span className="text-gray-500">Languages</span>
                </div>
                <div className="md:w-2/3 md:pl-12">
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
