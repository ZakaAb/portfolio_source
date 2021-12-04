import { FaChevronDown } from 'react-icons/fa'
import ScrollIntoView from 'react-scroll-into-view'

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        {' '}
        Hey! 👋
      </p>
      <p className="text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4">
        I'm devOps engineer, passionate about technologies on general, I love
        what I do dailiy basis, Learn and read to anything may concern and more
        ... wait I used to be a developer also so I build a modern sufficient
        software for you.
      </p>

      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500 cursor-pointer" />
        </div>
      </ScrollIntoView>
    </div>
  )
}

export default About
