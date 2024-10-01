
import React, { useState } from 'react';

import './Blog.css';

import Blog from './Blog';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      
      <Blog />
    </div>
  );
};

export default App;
