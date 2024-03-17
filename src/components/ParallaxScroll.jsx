import { useRef, useState, useEffect } from "react";
import HTML5Logo from "../assets/logos/HTML5_Badge.svg.png";
import CSS3Logo from "../assets/logos/CSS3_logo.svg.png";
import JSLogo from "../assets/logos/js.png";
import { useScroll, animated, useSpring } from "@react-spring/web";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function ParallaxScroll() {
  const containerRef = useRef();
  const [scrollProgress, setScrollProgress] = useState();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log({ windowDimensions });

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setScrollProgress(scrollYProgress);
    },
    default: {
      immediate: true,
    },
  });

  const translateDown = (scrollProgress) => {
    const translatePercentage = scrollProgress * 10000;
    return {
      transform: `translateY(${translatePercentage}%)`,
    };
  };
  const translateUp = (scrollProgress) => {
    const translatePercentage = scrollProgress * 12000;
    return {
      transform: `translateY(-${translatePercentage}%)`,
    };
  };

  const LeftColumn = (
    <>
      <img src={JSLogo} alt="" style={translateDown(scrollProgress)} />
      <div></div>
      <img src={CSS3Logo} alt="" style={translateDown(scrollProgress)} />
      <div></div>
    </>
  );

  const MiddleColumn = (
    <>
      <div></div>
      <img src={JSLogo} alt="" style={translateUp(scrollProgress)} />
      <div></div>
      <img src={CSS3Logo} alt="" style={translateUp(scrollProgress)} />
      <div></div>
      <img src={HTML5Logo} alt="" style={translateUp(scrollProgress)} />
      <div></div>
    </>
  );

  const RightColumn = (
    <>
      <div></div>
      <img src={CSS3Logo} alt="" style={translateDown(scrollProgress)} />
      <div></div>
      <img src={HTML5Logo} alt="" style={translateDown(scrollProgress)} />
      <div></div>
      <img src={JSLogo} alt="" style={translateDown(scrollProgress)} />
    </>
  );

  return (
    <div ref={containerRef} className="animation-scroll">
      <div className="animation-column outer">
        {LeftColumn}
        {LeftColumn}
        {LeftColumn}
        {LeftColumn}
        {LeftColumn}
      </div>
      <div className="animation-column inner">
        {MiddleColumn}
        {MiddleColumn}
        {MiddleColumn}
        {MiddleColumn}
        {MiddleColumn}
      </div>
      <div className="animation-column outer">
        {RightColumn}
        {RightColumn}
        {RightColumn}
        {RightColumn}
        {RightColumn}
      </div>
    </div>
  );
}

export default ParallaxScroll;
