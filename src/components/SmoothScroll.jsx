import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function SmoothScroll({ children }) {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.2 });
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - window.innerHeight);
  });

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);
  return (
    <>
      <div style={{ height: contentHeight }} />

      <motion.div ref={contentRef} style={{ y }} className="scrollBody">
        {children}
      </motion.div>
    </>
  );
}
