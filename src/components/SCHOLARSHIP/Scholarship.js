import Header from "../HOME/Header"
import SecOne from "../ABOUT/SecOne"
import bg from './images/bg.png'
import SecTwo from "./SecTwo"
import Footer from "../HOME/Footer"
import { useEffect,useState } from "react"
import NetworkError from "../NetworkError"
export default function Scholarship(){
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