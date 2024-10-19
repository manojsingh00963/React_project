// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from '../assets/logo-white.svg';
import { NavLink } from 'react-router-dom';
import { FiSearch} from "react-icons/fi";
import { FaAngleDown,FaAngleUp } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
const Navbar = ({ search, handleInput, getData, userInput }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-white border-gray-200 dark:bg-gray-900 w-screen">
        <div className="flex justify-around items-center">
          <div className="flex flex-wrap max-w-screen-xl p-2">
            <NavLink to="/" className="flex items-center">
              <img
                src={logo}
                className="h-10"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                RapidNews
              </span>
            </NavLink>
          </div>
        </div>

        <nav className="bg-slate-600 text-white py-2 md:py-2 shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* Navigation Links */}
            <nav className="hidden md:flex text-lg space-x-4">
              <NavLink 
                to="/" 
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300' : 'hover:text-gray-300'
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300' : 'hover:text-gray-300'
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300' : 'hover:text-gray-300'
                }
              >
                Contact
              </NavLink>
            </nav>

            <div className="flex items-center relative gap-5">
              {/* Dropdown */}
              <div className="relative mt-3 md:mt-0">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center bg-[#171717] text-white px-3 py-1 md:px-4 md:py-2 rounded-md shadow-lg focus:outline-none"
                  aria-expanded={isOpen}
                >
                  Categories
                  {isOpen ? <FaAngleUp className="ml-2 " /> : <FaAngleDown className="ml-2 " />}
                </button>

                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1 text-gray-700">
                      {["Technology", "Sports", "Politics", "Health", "Education", "Lifestyle", "Business"].map((category) => (
                        <li key={category} className="hover:bg-gray-200 px-4 py-2">
                          <button onClick={userInput} value={category}>{category}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Search Bar */}
              <div className="flex items-center bg-neutral-300 rounded-full p-1 shadow-md mt-3 md:mt-0">
                <input
                  value={search}
                  onChange={handleInput}
                  id="search"
                  type="text"
                  placeholder="Search..."
                  className="w-28 lg:w-44 px-3 py-2 text-gray-600 rounded-full"
                />
                <button onClick={getData} className="text-gray-600 px-3">
                  <FiSearch className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
