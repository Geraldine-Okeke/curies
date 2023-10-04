import hands from './images/hands.png'
export default function SecOne(){
  return(
    <>
    <div className='w-full  relative mt-16'>
      <img className='w-full auto' src={hands} alt='hands'/> 
      <div className='absolute top-1/4 left-20 flex flex-col brightness-200 w-1/4 gap-8 font-bold text-blue-800'>
        <h1 className='font-bold text-4xl leading-20'>Unlocking Tomorrow’s Discoveries:</h1>
        <span className='text-lg'>Your trusted research partners</span>
      </div> 
    </div>
      
    </>
  )
}