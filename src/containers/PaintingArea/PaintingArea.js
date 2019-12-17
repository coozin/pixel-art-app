import React from 'react';
import './PaintingArea.styles.css';

// Components
import PaintTextfield from '../PaintTextfield/PaintTextfield';
import PaintTags from '../PaintTags/PaintTags';
import PaintButton from '../PaintButton/PaintButton';
import PixelArtArea from '../PixelArtArea/PixelArtArea';

// Material UI
import Grid from '@material-ui/core/Grid';

function PaintingArea() {
  return (
    <div className='PaintingArea'>
      <Grid container>
        <Grid item xs={10}>
          <PaintTextfield />
        </Grid>
        <Grid item xs={2}>
          <PaintButton />
        </Grid>
      </Grid>
      <PaintTags />
      <PixelArtArea />
    </div>
  );
}

export default PaintingArea;
