import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './PaintTextfield.styles.css';

// Actions
import { savePaintingTitle } from '../../actions';

// Material UI
import TextField from '@material-ui/core/TextField';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class PaintTextfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      // textVal: "Title (click to edit)",
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
    // this.setState({
    //   textVal: e.target.value
    // });
    this.props.savePaintingTitle(e.target.value)
  }

  handleClickAway = () => {
    this.setState({
      showInput: false
    });
  }

  render() {
    const {
      showInput,
      // textVal,
    } = this.state;

    const {
      textVal
    } = this.props;

    return (
      <div className='PaintTextfield'>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div>
            {showInput &&
              <TextField
                id="title"
                onChange={this.setTextVal}
                autoFocus
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    this.handleClickAway();
                    e.preventDefault();
                  }
                }}
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

// const mapStateToProps = textVal => ({
//   textVal
// })

function mapStateToProps(state) {
  const { textVal } = state.painting
  console.log("state", state)
  return { textVal }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ savePaintingTitle }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaintTextfield);