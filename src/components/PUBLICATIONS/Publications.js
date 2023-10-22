import React, { useEffect, useState } from 'react';
import SecOne from "../ABOUT/SecOne";
import bg from './Images/pub.png'
import SecTwo from "./SecTwo";
import Header from "../HOME/Header";
import Footer from "../HOME/Footer";
import NetworkError from '../NetworkError';

export default function Publication() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Check the online status and update the state
    setIsOnline(navigator.onLine);
  }, []);

  return (
    <>
      <Header />
      <SecOne
        title="PUBLICATIONS"
        image={bg}
        showDetails={false}
        marginTop="mt-20"
        imageWidth="w-1/2"
        imageHeight="h-1/2"
      />
      {isOnline ? ( // Check if the user is online
        <>
          <SecTwo />
        </>
      ) : (
        <NetworkError /> // Display NetworkError component when there is no network
      )}
      <Footer />
    </>
  );
}
