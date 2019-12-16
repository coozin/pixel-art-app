import React, { Component } from 'react';

// Material UI
import Button from '@material-ui/core/Button';

class PaintButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  savePainting = () => {
    console.log("saving...")
  }
  render() {
    return (
      <div>
        <Button onClick={this.savePainting}>Save</Button>
      </div>
    );
  }
}

export default PaintButton;