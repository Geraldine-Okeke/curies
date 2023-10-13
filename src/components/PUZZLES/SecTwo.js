export default function SecTwo(props){
  return(
    <>
      <div className='flex flex-col'>
        <div className='bg-white items-center justify-center flex'>
          <img className='w-56 h-56 h-  rounded-full' src={props.image} alt='puzzle'/>
        </div>
        <div></div>
      </div>
    </>
  )
}