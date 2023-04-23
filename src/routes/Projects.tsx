import { Link } from 'react-router-dom'
import '../assets/tailwind.css'
import { useEffect } from 'react'

export default () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="w-full bg-gray-700">
      <div className="w-auto overflow-hidden bg-[#A491D3]">
        <Link
          className=" float-left px-4 py-3 text-center text-lg text-gray-900 hover:underline"
          to="/"
        >
          Home
        </Link>
        <div className="float-right flex justify-center">
          <Link
            className="px-2 py-3 text-center text-lg text-gray-900  hover:underline focus:underline focus:outline-none sm:px-4"
            to="./About-me"
          >
            About me
          </Link>
          <Link
            className="px-2 py-3 text-center text-lg text-gray-900  hover:underline focus:underline focus:outline-none sm:px-4"
            to="#projects"
          >
            Projects
          </Link>
          <Link
            className="px-2 py-3 text-center text-lg text-gray-900  hover:underline focus:underline focus:outline-none sm:px-4"
            to="#contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="md:mx-38 mx-5 mt-12 flex flex-row items-center justify-center sm:mx-5 sm:mt-24 md:mt-24 lg:mt-48">
        <div className="sm:pr10 pr-5">
          <img
            className="h-52 w-52 rounded-md sm:h-72 sm:w-72"
            src="../src/img/PhotoMilanWithSunset.jpg"
            alt="Photo of Milan De Meulemeester with the sunset"
          />
        </div>
        <div className="w-1/2">
          <h1 className="bg-[width:200%] bg-gradient-to-r from-purple to-[#FF98B2] bg-[length:200%] bg-clip-text  text-left text-xl font-bold text-transparent motion-safe:animate-gradiantText sm:text-4xl md:text-5xl">
            Projects
          </h1>
        </div>
      </div>
      <section className="mt-12 w-full sm:mb-0 sm:mt-48">
        <div className="mx-5 mb-12 flex flex-col items-center justify-center sm:mb-24 sm:flex-row md:mx-10 lg:mx-40">
          <div className="sm:w-1/2">
            <h1 className="mb-2 text-left text-xl font-bold text-[#A491D3] sm:text-2xl">
              Smart Terrarium
            </h1>
            <p className="mb-4 break-normal text-base text-white sm:mb-0">
              Smart Terrarium is a terrarium that I modified with different
              sensors, as well as a heat lamp and a mist spray.All the sensors
              and actuators are linked to a website where you can monitor the
              values and activate and deactivate the actuators. It's an
              individual project I made for my "Project One" for school.
            </p>
          </div>
          <div className="sm:pl-10 md:pl-20">
            <img
              className="h-52 w-52 rounded-md sm:h-72 sm:w-72"
              src="../src/img/Project_SmartTerrarium.jpg"
              alt="Photo of my Smart Terrarium project"
            />
          </div>
        </div>
        <div className="mx-5 mb-12 flex flex-col items-center justify-center sm:mb-24 sm:flex-row-reverse md:mx-10 lg:mx-40">
          <div className="sm:w-1/2">
            <h1 className="mb-2 text-left text-xl font-bold text-[#A491D3] sm:text-2xl">
              Team Project - Catch The Fish
            </h1>
            <p className="mb-4 break-normal text-base text-white sm:mb-0">
              Catch The Fish is a game console where you can play three games.
              The games are Zen, Simon Says, and Red vs. Blue. In the game Zen,
              you need to hit the light up button as quickly as possible. In
              Simon Says, you have to repeat the sequence for as long as
              possible. Red vs. Blue is a team battle where the two teams need
              to collect as as many points as possible in one minute. In this
              project, I helped a lot with the design; besides that, I did a
              part of the backend and frontend and helped build the hardware and
              housing.
            </p>
          </div>
          <div className="sm:pr-10 md:pr-20">
            <img
              className="h-52 w-52 rounded-md sm:h-72 sm:w-72"
              src="../src/img/Project_CatchTheFish.jpg"
              alt="Photo of my Catch The Fish project"
            />
          </div>
        </div>
        <div className="mx-5 mb-12 flex flex-col items-center justify-center sm:mb-24 sm:flex-row md:mx-10 lg:mx-40">
          <div className="sm:w-1/2">
            <h1 className="mb-2 text-left text-xl font-bold text-[#A491D3] sm:text-2xl">
              Random Zoo Animal Generator
            </h1>
            <p className="mb-4 break-normal text-base text-white sm:mb-0">
              The random zoo animal generator is a website where you can get
              different random animals with each press of the button. Besides
              those animals, you will also get some information and a map with
              the country of origin. This website is a project I made
              individually with the use of some micro-interactions and an API.
              Besides that, I kept it as accessible as possible.
            </p>
          </div>
          <div className="sm:pl-10 md:pl-20">
            <img
              className="h-52 w-52 rounded-md sm:h-72 sm:w-72"
              src="../src/img/Project_ZooAnimals.jpg"
              alt="Photo of my Random Zoo Animal Generator project"
            />
          </div>
        </div>
      </section>
      <footer>
        <div className="mx-5 flex justify-between gap-4 border-y-2 border-blue p-10 sm:justify-center md:mx-10 lg:mx-40">
          <Link
            className="py-3 text-center text-lg text-[#A491D3] hover:underline focus:underline focus:outline-none sm:mx-7 sm:px-4"
            to="#aboutme"
          >
            About me
          </Link>
          <Link
            className="py-3 text-center text-lg text-[#A491D3] hover:underline focus:underline focus:outline-none sm:mx-7 sm:px-4"
            to="#projects"
          >
            Projects
          </Link>
          <Link
            className="py-3 text-center text-lg text-[#A491D3] hover:underline focus:underline focus:outline-none sm:mx-7 sm:px-4"
            to="#contact"
          >
            Contact
          </Link>
        </div>
        <div className="p-5 sm:pb-10 sm:pt-10 md:p-10">
          <p className="text-xs text-white sm:ml-5 md:ml-2 lg:ml-32">
            Copyright © 2023 Milan De Meulemeester All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
