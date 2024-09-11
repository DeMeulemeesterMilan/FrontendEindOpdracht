import { Link } from 'react-router-dom'
import '../assets/tailwind.css'
import WebsiteHeader from '../components/WebsiteHeader'
import WebsiteFooter from '../components/WebsiteFooter'

export default () => {
  return (
    <div className="min-h-screen  bg-darkPurple">
      <WebsiteHeader />
      <section className="mt-10 flex w-full items-center justify-center sm:h-96 lg:h-screen lg:mt-0">
        <div>
          <h1 className="bg-[width:200%] bg-gradient-to-r from-vistaBlue to-pink bg-[length:200%] bg-clip-text text-2xl font-bold text-transparent motion-safe:animate-gradiantText sm:text-4xl lg:text-7xl">
            Hi there,
          </h1>
          <h1 className="bg-[width:200%] bg-gradient-to-r from-vistaBlue to-pink bg-[length:200%] bg-clip-text text-2xl font-bold text-transparent motion-safe:animate-gradiantText sm:text-4xl lg:text-7xl">
            I'm Milan De Meulemeester
          </h1>
          <h1 className="bg-[width:200%] bg-gradient-to-r from-vistaBlue to-pink bg-[length:200%]  bg-clip-text text-2xl font-bold text-transparent motion-safe:animate-gradiantText sm:mb-8 sm:text-4xl lg:text-7xl xl:mb-4">
            A full-stack web developer
          </h1>
          <div className="flex gap-3 mb-4">
          <Link
            className='hover:scale-125'
            to="mailto:contact@milandm.me"
            target="_blank"
          >
            <svg
              fill="#A491D3"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
            >
              <path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" />
            </svg>
          </Link>
          <Link
            className=' hover:scale-125'
            to="https://www.linkedin.com/in/milan-de-meulemeester-42a7b2272/"
            target="_blank"
          >
            <svg
              fill="#A491D3"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 0 512 512"
              width="48"
            >
              <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
            </svg>
          </Link>
          <Link
            className=' hover:scale-125'
            to="https://github.com/DeMeulemeesterMilan"
            target="_blank"
          >
            <svg
              fill="#A491D3"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 0 512 512"
              width="48"
            >
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
            </svg>
          </Link>
        </div>
          <a download className='rounded flex w-36 justify-center bg-pink bg-opacity-80 px-2 py-1 hover:bg-vistaBlue sm:visible sm:px-4 sm:py-2' href="/Milan_De-Meulemeester_cv.pdf"><p className='font-bold text-gray-800'>
            Download cv</p></a>
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
                srcSet="/img/Milan_DeMeulemeester_Photo.webp"
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet="/img/Milan_DeMeulemeester_Photo.jpeg"
                type="image/jpeg"
              />

              <img
                className="mb-5 h-52 w-52 rounded-md sm:h-72 sm:w-72"
                srcSet="/img/Milan_DeMeulemeester_Photo.jpeg"
                alt="Photo of Milan with dog"
              />
            </picture>
          </div>
          <div className="sm:w-1/2">
            <h1 className="mb-2 text-xl font-bold text-vistaBlue">About me</h1>
            <p className="mb-6 text-left text-customWhite">
              Hi there! I'm a full-stack web developer based in Flanders who
              loves to tinker around with code. I recently finished school and got my bachelors degree as a Next Web Developer. You can most of the time find me working on personal
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
