import React from 'react';
import logo from '../assets/logo-white.svg';

function Footer() {
  return (
    <div className=" w-screen p-4  ml-[0px] bg-white shadow dark:bg-gray-900 bottom-0 sticky m-4 mb-0 ">
      <div className=" max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-8"
              alt="RapidNews Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              RapidNews
            </span>
          </a>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" className="hover:underline mr-4 md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mr-4 md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mr-4 md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{' '}
          <a href="/" className="hover:underline">
            RapidNews™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
