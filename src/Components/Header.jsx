import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <div className="header-container" id="header">
          <div className="about about-text">
            <h1>Jenuel Mendez</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam assumenda voluptatem quam, tempore sint excepturi recusandae ullam deleniti voluptates, accusantium suscipit cumque error inventore eveniet quod quae animi, dicta vitae.</p>
          </div>
          <div className="about about-buttons">
            <div className="btn work-btn">Work</div>
            <div className="btn contact-btn">Contact</div>
          </div>
        </div>
      </>
     );
  }
}
 
export default Header;