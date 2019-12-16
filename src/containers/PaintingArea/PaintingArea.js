import React from 'react';
import './PaintingArea.styles.css';

// Components
import PaintTextfield from '../PaintTextfield/PaintTextfield';
import PaintTags from '../PaintTags/PaintTags';

function PaintingArea() {
  return (
    <div className='PaintingArea'>
      <PaintTextfield />
      <PaintTags />
    </div>
  );
}

export default PaintingArea;
