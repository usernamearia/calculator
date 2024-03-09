import React from 'react';
import './GifDisplay.css';

function GifDisplay({ src }) {
  return <img src={src} alt="Decorative Gif" className="gif" />;
}

export default GifDisplay;
