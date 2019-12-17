import React, { Component } from 'react';
import './PixelArtSelector.styles.css';

// Material UI
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

class PixelArtSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedColor: "white"
    };
  }

  clickEv = (color) => {
    const { colorSelectCallback } = this.props;
    console.log("selectedColor: color", color)
    // this.setState({
    //   selectedColor: color
    // })
    colorSelectCallback(color)
  }

  render() {
    const { colorSelected, colorArr } = this.props;

    const boxes = [];

    for (const [index, value] of colorArr.entries()) {
      boxes.push(
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

    return (
      <div className="PixelArtSelector-container">
        <Grid
          container
          direction="column"
          justify="center"
        >
          {boxes}
        </Grid>

      </div>
    );
  }
}

export default PixelArtSelector;