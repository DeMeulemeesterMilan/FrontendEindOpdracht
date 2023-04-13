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
        <div className="w-1/2 pl-20">
          <h1 className="text-pink-500">CONTACT</h1>
          <p className="text-left">
            Hi there! I'm a full-stack web developer, who loves to tinker around
            with code. <br /> When I'm not working on projects for school you
            can most of the times find me <br /> working on personal projects.{' '}
          </p>
        </div>
        <div className="mb-10 h-screen w-1/2 ">
          <img
            className="h-screen w-full"
            src="../src/img/AboutMePhoto.jpeg"
            alt="Photo of Milan with dog"
          />
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
