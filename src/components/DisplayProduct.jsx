import React, { useState } from 'react';

import redShoe from '../assets/red-shoe.jpg';
import blackShoe from '../assets/black-shoe.jpg';
import orangeShoe from '../assets/orange-shoe.jpg';

const DisplayProductComponent = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const getShoeImage = () => {
    switch (selectedColor.toLowerCase()) {
      case 'red':
        return redShoe;
      case 'black':
        return blackShoe;
      case 'orange':
        return orangeShoe;
      default:
        return redShoe; // Default image if color not matched
    }
  };

  return (
    <div style={{ backgroundColor: selectedColor.toLowerCase(), padding: '20px', display: 'flex', flexDirection: 'row', gap: '20px', borderRadius:'20px' }}>
      <div style={{border:'solid 2px white', borderRadius:'20px'}}>
        <img   src={getShoeImage()} alt={`${product.title} in ${selectedColor}`} style={{ width: '200px' }} />
      </div>
      <div>
        <h2>{product.title}</h2>
        <p>{product.collection}</p>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {product.availableColors.map((color) => (
          <button
            key={color}
            onClick={() => handleColorChange(color)} // Corrected the function name
            style={{ backgroundColor: color.toLowerCase() }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DisplayProductComponent;
