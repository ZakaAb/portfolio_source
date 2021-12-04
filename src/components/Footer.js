import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <div className="py-5 border-t-3/2 mx-auto">
      <div className="flex justify-center mt-4">
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
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with{' '}
          <span className="mr-2" role="link" aria-label="heart">
            💙
          </span>
          by{' '}
          <a
            className="text-blue-500 hover:underline"
            href="mailto:zaka.abahri@gmail.com"
          >
            Zakaria Abahri
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
