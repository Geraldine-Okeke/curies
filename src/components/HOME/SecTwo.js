export default function SecTwo(){
  return(
    <>
    <div className="bg-gray-400 flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2 mt-10">
        <h1 className="text-blue-800 text-4xl font-bold">OUR MISSION</h1>
        <p className="w-3/4 leading-8 font-semibold">
          our mission is to pioneer groundbreaking research, foster innovation, and drive positive change.
          We are dedicated to advancing knowledge, pushing boundaries and making a lasting impact in our world. 
          Through collaboration and excellence, we shape a brighter future through research
        </p>
      </div>
      <div className="w-3/4 md:w-1/2 flex flex-col text-white font-bold gap-6 mt-10">
        <button className="bg-red-800 py-6 rounded-full">TRAININGS</button>
        <button className="bg-blue-800 py-6 rounded-full">SCHOLARSHIP UPDATES</button>
      </div>
    </div>
    
    </>
  )
}