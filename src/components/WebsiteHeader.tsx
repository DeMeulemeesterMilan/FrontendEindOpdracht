import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <header>
      <div className="w-auto overflow-hidden bg-vistaBlue">
        <Link
          className="float-left px-4 py-2 text-center text-lg text-gray-900 transition duration-150 ease-out hover:scale-125 hover:ease-in focus:scale-125 focus:outline-none"
          to="/"
        >
          <img
            src={'/LogoMilan.svg'}
            alt="Logo of the portfolio"
            className="w-10"
          />
        </Link>
        <div className="float-right flex justify-center">
          <Link
            className="px-2 py-3 text-center font-medium text-lg text-gray-900  hover:underline focus:underline focus:outline-none sm:px-4"
            to="/About-me"
          >
            About me
          </Link>
          <Link
            className="px-2 py-3 text-center font-medium text-lg text-gray-900  hover:underline focus:underline focus:outline-none sm:px-4"
            to="/Projects"
          >
            Projects
          </Link>
          <Link
            className="px-2 py-3 text-center font-medium text-lg text-gray-900  hover:underline focus:underline focus:outline-none sm:px-4"
            to="/Contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
