import React, { useMemo, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import EventCard from "./EventCard";

const ParallaxView = () => {
  const { scrollYProgress } = useScroll();

  const skewValue = useMemo(() => {
    return Math.round(scrollYProgress);
  }, [scrollYProgress]);

  const marqueeVariants = {
    animate: {
      x: ["-120px", "40px"],
      transition: {
        x: {
          duration: "8",
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      },
    },
  };
  return (
    <div
      className={`overflow-hidden w-full items-center skew-y-[${skewValue}] flex-nowrap z-[1]`}
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "row",
          whiteSpace: "nowrap",
          columnGap: "25px",
          flexWrap: "nowrap",
          color: "white",
        }}
        animate="animate"
        variants={marqueeVariants}
      >
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </motion.div>
    </div>
  );
};

export { ParallaxView };
