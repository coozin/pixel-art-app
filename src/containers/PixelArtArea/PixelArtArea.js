import React, { Component } from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Components
import PixelArtSelector from '../PixelArtSelector/PixelArtSelector';

class PixelArtArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={2}>
            <PixelArtSelector />
          </Grid>
          <Grid item xs={10}>
            pixel painting
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PixelArtArea;