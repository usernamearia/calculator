import React, { useState, useEffect } from 'react';
import * as math from 'mathjs';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const appendInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(math.evaluate(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  const handleKeyPress = (event) => {
    const { key } = event;
    const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '(', ')'];
    if (keys.includes(key)) {
      appendInput(key);
    } else if (key === 'Enter' || key === '=') {
      calculateResult();
    } else if (key === 'Backspace') {
      setInput(input.slice(0, -1));
    } else if (key === 'Escape') {
      clearInput();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="button-container">
        <button onClick={() => appendInput('(')}>(</button>
        <button onClick={() => appendInput(')')}>)</button>
        <button onClick={clearInput}>C</button>
        <button onClick={() => appendInput('/')}>/</button>
        <button onClick={() => appendInput('7')}>7</button>
        <button onClick={() => appendInput('8')}>8</button>
        <button onClick={() => appendInput('9')}>9</button>
        <button onClick={() => appendInput('*')}>*</button>
        <button onClick={() => appendInput('4')}>4</button>
        <button onClick={() => appendInput('5')}>5</button>
        <button onClick={() => appendInput('6')}>6</button>
        <button onClick={() => appendInput('-')}>-</button>
        <button onClick={() => appendInput('1')}>1</button>
        <button onClick={() => appendInput('2')}>2</button>
        <button onClick={() => appendInput('3')}>3</button>
        <button onClick={() => appendInput('+')}>+</button>
        <button onClick={() => appendInput('0')}>0</button>
        <button onClick={() => appendInput('.')}>.</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default App;
