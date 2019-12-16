import React from 'react';
import './PaintingArea.styles.css';

// Components
import PaintTextfield from '../PaintTextfield/PaintTextfield';

function PaintingArea() {
  return (
    <div className='PaintingArea'>
      <PaintTextfield />
    </div>
  );
}

export default PaintingArea;
