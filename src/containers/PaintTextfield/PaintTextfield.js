import React, { Component } from 'react';
import './PaintTextfield.styles.css';

// Material UI
import TextField from '@material-ui/core/TextField';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class PaintTextfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      textVal: "Title (click to edit)",
    };
  }

  toggleInput = () => {
    const {
      showInput,
    } = this.state;

    this.setState({
      showInput: !showInput
    });
  }

  setTextVal = (e) => {
    this.setState({
      textVal: e.target.value
    });
  }

  handleClickAway = () => {
    this.setState({
      showInput: false
    });
  }

  render() {
    const {
      showInput,
      textVal,
    } = this.state;

    return (
      <div className='PaintTextfield'>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div>
            {showInput &&
              <TextField
                id="title"
                onChange={this.setTextVal}
                autoFocus
              />
            }
            {!showInput &&
              <div
                onClick={this.toggleInput}
                className='PaintTextfield-title'
              >
                {textVal}
              </div>
            }
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}

export default PaintTextfield;