import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './PaintButton.styles.css';

// Actions
import { savePainting } from '../../actions';

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
        <Button
          onClick={() => this.props.savePainting(this.props.painting)}
          variant="contained"
          style={{
            backgroundColor: "#28a231",
            "color": "white",
            "margin": "10px",
          }}
        >Save</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { painting } = state.painting
  return { painting }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ savePainting }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaintButton);