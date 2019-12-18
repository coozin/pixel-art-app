import React, { Component } from 'react';
import './PixelArtSelector.styles.css';

// Material UI
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

class PixelArtSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickEv = (color) => {
    const { colorSelectCallback } = this.props;

    colorSelectCallback(color)
  }

  render() {
    const { colorSelected, colorArr } = this.props;

    const boxes1 = [];
    const boxes2 = [];

    if (colorArr && colorArr.length > 0) {
      for (const [index, value] of colorArr.entries()) {
        if (index % 2 == 0) {
          boxes1.push(
            <Grid item xs={1} key={index}>
              <Box
                key={index}
                onClick={() => this.clickEv(value)}
                bgcolor={value}
                p={1}
                m={1}
                width="0"
                className={`PixelArtSelector-box ${colorSelected === value ? "PixelArtSelector-selected" : ''}`}
              />
            </Grid>
          )
        } else {
          boxes2.push(
            <Grid item xs={1} key={index}>
              <Box
                key={index}
                onClick={() => this.clickEv(value)}
                bgcolor={value}
                p={1}
                m={1}
                width="0"
                className={`PixelArtSelector-box ${colorSelected === value ? "PixelArtSelector-selected" : ''}`}
              />
            </Grid>
          )
        }
      }
    }

    return (
      <div className="PixelArtSelector-container">
        <Grid
          container
          direction="row"
        // justify="center"
        // alignItems="center"
        >
          <Grid
            direction="column"
            justify="center"
            alignItems="center"
          >
            {boxes1}
          </Grid>
          <Grid
            direction="column"
            justify="center"
            alignItems="center"
          >
            {boxes2}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PixelArtSelector;