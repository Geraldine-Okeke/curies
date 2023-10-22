import Header from "../HOME/Header"
import Footer from "../HOME/Footer"
import SecOne from "../ABOUT/SecOne"
import bg from './images/bg.png'
import SecTwo from "./SecTwo"
import SecThree from "./SecThree"
import puz from './images/puzzle.png'
import fun from './images/fun.png'
import SecFour from "./SecFour"
import NetworkError from "../NetworkError"
import { useEffect,useState } from "react"
export default function Puzzles(){
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Check the online status and update the state
    setIsOnline(navigator.onLine);
  }, []);

  if (!isOnline) {
    return <NetworkError />; // Display NetworkError component when there is no network
  }
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