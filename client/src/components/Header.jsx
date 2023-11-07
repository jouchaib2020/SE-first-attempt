/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Header({isLoggedIn}) {
const navigateTo = useNavigate()
const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
    <nav className={` bg-white w-full flex items-center justify-between flex-wrap p-6 shadow-lg '${isSticky && 'fixed top-0'}'`}>
      <div className="flex items-center text-black mr-6">
        <Link to="/"><span className="font-semibold text-xl tracking-tight">Thesis Proposals </span></Link>
        
      </div>
      {isLoggedIn?(
      <div className="flex items-center h-full">
        <button 
        className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full mr-3"
        onClick={() => {navigateTo('/')}}
        >
          Submit
        </button>
        
        <div className="dropdown relative flex items-center h-full px-2 transition">
          <button 
          type="button" 
          className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" 
          >
            <img className="w-10 h-10 rounded-full" src="https://static.vecteezy.com/system/resources/previews/011/459/666/original/people-avatar-icon-png.png" alt="user photo" />
          </button>
          <div 
          className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown">
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        
      ):(
        <div>
          <button 
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full mr-3"
          onClick={() => {navigateTo('/add')}}
          >
            New Proposal
          </button>
          <button 
          className="bg-white text-gray-700 hover:text-gray-900 py-2 px-4 rounded-full mr-3 border-solid border border-gray-600"
          onClick={() => {navigateTo('/login')}}
          >
            Sign In
          </button>

        </div>
      )}
    </nav>
  </header>
  )
}

export default Header