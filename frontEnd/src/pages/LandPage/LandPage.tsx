import React, { useState } from "react";
import Lottie from "react-lottie";
import managementData from "../../assets/lotties/management.json";
import Header from "../../components/Header/Header";
import "./LandPage.css";

const LandPage = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: managementData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Header />
      <div className="background_wrapper">
        <div className="lottie_wrapper">
          <Lottie options={lottieOptions} height={300} width={300} />
        </div>
        <div className="about_wrapper">
          <p>
            Hello! This is an Application made with ReactJS and NodeJS with
            TypeScript. <br /> With this Application, you'll be capable to
            handle costumers informations.
          </p>
        </div>
      </div>
    </>
  );
};

export default LandPage;
