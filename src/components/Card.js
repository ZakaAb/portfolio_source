import profile from '../images/profile.png'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl py-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="profile"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900">Zakaria Abahri</p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            DevOps Engineer / React Developer{' '}
          </p>
        </div>
        <div className="flex align-center justify-center mt-4">
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2  text--800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
            href="https://github.com"
          >
            <FaGithub />
            <span className="sr-only">Github</span>
          </a>
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2  text-blue-800 hover:bg-blue-800 rounded-full hover:text-white transition-colors duration-300"
            href="https://github.com"
          >
            <FaLinkedin />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2  text-black-500 hover:bg-green-900 rounded-full hover:text-white transition-colors duration-300"
            href="https://github.com"
          >
            <FaEnvelope />
            <span className="sr-only">Gmail</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
