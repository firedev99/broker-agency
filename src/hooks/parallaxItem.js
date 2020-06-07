import React, { useLayoutEffect, useState, useRef } from "react";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion";

const calculateMinHeight = (height, range) => {
  return height + height * range;
};
const rand = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
};

const ParallaxItem = ({ className, children }) => {
  const range = 0.3;
  const { scrollY } = useViewportScroll();
  const parallaxContainerRef = useRef(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [minHeight, setMinHeight] = useState("auto");
  const springConfig = {
    damping: 200,
    stiffness: 100,
    mass: rand(1, 6)
  };

  useLayoutEffect(() => {
    if (!parallaxContainerRef.current) {
      return null;
    }
    const onResize = () => {
      setOffsetTop(parallaxContainerRef.current.offsetTop);
      setMinHeight(
        calculateMinHeight(parallaxContainerRef.current.offsetHeight, range)
      );
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [parallaxContainerRef]);

  const y = useSpring(
    useTransform(
      scrollY,
      [offsetTop - 500, offsetTop + 500],
      ["0%", `${range * 100}%`]
    ),
    springConfig
  );

  return (
      <div className={className} style={{minHeight}}>
        <motion.div ref={parallaxContainerRef} initial={{ y: 0 }} style={{ y }}>
        {children}
        </motion.div>
      </div>
  );
};

export default ParallaxItem;
