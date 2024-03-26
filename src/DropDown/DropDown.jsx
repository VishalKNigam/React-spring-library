import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuProps = useSpring({
    opacity: isOpen ? 1 : 0,
    height: isOpen ? 'auto' : 0,
  });

  return (
    <div style={dropdownContainerStyles}>
      <button onClick={toggleMenu} style={toggleButtonStyles}>
        Toggle Menu
      </button>
      <animated.div style={{ ...menuStyles, ...menuProps }}>
        <ul style={listStyles}>
          <li style={listItemStyles}>Option 1</li>
          <li style={listItemStyles}>Option 2</li>
          <li style={listItemStyles}>Option 3</li>
        </ul>
      </animated.div>
    </div>
  );
};

const dropdownContainerStyles = {
  position: 'relative',
  display: 'inline-block',
};

const toggleButtonStyles = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#ffffff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const menuStyles = {
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  backgroundColor: '#ffffff',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
  overflow: 'hidden',
  borderRadius: '5px',
};

const listStyles = {
  margin: 0,
  padding: '10px 0',
  listStyle: 'none',
};

const listItemStyles = {
  padding: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default DropdownMenu;
