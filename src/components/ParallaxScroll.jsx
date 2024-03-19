import { useRef, useState, useEffect } from "react";
import HTML5Logo from "../assets/logos/HTML5_Badge.svg.png";
import CSS3Logo from "../assets/logos/CSS3_logo.svg.png";
import JSLogo from "../assets/logos/js.png";
import ReactLogo from "../assets/logos/logo-react-icon.png";
import NPMLogo from "../assets/logos/npm.png";
import TailwindLogo from "../assets/logos/tailwind.png";
import D3Logo from "../assets/logos/d3-js-icon.png";
import BootstrapLogo from "../assets/logos/bootstrap-logo.png";
import TypescriptLogo from "../assets/logos/typescript-logo.png";
import RailsLogo from "../assets/logos/rails-logo.png";
import NodeLogo from "../assets/logos/nodejs.png";
import GraphQLLogo from "../assets/logos/graphql.png";
import GithubLogo from "../assets/logos/github-logo.png";
import NextLogo from "../assets/logos/nextjs-logo.png";
import SalesforceLogo from "../assets/logos/salesforce.png";
import SassLogo from "../assets/logos/sass.png";
import IonicLogo from "../assets/logos/ionic.png";

import React from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height,
//   };
// }

function ParallaxScroll() {
  // const [windowDimensions, setWindowDimensions] = useState(
  //   getWindowDimensions()
  // );

  const [hookedYPosition, setHookedYPosition] = React.useState(0);

  // const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    // defaults to the window
    // target: ref,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  });

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowDimensions(getWindowDimensions());
  //   }

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const translateDown = (hookedYPosition) => {
    const translatePercentage = hookedYPosition * 3000;
    return {
      transform: `translateY(${translatePercentage}%)`,
    };
  };
  const translateUp = (hookedYPosition) => {
    const translatePercentage = hookedYPosition * 2500;
    return {
      transform: `translateY(-${translatePercentage}%)`,
    };
  };

  const LeftColumn = (
    <>
      <div className="logo-image">
        <img src={JSLogo} alt="" style={translateDown(hookedYPosition)} />
      </div>
      <div className="logo-image">
        <img src={CSS3Logo} alt="" style={translateDown(hookedYPosition)} />
      </div>
      <div className="logo-image">
        <img src={RailsLogo} alt="" style={translateDown(hookedYPosition)} />
      </div>
      <div className="logo-image">
        <img src={ReactLogo} alt="" style={translateDown(hookedYPosition)} />
      </div>

      <div className="logo-image">
        <img src={GithubLogo} alt="" style={translateDown(hookedYPosition)} />
      </div>
    </>
  );

  const MiddleColumn = (
    <>
      <div className="logo-image">
        <img src={NodeLogo} alt="" style={translateUp(hookedYPosition)} />
      </div>
      <div className="logo-image">
        <img src={NextLogo} alt="" style={translateUp(hookedYPosition)} />
      </div>
      <div className="logo-image">
        <img src={IonicLogo} alt="" style={translateUp(hookedYPosition)} />
      </div>
      <div className="logo-image">
        <img src={TailwindLogo} alt="" style={translateUp(hookedYPosition)} />
      </div>{" "}
      <div className="logo-image">
        <img src={BootstrapLogo} alt="" style={translateUp(hookedYPosition)} />
      </div>
    </>
  );

  const RightColumn = (
    <>
      <div className="logo-image">
        <img
          src={TypescriptLogo}
          alt=""
          style={translateDown(hookedYPosition)}
        />
      </div>
      <div className="logo-image">
        <img src={HTML5Logo} alt="" style={translateDown(hookedYPosition)} />
      </div>
      <div className="logo-image">
        <img src={D3Logo} alt="" style={translateDown(hookedYPosition)} />
      </div>
      <div className="logo-image">
        <img src={SassLogo} alt="" style={translateDown(hookedYPosition)} />
      </div>
    </>
  );

  return (
    <div className="animation-scroll">
      <div className="animation-column outer">
        {LeftColumn}
        {LeftColumn}
        {LeftColumn}
      </div>
      <div className="animation-column inner">
        {MiddleColumn}
        {MiddleColumn}
        {MiddleColumn}
      </div>
      <div className="animation-column outer">
        {RightColumn}
        {RightColumn}
        {RightColumn}
      </div>
    </div>
  );
}

export default ParallaxScroll;
