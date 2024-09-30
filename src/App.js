
import React, { useState } from 'react';

import './Blogfeed.css';

import Blogfeed from './Blogfeed';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      
      <Blogfeed />
    </div>
  );
};

export default App;
