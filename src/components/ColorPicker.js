import React, { useState } from 'react';
import ColorCard from './ColorCard';
import './colorPicker.css';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      <p>Selected Color: {selectedColor}</p>
      <ColorCard color="#ff0000" title="Red" onSelect={handleSelectColor} />
      <ColorCard color="#00ff00" title="Green" onSelect={handleSelectColor} />
      <ColorCard color="#0000ff" title="Blue" onSelect={handleSelectColor} />
      <ColorCard color="#ffff00" title="Yellow" onSelect={handleSelectColor} />
      <ColorCard color="#ff00ff" title="Magenta" onSelect={handleSelectColor} />
    </div>
  );
};

export default ColorPicker;
