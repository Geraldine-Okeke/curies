import Header from "../HOME/Header"
import SecOne from "../ABOUT/SecOne"
import bg from './images/bg.png'
import SecTwo from "./SecTwo"
import Footer from "../HOME/Footer"
export default function Scholarship(){
  return(
    <>
    <Header/>
    <SecOne
        title = 'SCHOLARSHIP UPDATES'
        image ={bg}
        showDetails={false}
        marginTop="mt-20"
        imageWidth="w-1/2"
        imageHeight="h-1/2"
      />
      <SecTwo/>
      <Footer/>
    </>
  )
}