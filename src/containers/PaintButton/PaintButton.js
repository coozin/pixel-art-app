import React, { Component } from 'react';

// Material UI
import Button from '@material-ui/core/Button';

class PaintButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Button>Save</Button>
      </div>
    );
  }
}

export default PaintButton;