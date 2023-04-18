import { Link } from 'react-router-dom'
import '../assets/tailwind.css'

export default () => {
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
            className="px-4 py-3 text-center text-lg  text-gray-900 hover:underline focus:underline focus:outline-none"
            to="#aboutme"
          >
            About me
          </Link>
          <Link
            className="px-4 py-3 text-center text-lg text-gray-900 hover:underline focus:underline focus:outline-none"
            to="#projects"
          >
            Projects
          </Link>
          <Link
            className="px-4 py-3 text-center text-lg text-gray-900 hover:underline focus:underline focus:outline-none"
            to="#contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <section className="flex h-screen w-full items-center justify-center">
        <div>
          <h1 className="text-7xl font-bold text-[#A491D3]">Hi there,</h1>
          <h1 className="text-7xl font-bold text-[#A491D3]">
            I'm Milan De Meulemeester
          </h1>
          <h1 className="mb-4 text-7xl font-bold text-[#A491D3]">
            A full-stack web developer
          </h1>
          <button className="rounded bg-[#48A9A6] px-4 py-2 font-bold text-gray-800 hover:bg-[#A491D3]">
            Find out more
          </button>
        </div>
      </section>
      <section id="aboutme" className="flex h-screen w-full items-center">
        <div className="h-screen w-1/2">
          <img
            className="h-screen w-full object-center"
            src="../src/img/AboutMePhoto.jpeg"
            alt="Photo of Milan with dog"
          />
        </div>
        <div className="w-1/2 pl-20 pr-20">
          <h1 className="mb-2 text-xl font-bold text-[#A491D3]">About me</h1>
          <p className="text-left text-white">
            Hi there! I'm a full-stack web developer who loves to tinker around
            with code. When I'm not working on projects for school, you can most
            of the time find me working on personal projects.
          </p>
          <p className="pt-2 text-white">
            extra tiep werkt zodat ik het kan testen hoe ver de boundires deftig
            staan en hoeveel ik zou willen toepen om het er deftig uit te laten
            zien.
          </p>
          <p className="pt-2 text-white">
            Dit is nog wat meer typ werk zodat ik kan blijven typen om te zien
            hoe ver ik kan geraken todat het er niet mooi meer utiziet maar dat
            kan nog efkes blijven duren want ik kan heeeeeeele veeeeel typen dat
            is zo eeeeen heeel leeeuk werkje?
          </p>
          <p className="pt-2 text-white">
            Dit is een onderdeel dat ik ook gewoon weer aan het voltypen ben om
            te zien tot hoever ik kan gaan tot ik dit beu gezien ben hahaahahah
            Want uiteindelijk moet ik dit ook echt gaan vullen met echte tekst
            dat wordt nog een moeilijke opdracht vindt ik zelf toch echt wel.
          </p>
          <p className="pt-2 text-white">
            Dit is nog een onderdeeltje dat ik eens ga voltypen om te kijken hoe
            het er uiteindelijk zal uitzien of dit deftig gaat zijn of niet weet
            ik dus ook totaal niet maar beter is dat een moeilijkheidsgraad die
            ik overkom want anders kom ik ook niet verder.
          </p>
        </div>
      </section>
      <section id="projects" className="mb-72 mt-20 h-screen w-full">
        <div className="mb-20 flex h-20 items-center justify-center bg-white">
          <h1 className="text-3xl font-bold text-gray-700">projects</h1>
        </div>
        <div className="mx-40 mb-24 flex flex-row items-center justify-center">
          <div className="w-1/2 border-r-2 border-[#48A9A6] pr-10">
            <h1 className="mb-2 text-left text-2xl font-bold text-[#A491D3]">
              Smart Terrarium
            </h1>
            <p className="text-base text-white">
              Smart Terrarium is a terrarium that I modified with different
              sensors and to which I added a heat lamp and a mist spray. All the
              sensors and actuators are linked to a website where you can
              monitor the values and activate and deactivate the actuators. It's
              a project I made for my "Project One" for school.
            </p>
          </div>
          <div className="w-1/2 pl-20">
            <img
              height="300"
              width="300"
              src="../src/img/Project_SmartTerrarium.jpg"
              alt="Photo of my Smart Terrarium project"
            />
          </div>
        </div>
        <div className="mx-40 mb-24 flex flex-row items-center justify-center">
          <div className="w-1/2 pl-56 pr-20">
            <img
              height="300"
              width="300"
              src="../src/img/Project_CatchTheFish.jpg"
              alt="Photo of my Catch The Fish project"
            />
          </div>
          <div className="w-1/2 border-l-2 border-[#48A9A6] pl-20">
            <h1 className="mb-2 text-left text-2xl font-bold text-[#A491D3]">
              Team Project - Catch The Fish
            </h1>
            <p className="text-white">
              ik ben hier nog mee bezig ik weet nog niet welke tekst ik hier wil
              gaan zetten omdat dit heel moeilijk typen is vindt je niet? Dit is
              dus een project kheb kik da keer zomaar gemaakt want kwerdt
              gedwongen. Want als ik het niet maakte kreeg ik slechte punten
              waardoor ik dan poepeklets ging krijgen en dat willen we allemaal
              niet. Deze tekst kan eindeloos blijven doorgaan totdat ik totaal
              geen ideeën meer heb.
            </p>
          </div>
        </div>
        <div className="mx-40 mb-24 flex flex-row items-center justify-center">
          <div className="w-1/2 border-r-2 border-[#48A9A6] pr-10">
            <h1 className="mb-2 text-left text-2xl font-bold text-[#A491D3]">
              Random Zoo Animal Generator
            </h1>
            <p className="text-white">
              ik ben hier nog mee bezig ik weet nog niet welke tekst ik hier wil
              gaan zetten omdat dit heel moeilijk typen is vindt je niet? Dit is
              dus een project kheb kik da keer zomaar gemaakt want kwerdt
              gedwongen. Want als ik het niet maakte kreeg ik slechte punten
              waardoor ik dan poepeklets ging krijgen en dat willen we allemaal
              niet. Deze tekst kan eindeloos blijven doorgaan totdat ik totaal
              geen ideeën meer heb.
            </p>
          </div>
          <div className="w-1/2 pl-20">
            <img
              height="300"
              width="400"
              src="../src/img/Project_RandomZooAnimal.png"
              alt="Photo of my Random Zoo Animal Generator project"
            />
          </div>
        </div>
        <div className="mt-20 h-20  bg-white"></div>
      </section>
      <section
        id="contact"
        className="flex h-screen w-full items-center justify-center pt-20"
      >
        <div className="ml-40 w-1/2 border-r-2 border-[#48A9A6] pl-20">
          <h1 className="mb-2 text-xl text-[#A491D3]">CONTACT</h1>
          <h2 className="mb-4 text-lg text-white ">
            Thank you for viewing my portfolio. <br />I really hope you've
            enjoyed looking at my work!
          </h2>
          <p className="text-white">
            If you have any questions or remarks, please don't hesitate to send
            a message.
          </p>
        </div>
        <div className="mr-40 w-1/2 pl-20 ">
          <div className="mb-4 flex items-center">
            <svg
              fill="#A491D3"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
            >
              <path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" />
            </svg>
            <p className="ml-2 text-2xl text-white">Email</p>
          </div>
          <div className="mb-4 flex items-center">
            <svg
              fill="#A491D3"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 0 512 512"
              width="48"
            >
              <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
            </svg>
            <p className="ml-2 text-2xl text-white">LinkedIn</p>
          </div>
          <div className="flex items-center">
            <svg
              fill="#A491D3"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 0 512 512"
              width="48"
            >
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
            </svg>
            <p className="ml-2 text-2xl text-white">GitHub</p>
          </div>
        </div>
      </section>
      <footer>
        <div className="mx-40 flex justify-center border-y-2 border-[#48A9A6] p-10">
          <Link
            className="mx-7 px-4 py-3 text-center text-lg text-[#A491D3] hover:underline focus:underline focus:outline-none"
            to="#aboutme"
          >
            About me
          </Link>
          <Link
            className="mx-7 px-4 py-3 text-center text-lg text-[#A491D3] hover:underline focus:underline focus:outline-none"
            to="#projects"
          >
            Projects
          </Link>
          <Link
            className="mx-7 px-4 py-3 text-center text-lg text-[#A491D3] hover:underline focus:underline focus:outline-none"
            to="#contact"
          >
            Contact
          </Link>
        </div>
        <div className="p-10">
          <p className="ml-32 text-xs text-white">
            Copyright © 2023 Milan De Meulemeester All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
