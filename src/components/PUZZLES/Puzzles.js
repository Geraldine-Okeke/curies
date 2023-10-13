import Header from "../HOME/Header"
import Footer from "../HOME/Footer"
import SecOne from "../ABOUT/SecOne"
import bg from './images/bg.png'
import SecTwo from "./SecTwo"
import SecThree from "./SecThree"
import puz from './images/puzzle.png'
import fun from './images/fun.png'
import SecFour from "./SecFour"
export default function Puzzles(){
  return(
    <>
      <Header/>
      <SecOne
        title = 'PUZZLES'
        image ={bg}
        showDetails={false}
        marginTop="mt-20"
        imageWidth="w-1/2"
        imageHeight="h-1/2"
      />
      <SecTwo 
        image= {puz}
      />
      <SecThree/>
      <SecTwo
      image ={fun}
      />
      <SecFour/>
      <Footer/>
    </>
  )
}