import { Link } from "react-router-dom"
export default function SecTwo(){
  return(
    <>
    <div className="bg-gray-400 flex flex-col md:flex-row px-4 ">
      <div className="w-full  md:w-1/2 mt-10  ">
        <h1 className="text-blue-800 text-4xl font-bold h-auto overflow-visible">OUR MISSION</h1>
        <p className="w-3/4 leading-8 font-semibold ">
          our mission is to pioneer groundbreaking research, foster innovation, and drive positive change.
          We are dedicated to advancing knowledge, pushing boundaries and making a lasting impact in our world. 
          Through collaboration and excellence, we shape a brighter future through research
        </p>
      </div>
      <div className="w-3/4 md:w-1/2 flex flex-col mb-5  text-white font-bold gap-6 mt-10">
        <Link to='/TRAININGS/Training'>
          <button className="bg-red-800 py-6 rounded-full w-full ">TRAININGS</button>
        </Link>
        <Link to='/SCHOLARSHIP/Scholarship'>
          <button className="bg-blue-800 py-6 px-4  rounded-full w-full">SCHOLARSHIP UPDATES</button>
        </Link>
      </div>
    </div>
    
    </>
  )
}