import React, { useState } from "react";
import vidBg from "../assets/Esportmanager.com _ Where real action takes place.mp4";


import CsInfo from "./CsInfo"




const Main = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log("first modl")
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false)
    console.log("close first modl")
  };
  return (
    <>
      <div className="overlay"></div>
      <div className="main">
        <video
          src={vidBg}
          autoPlay
          loop
          muted
          className="bg-cover bg-center"
        ></video>
      </div>
      <div className="container">
        <div className="card card1">
          <div className="title-btn">
            <h2>League Of Legends</h2>
            <button>View tournament</button>
          </div>

          <p>
            Join monthly tournaments and compete against same level players for
            a variety prices.
          </p>
        </div>
        <div className="card card2">
          <div className="title-btn">
            <h2>CS:GO</h2>
            <button onClick={openModal}>View & Register</button>
          </div>
          <p>
            Join monthly toursnaments and compete against same level players for
            a variety prices.
          </p>
          <CsInfo isOpen={isOpen} closeModal={closeModal} />
        </div>
      </div>
     
    </>
  ) ;
};

export default Main;