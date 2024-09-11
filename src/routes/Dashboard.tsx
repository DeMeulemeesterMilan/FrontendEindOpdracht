import { Link } from 'react-router-dom'
import '../assets/tailwind.css'
import WebsiteHeader from '../components/WebsiteHeader'
import WebsiteFooter from '../components/WebsiteFooter'

export default () => {
  const handleScroll = () => {
    const sectionId = document.getElementById('aboutme')
    if (sectionId) {
      sectionId.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen  bg-darkPurple">
      <WebsiteHeader />
      <section className="mt-10 flex w-full items-center justify-center sm:h-96 lg:h-screen">
        <div>
          <h1 className="bg-[width:200%] bg-gradient-to-r from-vistaBlue to-pink bg-[length:200%] bg-clip-text text-2xl font-bold text-transparent motion-safe:animate-gradiantText sm:text-4xl lg:text-7xl">
            Hi there,
          </h1>
          <h1 className="bg-[width:200%] bg-gradient-to-r from-vistaBlue to-pink bg-[length:200%] bg-clip-text text-2xl font-bold text-transparent motion-safe:animate-gradiantText sm:text-4xl lg:text-7xl">
            I'm Milan De Meulemeester
          </h1>
          <h1 className="bg-[width:200%] bg-gradient-to-r from-vistaBlue to-pink bg-[length:200%]  bg-clip-text text-2xl font-bold text-transparent motion-safe:animate-gradiantText sm:mb-8 sm:text-4xl lg:text-7xl">
            A full-stack web developer
          </h1>
          <button
            onClick={handleScroll}
            className="invisible rounded bg-pink bg-opacity-80 px-2 py-1 font-bold text-gray-800 hover:bg-vistaBlue sm:visible sm:px-4 sm:py-2"
          >
            Find out more
          </button>
        </div>
      </section>
      <section
        id="aboutme"
        className="mt-2 flex w-full items-center justify-center"
      >
        <div className="md:mx-38 mx-5 mt-12 flex flex-col items-center justify-center sm:mx-5 sm:mt-24 sm:flex-row md:mt-24 lg:mt-32 xl:mt-24">
          <div className="sm:pr10 pr-5">
            <picture className="mb-5 h-52 w-52 rounded-md sm:h-72 sm:w-72">
              <source
                media="(min-width: 320px)"
                srcSet="/img/AboutMePhoto.webp"
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet="/img/AboutMePhoto.jpeg"
                type="image/jpeg"
              />

              <img
                className="mb-5 h-52 w-52 rounded-md sm:h-72 sm:w-72"
                srcSet="/img/AboutMePhoto.jpeg"
                alt="Photo of Milan with dog"
              />
            </picture>
          </div>
          <div className="sm:w-1/2">
            <h1 className="mb-2 text-xl font-bold text-vistaBlue">About me</h1>
            <p className="mb-6 text-left text-customWhite">
              Hi there! I'm a full-stack web developer based in Flanders who
              loves to tinker around with code. When I'm not working on projects
              for school, you can most of the time find me working on personal
              projects.
            </p>
            <Link
              className="rounded bg-pink px-4 py-2 font-bold text-gray-800 opacity-80 hover:bg-vistaBlue"
              to="/About-Me"
            >
              Read more
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-12 w-full sm:mb-0 sm:mt-24 md:mt-48">
        <div className="mb-10 flex h-20 items-center justify-center sm:mb-20">
          <h1 className="text-4xl font-bold text-pink opacity-80 sm:text-5xl">
          Highlighted Project
          </h1>
        </div>
        <div className="mx-5 mb-12 flex flex-col items-center justify-center sm:mb-24 sm:flex-row md:mx-10 lg:mx-40">
          <div className="border-pink pr-10 sm:w-1/2 lg:border-r-2">
            <h1 className="mb-2 text-left text-xl font-bold text-vistaBlue sm:text-2xl">
              Smart Terrarium
            </h1>
            <p className="mb-4 break-normal text-base text-customWhite sm:mb-0">
              Smart Terrarium is a terrarium that I modified with different
              sensors, as well as a heat lamp and a mist spray.All the sensors
              and actuators are linked to a website where you can monitor the
              values and activate and deactivate the actuators. It's an
              individual project I made for my "Project One" for school.
            </p>
          </div>
          <div className="mt-2 sm:mt-0 sm:pl-10 md:pl-20">
            <picture className="h-52 w-52 rounded-md sm:h-72 sm:w-72">
              <source
                media="(min-width: 320px)"
                srcSet="/img/Project_SmartTerrarium.webp"
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet="/img/Project_SmartTerrarium.jpg"
                type="image/jpg"
              />

              <img
                className="h-52 w-52 rounded-md sm:h-72 sm:w-72"
                src="/img/Project_SmartTerrarium.jpg"
                alt="Photo of my Smart Terrarium project"
              />
            </picture>
          </div>
        </div>
      </section>
      <WebsiteFooter />
    </div>
  )
}
