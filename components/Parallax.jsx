import React, { useMemo, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import EventCard from "./EventCard";
import events from "@app/data/events";

const ParallaxView = () => {
  const { scrollYProgress } = useScroll();
  const divRef = useRef(null);

  const skewValue = useMemo(() => {
    return Math.round(scrollYProgress);
  }, [scrollYProgress]);

  const marqueeVariants = {
    animate: {
      x: ["-150%", "0%"],
      transition: {
        x: {
          duration: "15",
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      },
    },
  };
  return (
    <div
      ref={divRef}
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
        {events.map((event) => {
          return (
            <EventCard
              registration={event.fee}
              key={event.name}
              url={event.link}
              image={event.image}
              name={event.name}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export { ParallaxView };
