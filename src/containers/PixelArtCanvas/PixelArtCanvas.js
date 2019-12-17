import React, { Component } from 'react';
import './PixelArtCanvas.styles.css';

// Material UI
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

class PixelArtCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 16,
      schema: [],
    };
  }

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
    const { size } = this.state;
    const blocksNeeded = Math.pow(size, 2);
    let newSchema = [];
    for (let i = 0; i < blocksNeeded; i++) {
      newSchema.push("darkGrey")
    }
    this.setState({ schema: newSchema })
  }

  clickEv = (index) => {
    const { colorSelected } = this.props;
    const { schema } = this.state;

    let newSchema = [...schema];
    newSchema[index] = colorSelected;
    this.setState({
      schema: newSchema
    })
  }

  render() {
    const { schema, size } = this.state;

    let boxes = [];
    let row = 0;
    let rows = [];

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
            p={1}
            m={1}
            width="0"
            className={`PixelArtCanvas-box`}
          />
        </Grid>
      )

      if (addRow) {
        rows.push(
          <Grid
            container
            alignItems="center"
            justify="center"
          >
            {boxes}
          </Grid>
        );
        boxes = [];
      }

    }

    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default PixelArtCanvas;