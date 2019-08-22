import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const GriipeDescription = ({ isOpen, descOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100
  });
  return (
    <div
      className="desc"
      style={{
        pointerEvents: isOpen ? "all" : "none"
      }}
    >
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`)
        }}
        className="desc-left"
      />
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`)
        }}
        className="desc-right"
      >
        <div className="close">
          <h1 onClick={() => descOpen(!isOpen)}>X</h1>
        </div>
      </animated.div>
    </div>
  );
};

export default GriipeDescription;
