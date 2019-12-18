import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import './PixelArtCanvas.styles.css';

// Actions
import {
  savePaintingColors,
  saveCanvasSize,
} from '../../actions';

// Material UI
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

class PixelArtCanvas extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  componentDidMount() {
    this.init();
  }

  init = () => {
    const { isNew } = this.props;
    if (isNew) {
      this.createNewSchema()
    }
  }

  createNewSchema = () => {
    const { size } = this.props;
    const blocksNeeded = Math.pow(size, 2);
    let newSchema = [];
    for (let i = 0; i < blocksNeeded; i++) {
      newSchema.push("darkGrey")
    }
    this.props.savePaintingColors(newSchema)
  }

  clickEv = (index) => {
    const { colorSelected, schema } = this.props;

    let newSchema = [...schema];
    newSchema[index] = colorSelected;

    this.props.savePaintingColors(newSchema)
  }

  render() {
    const { schema, size } = this.props;

    let boxes = [];
    let row = 0;
    let rows = [];

    if (schema && schema.length > 0) {
      for (const [index, value] of schema.entries()) {

        let nextRow = Math.floor((index + 1) / size);
        let addRow = false;

        if (row < nextRow) {
          row++;
          addRow = true;
        }

        boxes.push(
          <Grid item key={index}>
            <Box
              key={index}
              onClick={() => this.clickEv(index)}
              bgcolor={value}
              p={2}
              m={0}
              style={{
                margin: "0 !important",
                width: "20px !important",
                height: "20px !important",
                padding: "0 !important",
                border: "1px black dotted"
              }}
            />
          </Grid>
        )

        if (addRow) {
          rows.push(
            <Grid
              container
              alignItems="center"
              justify="center"
              key={row}
            >
              {boxes}
            </Grid>
          );
          boxes = [];
        }
      }
    }

    return (
      <div>
        {rows}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { paintingColors: schema, size } = state.painting.painting
  return { schema, size };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ savePaintingColors, saveCanvasSize }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PixelArtCanvas);