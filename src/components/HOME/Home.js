import SecOne from "./SecOne"
import SecTwo from "./SecTwo"
import Header from "./Header"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import NetworkError from "../NetworkError"
export default function Home(){
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
      <SecOne/>
      <SecTwo/>
      <Footer/>
    </>
  )
}