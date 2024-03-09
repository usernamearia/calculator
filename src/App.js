import React from 'react';
import Calculator from './components/Calculator';
import GifDisplay from './components/GifDisplay';
import './App.css';

function App() {
  const leftGif = "https://media.giphy.com/media/iiQPvFSNpqyocckCP1/giphy.gif";
  const rightGif = "https://media.giphy.com/media/iiQPvFSNpqyocckCP1/giphy.gif"; 

  return (
    <div className="app-container">
      <div className="title-container">
        <GifDisplay src={leftGif} />
        <h1 className="title">Calculator</h1>
        <GifDisplay src={rightGif} />
      </div>
      <Calculator />
    </div>
  );
}

export default App;
