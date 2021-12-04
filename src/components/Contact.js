import { FaArrowRight } from 'react-icons/fa'

function Contact() {
  return (
    <div className="max-w-lg w-ful text-center m-auto pt-36 pb-10">
      <h1 className="text-2xl sm:text-4xl">Interested in working together?</h1>
      <a href="mailto:zaka.abahri@gmail.com">
        <span className="mt-6 inline-block w-auto bg-black text-white text-base md:text-xl py-4 px-7 cursor-pointer rounded-lg">
          <div className="flex flex-row items-center">
            <span className="mr-3">Get in touch</span>
            <FaArrowRight color="white" />
          </div>
        </span>
      </a>
    </div>
  )
}

export default Contact
