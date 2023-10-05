import Header from "../HOME/Header"
import SecOne from "./SecOne"
import curie from './images/curie.png'
import SecTwo from './SecOne'
import cord from './images/cord.png'
import Footer from "../HOME/Footer"
export default function About(){
  return(
    <>
      <Header/>
      <SecOne
        title='ABOUT'
        image ={curie}
        marginTop="mt-20"
        details ={`The Curies Research Team, established in 2020, is a pioneering group of scientists 
        and researchers dedicated to advancing our understanding of various scientific disciplines. 
        Named after the renowned physicist and chemist Marie Curie, the team is committed to pushing
         the knowledge through innovative research, cutting-edge experiments, and collaborative efforts. 
         With a focus on interdisciplinary studies, the Curies Research Team strives to make ground breaking 
         contributions that impact fields such as physics, chemistry, biology, and beyond, while honoring the
          legacy of scientific exploration that Marie Curie exemplified.`}
      />
      <SecTwo
        title='CORDINATOR'
        image={cord}
        marginTop="mt-0"
        details = {`Meet Dr. Innocentmary Ejiofor the visionary founder of Curies Research Team, a dynamic research group dedicated to pushing the boundaries of knowlege. Dr. Ejiofor is not just a leader, he is a respected senior lecturer at Nnamdi Azikiwe University’s esteemed Faculty of Pharmaceutical Sciences.
        His commitment to excellene is evidenced by numerous grant awards and a prolific portfolio of publications that continue to influence and shape the field of Pharmaceutical Sciences. Dr. Ejiofor’s passion for research and education is a driving force behind his mission to inspire the next generation of scholars and innovators.
        
        With an unwavering dedication to academic rigor and track record of success, Dr. Innocentmary Ejiofor is a luminaryin the world of pharmaceutical research and a guiding light for those who seek to explore new horizons in the field. `}

      />
      <Footer/>
    </>
  )
}