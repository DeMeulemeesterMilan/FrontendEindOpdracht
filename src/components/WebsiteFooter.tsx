import { Link } from 'react-router-dom'

export default () => {
  return (
    <footer>
      <div className="mx-5 flex justify-between gap-4 border-y-2 border-pink p-5 sm:justify-center sm:p-10 md:mx-10 lg:mx-40">
        <Link
          className="py-3 text-center text-lg text-vistaBlue hover:underline focus:underline focus:outline-none sm:mx-7 sm:px-4"
          to="/About-me"
        >
          About me
        </Link>
        <Link
          className="py-3 text-center text-lg text-vistaBlue hover:underline focus:underline focus:outline-none sm:mx-7 sm:px-4"
          to="/Projects"
        >
          Projects
        </Link>
        <Link
          className="py-3 text-center text-lg text-vistaBlue hover:underline focus:underline focus:outline-none sm:mx-7 sm:px-4"
          to="/Contact"
        >
          Contact
        </Link>
      </div>
      <div className="p-5 sm:pb-10 sm:pt-10 md:p-10">
        <p className="text-xs text-customWhite lg:ml-32">
          Copyright © 2024 Milan De Meulemeester.
        </p>
      </div>
    </footer>
  )
}
