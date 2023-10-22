import Header from "../HOME/Header"
import SecOne from "../ABOUT/SecOne"
import train from './Images/train.png'
import SecTwo from "./SecTwo"
import SecThree from "./SecThree"
import SecFour from "./SecFour"
import Footer from "../HOME/Footer"
import { useState,useEffect } from "react"
import NetworkError from "../NetworkError"
export default function Training(){
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