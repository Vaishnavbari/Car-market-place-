import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import {Link, NavLink} from "react-router-dom"


function Navbar() {

 const {user, isSignedIn} = useUser()

  return (
    <nav className='w-full h-auto p-4 flex justify-between shadow-lg'> 
    {/* logo */}
    <div className='flex gap-2 items-center p-3 w-[25%]'>
      <img src='/vite.svg' alt='logo' className='' />
      <label htmlFor="logo" >Car-Market</label>
   </div>

    {/* links */}
    <div className="hidden items-center sm:flex w-[50%] px-10">
  <ul className="flex justify-between w-[80%] lg:w-[50%] items-center ">
    <li className="text-sm font-bold hover:text-blue-500  transition duration-300 ease-in">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-orange-800" : ""
        }
      >
        Home
      </NavLink>
    </li>
    <li className="text-sm font-bold hover:text-blue-500  transition duration-300 ease-in">
      <NavLink
        to="/search"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-orange-800" : ""
        }
      >
        search
      </NavLink>
    </li>
    <li className="text-sm font-bold hover:text-blue-500  transition duration-300 ease-in">
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-orange-800" : ""
        }
      >
        about
      </NavLink>
    </li>
    <li className="text-sm font-bold hover:text-blue-500  transition duration-300 ease-in">
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-orange-800" : ""
        }
      >
        contact
      </NavLink>
    </li>
  </ul>
</div>

    {/* buttons */}
    <div className='flex items-center gap-2 justify-evenly w-[25%]'>
       {/* profile */}
       { isSignedIn ? 
       <div className='flex  items-center gap-3'>
         <UserButton/>
        <button className='bg-blue-300 px-4 py-2 rounded-xl'>Submit Listings</button>
        </div> :
        <SignInButton/>
       }
    </div>
  </nav>
  )
}

export default Navbar