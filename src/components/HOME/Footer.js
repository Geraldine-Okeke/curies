import call from './images/call.png'
import mail from './images/email.png'
import fbk from './images/fbk.png'
import link from './images/linkedin.png'
import twit from './images/twit.png'
import ContactForm from './ContactForm'
import { Link } from 'react-router-dom'

export default function Footer(){
  return(
    <>
    <div className="flex flex-col p-4 my-5 bg-blue-800 text-white overflow-visible">
      <h1 className="text-4xl font-bold overflow-visible text-center my-5">CONTACT US</h1>
      <p className='text-center w-1/2 mx-auto'>Connect with us to explore collaborative opportunities, seek research insights, or share your inquiries in the dynamic realms of health and pharmacy research. 
        We're dedicated to advancing knowledge and making impactful contributions. Reach out today.</p>
      <span className='text-center font-semibold'>Faculty of Pharmaceutical Sciences, Agulu, Anambra State.</span>
      <div className="flex flex-col md:flex-row mt-5">
        <div className="w-full md:w-1/2 flex flex-col mt-5 px-2">
          <strong className='text-4xl overflow-visible'>TALK WITH US</strong>
          <hr className='w-1/2 mb-10 mt-2 border border-gray-100 border-b-2'/>
          <div className="flex flex-row my-2">
            <img className='w-5 h-5' src={call} alt='call'/>
            <span>+2349011581000</span>
          </div>
          <div className="flex flex-row">
            <img className='w-5 h-5 mr-2' src={mail} alt='mail'/>
            <span>ii.ejiofor@unizik.edu.ng</span>
          </div>
          <div className='flex flex-row my-4 gap-3'>
            <Link>
              <img className='w-5 h-5' src={fbk} alt='fbk'/>
            </Link>
            <Link>
              <img className='w-5 h-5' src={link} alt='fbk'/>
            </Link>
            <Link>
              <img className='w-5 h-5' src={twit} alt='fbk'/>
            </Link>
          </div>
          <div className='flex flex-col mt-5'>
            <h1 className='font-bold'>Quick Links</h1>
            <Link className='underline' to='/TRAININGS/Training'>
              <span>Trainings</span>
            </Link>
            <Link className='underline' to='/SCHOLARSHIP/Scholarship'>
              <span>Scholarship Updates</span>
            </Link>
            
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col my-5 bg-blue-800">
          <strong  className='text-4xl overflow-visible'>SAY HELLO</strong>
          <hr className='w-1/2 font-bold mb-10  border border-gray-100 border-b-2'/>
          <ContactForm/>
        </div>
      </div>
    </div>
      
    </>
  )
}