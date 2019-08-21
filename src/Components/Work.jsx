import React, { Component } from 'react';
import WorkCards from './WorkCards';
import './Work.css';

class Work extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <div className="work-container" id="work">
          <WorkCards />
        </div>
      </>
     );
  }
}
 
export default Work;