import hands from './images/hands.png'
export default function SecOne(){
  return(
    <>
    <div className='w-full z-0  relative mt-16'>
      <img className='w-full auto' src={hands} alt='hands'/> 
      <div className='absolute overflow-visible top-2 md:top-1/4 left-3 md:left-20 flex flex-col  text-start float-left w-full md:w-1/4 gap-8 font-bold text-blue-800'>
        <h1 className='font-bold text-4xl leading-20 overflow-visible'>Unlocking Tomorrow’s Discoveries:</h1>
        <span className='text-lg'>Your trusted research partners</span>
      </div> 
    </div>
      
    </>
  )
}