import { useState } from 'react';
import { Link } from 'react-router-dom';
import cur from './images/curiesLogo.png'
import ham from './images/hamburger.png'
import pharm from './images/pharm.png'
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  document.addEventListener('touchmove', closeMobileMenu, { passive: true });


  return (
    <>
      
      
        <nav className="bg-blue-800 overflow-visible  font-bold text-2xl right-0 top-0 left-0 fixed mx-0 pl-0 z-50 ">
          <div className="max-w-7xl mx-auto flex flex-row justify-between">
            <div className="flex items-center">
              <div className="w-auto flex flex-row overflow-visible mt-2">
                <img className='w-16 h-16' src={cur} alt='curies'/>
                <div className='flex flex-col md:flex-row font-bold text-white ml-2 whitespace-no-wrap ' >
                  <span className='text-sm px-2 sm:text-2xl whitespace-nowrap'>THE CURIES</span>
                  <span className='text-xs  sm:whitespace-nowrap px-2'>Research Team</span>
                </div>
                
              </div>
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className=" absolute right-0 top-2"
                >
                 <img src={ham} className='w-12 h-8' alt='hamb'/>
                </button>
              </div>
              <div
                className={`${
                  isMobileMenuOpen ? 'block' : 'hidden'
                } md:flex space-x-10 justify-between w-3/4 overflow-visible  text-black`}
              >
                <div
                  onClick={toggleMobileMenu}
                  className={`${
                    isMobileMenuOpen ? 'block' : 'hidden'
                  } fixed inset-0 w-1/2 bg-blue-800 overflow-visible z-50 justify-between`}
                ></div>
                <div
                  className={`${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                  } md:translate-x-0 absolute overflow-visible -top-3 pl-2 justify-between -left-12 h-full pt-2 text-white w-3/4 md:w-auto z-50 transform transition-transform duration-300 ease-in-out md:static  bg-blue-800 md:flex md:space-x-10`}
                >
                  <div className=' justify-between  z-50 overflow-visible flex  flex-col md:flex-row'>
                    <Link
                      to="/"
                      className="hover:text-gray-900 py-2 block ml-20 "
                      
                    >
                      Home
                    </Link>
                    <Link
                      className="hover:text-gray-900 py-2 block ml-20 "
                      to="/ABOUT/About" 
                      
                    >
                      About
                    </Link>
                    <Link
                      className="hover:text-gray-900 py-2 block ml-20"
                      to="/PUZZLES/Puzzles"
                      onClick={() => {
                        console.log("Puzzles link clicked");
                      }}
                    >
                      Puzzles
                    </Link>
                    <Link
                      to="/PUBLICATIONS/Publications"
                      className="hover:text-gray-900 py-2 block ml-20 "
                      
                    >
                      Publications
                    </Link>
                    
                  </div>
                  
                  
                </div>
              </div>
              
            </div>
            <div className='hidden md:block'>
              <img className='w-16 h-16' src={pharm} alt='pharm'/>
            </div>

          </div>
          
        </nav>
      
    </>
  );
}