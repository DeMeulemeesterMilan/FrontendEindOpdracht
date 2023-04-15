import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <div className="w-auto overflow-hidden bg-[#A491D3]">
        <Link
          className="float-left px-4 py-3 text-center text-lg text-gray-700 hover:underline"
          to="/"
        >
          Home
        </Link>
        <Link
          className="float-right px-4 py-3 text-center text-lg text-gray-700 hover:underline focus:underline"
          to="#contact"
        >
          Contact
        </Link>
        <Link
          className="float-right px-4 py-3 text-center text-lg text-gray-700 hover:underline focus:underline"
          to="#projects"
        >
          Projects
        </Link>
        <Link
          className="float-right px-4 py-3 text-center text-lg text-gray-700  hover:underline focus:underline"
          to="#aboutme"
        >
          About me
        </Link>
      </div>
      <section className="flex h-screen w-full items-center justify-center bg-gray-700">
        <div>
          <h1 className="text-7xl font-bold text-pink-500">Hi there,</h1>
          <h1 className="text-7xl font-bold text-pink-500">
            I'm Milan De Meulemeester
          </h1>
          <h1 className="mb-4 text-7xl font-bold text-pink-500">
            A full-stack web developer
          </h1>
          <button className="rounded bg-pink-500 px-4 py-2 font-bold text-white hover:bg-pink-700">
            Find out more
          </button>
        </div>
      </section>
      <section
        id="aboutme"
        className="flex h-screen w-full items-center bg-gray-700"
      >
        <div className="h-screen w-1/2">
          <img
            className="h-screen w-full"
            src="../src/img/AboutMePhoto.jpeg"
            alt="Photo of Milan with dog"
          />
        </div>
        <div className="pl-20">
          <h1 className="text-pink-500">About me</h1>
          <p className="text-left">
            Hi there! I'm a full-stack web developer, who loves to tinker around
            with code. <br /> When I'm not working on projects for school you
            can most of the times find me <br /> working on personal projects.{' '}
          </p>
        </div>
      </section>
      <section
        id="projects"
        className="flex h-screen w-full justify-center bg-gray-700"
      >
        <h1 className="mb-4 mt-4 text-pink-500">projects</h1>
        <div></div>
      </section>
      <section
        id="contact"
        className="flex h-screen w-full items-center bg-gray-700"
      >
        <div className="w-1/2 border-r-2 pl-20">
          <h1 className="text-pink-500">CONTACT</h1>
          <p className="text-left">
            Hi there! I'm a full-stack web developer, who loves to tinker around
            with code. <br /> When I'm not working on projects for school you
            can most of the times find me <br /> working on personal projects.{' '}
          </p>
        </div>
        <div className="w-1/2 pl-20 ">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
            >
              <path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" />
            </svg>
          </div>
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 0 512 512"
              width="48"
            >
              <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 0 512 512"
              width="48"
            >
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
            </svg>
          </div>
        </div>
      </section>
      <footer className="bg-gray-700">
        <div className="mx-40 flex justify-center border-y-2 border-pink-600 p-10">
          <Link
            className="mx-7 px-4 py-3 text-center text-lg text-pink-300 hover:underline focus:underline"
            to="#aboutme"
          >
            About me
          </Link>
          <Link
            className="mx-7 px-4 py-3 text-center text-lg text-pink-300 hover:underline focus:underline"
            to="#projects"
          >
            Projects
          </Link>
          <Link
            className="mx-7 px-4 py-3 text-center text-lg text-pink-300 hover:underline focus:underline"
            to="#contact"
          >
            Contact
          </Link>
        </div>
        <div className="p-10">
          <p className="ml-32 text-xs text-pink-500">
            Copyright © 2023 Milan De Meulemeester All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
