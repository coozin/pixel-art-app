import React, { Component } from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Components
import PixelArtSelector from '../PixelArtSelector/PixelArtSelector';
import PixelArtCanvas from '../PixelArtCanvas/PixelArtCanvas';

class PixelArtArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelected: "white",
      colorArr: [
        "white",
        "black",
        "green",
        "darkGrey",
        "red",
        "blue",
        "orange",
        "pink",
        "yellow",
        "purple",
      ],
      isNew: true,
    };
  }

  colorSelectCallback = (color) => {
    this.setState({
      colorSelected: color,
    })
  }

  render() {
    const {
      colorSelected,
      colorArr,
      isNew,
    } = this.state;

    return (
      <div>
        <Grid
          container
        >
          <Grid item xs={2}>
            <PixelArtSelector
              colorSelectCallback={this.colorSelectCallback}
              colorSelected={colorSelected}
              colorArr={colorArr}
            />
          </Grid>
          <Grid item xs={10}>
            <PixelArtCanvas
              colorSelected={colorSelected}
              isNew={isNew}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PixelArtArea;