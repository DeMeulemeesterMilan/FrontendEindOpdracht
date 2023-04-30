import { Link } from 'react-router-dom'
import '../assets/tailwind.css'
import { useEffect } from 'react'
import WebsiteHeader from '../components/WebsiteHeader'
import WebsiteFooter from '../components/WebsiteFooter'

export default () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-darkPurple">
      <WebsiteHeader />
      <div className="md:mx-38 mx-5 mb-5 mt-12 flex flex-row items-center justify-center sm:mx-5 sm:mt-24 md:mt-24 lg:mt-48">
        <h1 className="bg-[width:200%] bg-gradient-to-r from-purple to-[#FF98B2] bg-[length:200%] bg-clip-text pb-2  text-left text-4xl font-bold text-transparent motion-safe:animate-gradiantText md:text-5xl lg:text-6xl">
          Projects
        </h1>
      </div>
      <section className="mt-12 w-full sm:mb-0 sm:mt-48">
        <div className="mx-5 mb-12 flex flex-col items-center justify-center sm:mb-24 sm:flex-row md:mx-10 lg:mx-40">
          <div className="sm:w-1/2">
            <h1 className="mb-2 text-left text-xl font-bold text-[#A491D3] sm:text-2xl">
              Smart Terrarium
            </h1>
            <p className="mb-4 break-normal text-base text-customWhite sm:mb-0">
              Smart Terrarium is a terrarium that I modified with different
              sensors, as well as a heat lamp and a mist spray.All the sensors
              and actuators are linked to a website where you can monitor the
              values and activate and deactivate the actuators. It's an
              individual project I made for my "Project One" for school.
            </p>
            <div className="mt-2 hidden gap-1 xl:flex xl:flex-row">
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                html
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                CSS
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                Javascript
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                Socket.io
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                MySQL
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                Python
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                Flask
              </p>
            </div>
          </div>
          <div className="sm:pl-10 md:pl-20">
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
        <div className="mx-5 mb-12 flex flex-col items-center justify-center sm:mb-24 sm:flex-row-reverse md:mx-10 lg:mx-40">
          <div className="sm:w-1/2">
            <h1 className="mb-2 text-left text-xl font-bold text-[#A491D3] sm:text-2xl">
              Team Project - Catch The Fish
            </h1>
            <p className="mb-4 break-normal text-base text-customWhite sm:mb-0">
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
            <div className="mt-2 hidden gap-1 xl:flex xl:flex-row">
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                C#
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                C++
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                MySQL
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                MQTT Broker
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                html
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                css
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                Javascript
              </p>
            </div>
          </div>
          <div className="sm:pr-10 md:pr-20">
            <picture className="h-52 w-52 rounded-md sm:h-72 sm:w-72">
              <source
                media="(min-width: 320px)"
                srcSet="/img/Project_CatchTheFish.webp"
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet="/img/Project_CatchTheFish.jpg"
                type="image/jpg"
              />

              <img
                className="h-52 w-52 rounded-md sm:h-72 sm:w-72"
                src="/img/Project_CatchTheFish.jpg"
                alt="Photo of my Catch The Fish project"
              />
            </picture>
          </div>
        </div>
        <div className="mx-5 mb-12 flex flex-col items-center justify-center sm:mb-24 sm:flex-row md:mx-10 lg:mx-40">
          <div className="sm:w-1/2">
            <h1 className="mb-2 text-left text-xl font-bold text-[#A491D3] sm:text-2xl">
              Random Zoo Animal Generator
            </h1>
            <p className="mb-4 break-normal text-base text-customWhite sm:mb-0">
              The random zoo animal generator is a website where you can get
              different random animals with each press of the button. Besides
              those animals, you will also get some information and a map with
              the country of origin. This website is a project I made
              individually with the use of some micro-interactions and an API.
              Besides that, I kept it as accessible as possible.
            </p>
            <div className="mt-2 hidden gap-1 xl:flex xl:flex-row">
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                html
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                Css
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                Javascript
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                Azure
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                CosmosDB
              </p>
              <p className="rounded bg-pink bg-opacity-60 px-4 py-2 text-sm font-bold text-customBlack">
                custom API
              </p>
            </div>
          </div>
          <div className="sm:pl-10 md:pl-20">
            <picture className="h-52 w-52 rounded-md sm:h-72 sm:w-72">
              <source
                media="(min-width: 320px)"
                srcSet="/img/Project_ZooAnimals.webp"
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet="/img/Project_ZooAnimals.jpg"
                type="image/jpg"
              />

              <img
                className="h-52 w-52 rounded-md sm:h-72 sm:w-72"
                src="/img/Project_ZooAnimals.jpg"
                alt="Photo of my Random Zoo Animal Generator project"
              />
            </picture>
          </div>
        </div>
      </section>
      <WebsiteFooter />
    </div>
  )
}
