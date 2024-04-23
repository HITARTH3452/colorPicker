import React from 'react';

const ColorCard = ({ color, title, onSelect }) => {
  const handleSelect = () => {
    onSelect(color);
  };

  return (
    <div className="color-card" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <button onClick={handleSelect}>Select</button>
    </div>
  );
};

export default ColorCard;
