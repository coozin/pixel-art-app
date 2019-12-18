import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './PaintButton.styles.css';

// Actions
import { savePainting, resetPainting } from '../../actions';

// Material UI
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// Icons
import Save from '@material-ui/icons/Save';
import Replay from '@material-ui/icons/Replay';

class PaintButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ButtonGroup
          size="small"
        >
          <Button
            onClick={() => this.props.savePainting(this.props.painting)}
            variant="contained"
            style={{
              backgroundColor: "#28a231",
              "color": "white",
              "margin": "10px 0",
            }}
            startIcon={<Save />}
          >
            Save
          </Button>
          <Button
            onClick={() => this.props.resetPainting()}
            variant="contained"
            style={{
              backgroundColor: "red",
              "color": "white",
              "margin": "10px 0",
            }}
            startIcon={<Replay />}
          >
            Reset
          </Button>
        </ButtonGroup>

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { painting } = state.painting
  return { painting }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ savePainting, resetPainting }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaintButton);