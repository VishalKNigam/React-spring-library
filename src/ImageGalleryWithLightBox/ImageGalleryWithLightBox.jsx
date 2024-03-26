import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ImageGallery = ({ images }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  const lightboxProps = useSpring({
    opacity: showLightbox ? 1 : 0,
    scale: showLightbox ? 1 : 0,
    config: { duration: 300 }
  });

  return (
    <div style={galleryContainerStyles}>
      <div style={galleryStyles}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            style={imageStyles}
            onClick={() => openLightbox(image)}
          />
        ))}
      </div>
      {showLightbox && (
        <animated.div style={{ ...lightboxStyles, ...lightboxProps }}>
          <img
            src={selectedImage}
            alt="Selected Image"
            style={lightboxImageStyles}
          />
          <button onClick={closeLightbox} style={closeButtonStyles}>Close</button>
        </animated.div>
      )}
    </div>
  );
};

const galleryContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: '20px'
};

const galleryStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const imageStyles = {
  width: '200px',
  height: '150px',
  objectFit: 'cover',
  margin: '10px',
  cursor: 'pointer',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
};

const lightboxStyles = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const lightboxImageStyles = {
  maxWidth: '80%',
  maxHeight: '80%',
  objectFit: 'contain',
  boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)',
};

const closeButtonStyles = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: '10px 15px',
  background: '#ffffff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
};

export default ImageGallery;
