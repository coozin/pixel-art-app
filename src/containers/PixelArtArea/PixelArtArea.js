import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Material UI
import Grid from '@material-ui/core/Grid';

// Components
import PixelArtSelector from '../PixelArtSelector/PixelArtSelector';
import PixelArtCanvas from '../PixelArtCanvas/PixelArtCanvas';

// Actions
import { setColorPalette } from '../../actions';

const DEFAULT_COLOR_ARR = [
  "black",
  "white",
  "yellow",
  "lightgreen",
  "green",
  "aquamarine",
  "blue",
  "lightblue",
  "purple",
  "violet",
  "red",
  "orange",
  "darkorange",
  "pink",
  "darkGrey",
  "brown",
];

class PixelArtArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelected: "white",
      isNew: true,
    };
  }

  componentDidMount() {
    this.init()
  }

  init = () => {
    this.props.setColorPalette(DEFAULT_COLOR_ARR)
  }

  colorSelectCallback = (color) => {
    this.setState({
      colorSelected: color,
    })
  }

  render() {
    const {
      colorSelected,
      isNew,
    } = this.state;

    const { colorArr } = this.props;

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

function mapStateToProps(state) {
  const { colorArr } = state.painting.painting
  return { colorArr }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setColorPalette }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PixelArtArea);