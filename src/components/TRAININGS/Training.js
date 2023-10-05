import Header from "../HOME/Header"
import SecOne from "../ABOUT/SecOne"
import train from './Images/train.png'
import SecTwo from "./SecTwo"
import SecThree from "./SecThree"
import SecFour from "./SecFour"
import Footer from "../HOME/Footer"
export default function Training(){
  return(
    <>
      <Header/>
      <SecOne
        title = 'TRAININGS'
        image ={train}
        showDetails={false}
        marginTop="mt-20"
        imageWidth="w-1/2"
        imageHeight="h-1/2"
      />
      <SecTwo/>
      <SecThree/>
      <SecFour/>
      <Footer/>
    </>
  )
}