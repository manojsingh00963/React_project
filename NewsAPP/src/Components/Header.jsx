import React from 'react'
// import { FiSearch } from "react-icons/fi";
import logo from '../assets/logo-white.svg'

function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 w-screen ">
        <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl p-4">
        <a href="" className='flex'>

            <img
              src={logo}
              className="h-10"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              RapidNews
            </span>
        </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
            123456
            </a>
            <a
              href="#"
              className="text-sm  text-blue-600 dark:text-zinc-200 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      

    </>

  )
}

export default Header
