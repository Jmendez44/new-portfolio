import React, { Component, useState } from "react";
import { useSpring, animated } from 'react-spring';
import GriipeDescription from "./CardDescription";

const Cards = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [random] = useState('random')
  console.log(random)


  return (
    <>

    
      <GriipeDescription isOpen={isNavOpen} descOpen={setNavOpen}/>

      <div onClick={() => setNavOpen(!isNavOpen)} className="work-cards griipe">
        <img src={require("../Assets/GRIIPE.png")} className="proj-img" />
        <div className="card-split" />
      </div>
      <div onClick={() => setNavOpen(!isNavOpen)} className="work-cards isrs">
        <img src={require("../Assets/ISRS.png")} className="proj-img" />
        <div className="card-split" />
      </div>
      <div onClick={() => setNavOpen(!isNavOpen)} className="work-cards cgol">
        <img src={require("../Assets/cgol.png")} className="proj-img" />
        <div className="card-split" />
      </div>
      <div onClick={() => setNavOpen(!isNavOpen)} className="work-cards">
        <div className="proj-img" />
        <div className="card-split" />
      </div>
    </>
  );
};

export default Cards;
