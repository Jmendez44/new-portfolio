import React, { Component } from "react";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";
import { interpolate } from "flubber";
// import { TimingAnimation } from 'react-spring/dist/addons'
import "./Header.css";

class Header extends Component {
  state = { offset: 0 };
  render() {
    // const props = useSpring({
    //   opacity: 1,
    //   from: { opacity: 0 },
    // })
    const { offset } = this.state;

    return (
      <>
        <div className="header-container" id="header">
          {/* <img className="nyc" src={require("../Assets/NYC.jpg")} alt="nyc" /> */}
          <div className="about about-text">
            
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              assumenda voluptatem quam
            </p>
          </div>
          {/* <div className="about about-buttons"> */}
            {/* <canvas id="c" width="800" height="250"/> */}
            {/* <animated.h1 style={props}>hello</animated.h1> */}
            {/* <svg width="500" viewBox="0 0 23 23">
              <g fill="transparent" stroke="white" strokeWidth="0.2">
                <Spring from={{ x: 100 }} to={{ x: 0 }}>
                  {props => (
                    <svg strokeDashoffset={props.x}>
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  )}
                </Spring>
              </g>
            </svg> */}
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default Header;
