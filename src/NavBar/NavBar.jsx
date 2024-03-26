import React from 'react';
import { useSpring, animated } from 'react-spring';

const NavigationMenu = () => {
  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  const itemProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 500 }
  });

  return (
    <div style={menuStyles}>
      {menuItems.map(item => (
        <animated.div key={item} style={itemProps}>
          <MenuItem>{item}</MenuItem>
        </animated.div>
      ))}
    </div>
  );
};

const MenuItem = ({ children }) => {
  const hoverProps = useSpring({
    to: { scale: 1.1, color: '#FF6347' },
    from: { scale: 1, color: '#000000' }
  });

  return (
    <animated.div style={{ ...menuItemStyles, ...hoverProps }}>
      <div>{children}</div>
    </animated.div>
  );
};

const menuStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px'
};

const menuItemStyles = {
  padding: '10px 20px',
  margin: '5px',
  cursor: 'pointer',
  borderRadius: '5px',
  background: '#ffffff',
  color: '#000000',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  transition: 'background 0.3s ease, color 0.3s ease, transform 0.3s ease'
};

export default NavigationMenu;
