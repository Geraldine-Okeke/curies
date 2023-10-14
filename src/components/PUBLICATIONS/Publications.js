import SecOne from "../ABOUT/SecOne";
import bg from './Images/pub.png'
import SecTwo from "./SecTwo";
import Header from "../HOME/Header";
import Footer from "../HOME/Footer";
export default function Publication(){
  return(
    <>
    <Header/>
    <SecOne
        title = 'PUBLICATIONS'
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