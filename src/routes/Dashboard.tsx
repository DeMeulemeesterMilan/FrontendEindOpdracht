import { Link } from 'react-router-dom'
import '../assets/tailwind.css'

export default () => {
  const handleScroll = () => {
    const sectionId = document.getElementById('aboutme')
    if (sectionId) {
      sectionId.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-gray-700">
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
            to="/About-me"
          >
            About me
          </Link>
          <Link
            className="px-2 py-3 text-center text-lg text-gray-900  hover:underline focus:underline focus:outline-none sm:px-4"
            to="/Projects"
          >
            Projects
          </Link>
          <Link
            className="px-2 py-3 text-center text-lg text-gray-900  hover:underline focus:underline focus:outline-none sm:px-4"
            to="/Contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <section className="mt-10 flex w-full items-center justify-center sm:h-96 lg:h-screen">
        <div>
          <h1 className="bg-[width:200%] bg-gradient-to-r from-purple to-[#FF98B2]  bg-[length:200%] bg-clip-text text-2xl font-bold text-transparent motion-safe:animate-gradiantText sm:text-4xl lg:text-7xl">
            Hi there,
          </h1>
          <h1 className="bg-[width:200%] bg-gradient-to-r from-purple to-[#FF98B2]  bg-[length:200%] bg-clip-text text-2xl font-bold text-transparent motion-safe:animate-gradiantText sm:text-4xl lg:text-7xl">
            I'm Milan De Meulemeester
          </h1>
          <h1 className="bg-[width:200%] mb-8 bg-gradient-to-r from-purple to-[#FF98B2]  bg-[length:200%] bg-clip-text text-2xl font-bold text-transparent motion-safe:animate-gradiantText sm:text-4xl lg:text-7xl">
            A full-stack web developer
          </h1>
          <button
            onClick={handleScroll}
            className="invisible rounded bg-blue px-2 py-1 font-bold text-gray-800 hover:bg-[#A491D3] sm:visible sm:px-4 sm:py-2"
          >
            Find out more
          </button>
        </div>
      </section>
      <section
        id="aboutme"
        className="mt-2 flex w-full items-center justify-center"
      >
        <div className="md:mx-38 mx-5 mt-12 flex flex-col items-center justify-center sm:mx-5 sm:mt-24 sm:flex-row md:mt-24 lg:mt-48">
          <div className="sm:pr10 pr-5">
            <img
              className="mb-5 h-52 w-52 rounded-md sm:h-72 sm:w-72"
              src="/img/AboutMePhoto.jpeg"
              alt="Photo of Milan with dog"
            />
          </div>
          <div className="sm:w-1/2">
            <h1 className="mb-2 text-xl font-bold text-[#A491D3]">About me</h1>
            <p className="mb-6 text-left text-white">
              Hi there! I'm a full-stack web developer based in Flanders who
              loves to tinker around with code. When I'm not working on projects
              for school, you can most of the time find me working on personal
              projects.
            </p>
            <button className="rounded bg-blue px-4 py-2 font-bold text-gray-800 hover:bg-[#A491D3]">
              <Link to="/About-Me">Read more</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="mt-12 w-full sm:mb-0 sm:mt-24 md:mt-48">
        <div className="mb-10 flex h-20 items-center justify-center sm:mb-20">
          <h1 className="text-4xl font-bold text-blue sm:text-5xl">
            Featured projects
          </h1>
        </div>
        <div className="mx-5 mb-12 flex flex-col items-center justify-center sm:mb-24 sm:flex-row md:mx-10 lg:mx-40">
          <div className="border-blue pr-10 sm:w-1/2 lg:border-r-2">
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
          <div className="mt-2 sm:mt-0 sm:pl-10 md:pl-20">
            <img
              className="h-52 w-52 rounded-md sm:h-72 sm:w-72"
              src="/img/Project_SmartTerrarium.jpg"
              alt="Photo of my Smart Terrarium project"
            />
          </div>
        </div>
        <div className="mx-5 mb-12 flex flex-col items-center justify-center sm:mb-24 sm:flex-row-reverse md:mx-10 lg:mx-40">
          <div className="border-blue sm:w-1/2 sm:pl-5 md:pl-5 lg:border-l-2 lg:pl-10">
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
          <div className="mt-2 sm:mt-0 sm:pr-10 lg:pr-20">
            <img
              className="h-52 w-52 rounded-md sm:h-72 sm:w-72"
              src="/img/Project_CatchTheFish.jpg"
              alt="Photo of my Catch The Fish project"
            />
          </div>
        </div>
        <div className="mx-5 mb-12 flex flex-col items-center justify-center sm:mb-24 sm:flex-row md:mx-10 lg:mx-40">
          <div className="border-blue pr-10 sm:w-1/2 lg:border-r-2">
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
          <div className="mt-2 sm:mt-0 sm:pl-10 md:pl-20">
            <img
              className="h-52 w-52 rounded-md sm:h-72 sm:w-72"
              src="/img/Project_ZooAnimals.jpg"
              alt="Photo of my Random Zoo Animal Generator project"
            />
          </div>
        </div>
      </section>
      <footer>
        <div className="mx-5 flex justify-between gap-4 border-y-2 border-blue p-10 sm:justify-center md:mx-10 lg:mx-40">
          <Link
            className="py-3 text-center text-lg text-[#A491D3] hover:underline focus:underline focus:outline-none sm:mx-7 sm:px-4"
            to="/About-me"
          >
            About me
          </Link>
          <Link
            className="py-3 text-center text-lg text-[#A491D3] hover:underline focus:underline focus:outline-none sm:mx-7 sm:px-4"
            to="/Projects"
          >
            Projects
          </Link>
          <Link
            className="py-3 text-center text-lg text-[#A491D3] hover:underline focus:underline focus:outline-none sm:mx-7 sm:px-4"
            to="/Contact"
          >
            Contact
          </Link>
        </div>
        <div className="p-5 sm:pb-10 sm:pt-10 md:p-10">
          <p className="text-xs text-white lg:ml-32">
            Copyright © 2023 Milan De Meulemeester All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
