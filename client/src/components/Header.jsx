/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom'


function Header({isLoggedIn}) {
const navigateTo = useNavigate()

  return (
    <header className="header">
    <nav className="flex items-center justify-between flex-wrap p-6">
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
        
        <div className="dropdown relative flex items-center h-full hover:bg-gray-500 px-2 transition">
          <button className="inline-flex items-center h-full">
            <span className="mr-1">Account</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </button>
          
          <ul className="dropdown-menu absolute bg-white shadow hidden w-32">
            <li><button className="py-1 px-4 block hover:bg-gray-200 whitespace-no-wrap">Manar</button></li>
            <li><button className="py-1 px-4 block hover:bg-gray-200 whitespace-no-wrap">Log out</button></li>
          </ul>      
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
          <button className="bg-white text-gray-700 hover:text-gray-900 py-2 px-4 rounded-full border-solid border border-gray-600">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  </header>
  )
}

export default Header