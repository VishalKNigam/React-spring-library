import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalProps = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'scale(1)' : 'scale(0.5)',
  });

  return (
    <>
      <button onClick={openModal} style={openButtonStyles}>Open Modal</button>
      {isOpen && (
        <animated.div style={modalBackdropStyles} onClick={closeModal}>
          <animated.div style={{ ...modalStyles, ...modalProps }}>
            <h2 style={modalHeaderStyles}>Modal Content</h2>
            <p style={modalTextStyles}>This is the modal content. You can add any content you want here.</p>
            <button onClick={closeModal} style={closeButtonStyles}>Close</button>
          </animated.div>
        </animated.div>
      )}
    </>
  );
};

const openButtonStyles = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#ffffff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const modalBackdropStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const modalStyles = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
};

const modalHeaderStyles = {
  fontSize: '24px',
  marginBottom: '10px',
};

const modalTextStyles = {
  marginBottom: '20px',
};

const closeButtonStyles = {
  padding: '10px 20px',
  backgroundColor: '#dc3545',
  color: '#ffffff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Modal;
