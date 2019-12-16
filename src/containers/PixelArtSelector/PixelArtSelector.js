import React, { Component } from 'react';

// Material UI
import Box from '@material-ui/core/Box';

class PixelArtSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "primary.main"
    };
  }

  clickEv = (color) => {
    console.log("selectedColor: color", color)
    this.setState({
      selectedColor: color
    })
  }

  render() {
    return (
      <div>
        <Box
          onClick={() => this.clickEv("primary.main")}
          bgcolor="primary.main"
          p={1}
          m={1}
          width="0"
          className="PixelArtSelector-box"
          style={{ float: "left" }}
        />
        <Box
          onClick={() => this.clickEv("text.hint")}
          bgcolor="text.hint"
          p={1}
          m={1}
          width="0"
          className="PixelArtSelector-box"
          style={{ float: "left" }}
        />
      </div>
    );
  }
}

export default PixelArtSelector;