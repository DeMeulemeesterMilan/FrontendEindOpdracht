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
      <div className="md:mx-38 mx-5 mt-12 flex flex-row items-center justify-center sm:mx-5 sm:mt-24 md:mt-24 lg:mt-48">
        <div className="sm:pr10 pr-5">
          <picture className="h-52 w-52 rounded-md sm:h-72 sm:w-72">
            <source
              media="(min-width: 320px)"
              srcSet="/img/PhotoMilanWithSunset.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 320px)"
              srcSet="/img/PhotoMilanWithSunset.jpg"
              type="image/jpg"
            />

            <img
              className="h-52 w-52 rounded-md sm:h-72 sm:w-72"
              src="/img/PhotoMilanWithSunset.jpg"
              alt="Photo of Milan De Meulemeester with the sunset"
            />
          </picture>
        </div>
        <div className="w-1/2">
          <h1 className="bg-[width:200%] bg-gradient-to-r from-purple to-[#FF98B2] bg-[length:200%] bg-clip-text  text-left text-xl font-bold text-transparent motion-safe:animate-gradiantText sm:text-4xl md:text-5xl">
            I'm Milan De Meulemeester, <br /> a tortoise fanatic and a
            full-stack web developer.
          </h1>
        </div>
      </div>
      <section className="mt-12 w-full sm:mb-0 sm:mt-48">
        <div className="mx-5 mb-12 flex flex-col items-center justify-center sm:mb-24 sm:flex-row md:mx-10 lg:mx-40">
          <div className="sm:w-1/2">
            <h1 className="mb-2 text-left text-xl font-bold text-[#A491D3] sm:text-2xl">
              Passion
            </h1>
            <p className="mb-4 break-normal text-base text-customWhite sm:mb-0">
              Besides coding, I have a huge passion for reptiles, with turtles
              and tortoises in particular. At the moment, I have two Greek
              tortoises and two musk turtles. The passion started actually when
              I was little, we had a couple of yellow-bellied sliders. Those
              unfortunately passed away after a couple of years, but the
              interest in the animals stayed.
            </p>
          </div>
          <div className="sm:pl-10 md:pl-20">
            <picture className="h-52 w-52 rounded-md sm:h-72 sm:w-72">
              <source
                media="(min-width: 320px)"
                srcSet="/img/TortoisesPhoto.webp"
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet="/img/TortoisesPhoto.jpg"
                type="image/jpg"
              />

              <img
                className="h-52 w-52 rounded-md sm:h-72 sm:w-72"
                src="/img/TortoisesPhoto.jpg"
                alt="Photo of my tortoises Speedy and Ronny"
              />
            </picture>
          </div>
        </div>
        <div className="mx-5 mb-12 flex flex-col items-center justify-center sm:mb-24 sm:flex-row-reverse md:mx-10 lg:mx-40">
          <div className="sm:w-1/2">
            <h1 className="mb-2 text-left text-xl font-bold text-[#A491D3] sm:text-2xl">
              Hobbies
            </h1>
            <p className="mb-4 break-normal text-base text-customWhite sm:mb-0">
              When I'm not busy taking care of the animals, I like to play some
              games with my friends. Those games can vary from time to time. At
              one moment, I like to play single-player games rich in story, and
              at another moment, I like to play massively multiplayer games.
              Besides gaming, I like to read manga and learn new things in my
              spare time.
            </p>
          </div>
          <div className="sm:pr-10 md:pr-20">
            <picture className="h-52 w-52 rounded-md sm:h-72 sm:w-72">
              <source
                media="(min-width: 320px)"
                srcSet="/img/HobbiesPhoto.webp"
                type="image/webp"
              />
              <source
                media="(min-width: 320px)"
                srcSet="/img/HobbiesPhoto.jpg"
                type="image/jpg"
              />

              <img
                className="h-52 w-52 rounded-md sm:h-72 sm:w-72"
                src="/img/HobbiesPhoto.jpg"
                alt="Photo of my hobbies gaming and reading manga"
              />
            </picture>
          </div>
        </div>
      </section>
      <WebsiteFooter />
    </div>
  )
}
