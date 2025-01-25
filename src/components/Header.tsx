'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  // Function to toggle the theme
  const toggleTheme = () => {
    setDarkMode(!darkMode)

    const root = document.querySelector('html')
    if (root) {
      root.classList.toggle('dark')
      root.classList.toggle('light')
    }
  }

  return (
    <header className="container mx-auto mt-10 h-40 px-6 text-center md:h-20">
      {/* dynamic logo */}
      <div className="left-10 top-10 mx-auto h-20 w-48 bg-logo-light-mode bg-no-repeat dark:bg-logo-dark-mode md:absolute md:mx-0"></div>
      {/* Menu */}
      <div className="right-10 top-12 flex items-center justify-center space-x-4 md:absolute md:space-x-10">
        <Link className="link-hover" href={`#features`}>
          Features
        </Link>
        <Link className="link-hover" href={`#testimonials`}>
          Testimonials
        </Link>

        {/* Dark-Light Mode Button */}
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          {/* <!-- Dark SVG Icon --> */}
          <span className="sr-only">Light/Dark Mode</span>
          {darkMode ? (
            <svg
              id="theme-toggle-dark-icon"
              className=" h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          ) : (
            <svg
              id="theme-toggle-light-icon"
              className=" h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          )}
          {/* <!-- Light SVG Icon --> */}
        </button>
      </div>
    </header>
  )
}
export default Header
