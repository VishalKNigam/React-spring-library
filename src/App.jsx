import { useState } from 'react'
import './App.css'
import DayOne from './DayOne/DayOne';
import DayTwo from './DayTwo/DayTwo';
import NavigationMenu from './NavBar/NavBar';
import ImageGallery from './ImageGalleryWithLightBox/ImageGalleryWithLightBox';
import Carousel from './InteractiveCorousels/InterractiveCorousels';
import Modal from './AnimatedModal/AnimatedModal';
import DropdownMenu from './DropDown/DropDown';
const sceneryImages = [
  'https://via.placeholder.com/500?text=Scenery+Image+1',
  'https://via.placeholder.com/500?text=Scenery+Image+2',
  'https://via.placeholder.com/500?text=Scenery+Image+3',
  'https://via.placeholder.com/500?text=Scenery+Image+4',
  'https://via.placeholder.com/500?text=Scenery+Image+5',
  // Add more image URLs as needed
];
const images = [
  { image: 'https://via.placeholder.com/300', alt: 'Image 1' },
  { image: 'https://via.placeholder.com/400', alt: 'Image 2' },
  { image: 'https://via.placeholder.com/500', alt: 'Image 3' },
  // Add more images as needed
];
function App() {
  
  return (
    <div>
      <NavigationMenu />
      {/* <DayOne /> */}
      {/* <DayTwo /> */}
      <ImageGallery images={sceneryImages} />
      {/* <Carousel items={images}/> */}
      <DropdownMenu />
      <Modal />
    </div>
  )
}

export default App
