import { SiDocker } from 'react-icons/si'

function Skills() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black text-center sm:text-4xl font-bold">
        Tech I use
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiDocker color="#2496ed" className="mx-auto text-6xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Docker
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
