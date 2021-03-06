import React, { useState } from 'react';
import Header from './Header';
import Work from './Work';
import './App.css';
import Contact from './Contact';

import Navbar from './Navbar';

const App = () => {

  
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
