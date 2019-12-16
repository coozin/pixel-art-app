import React, { Component } from 'react';

// Material UI
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// Icons
import AddIcon from '@material-ui/icons/Add';

class PaintTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddChip: false,
      tagArr: ["these", "are", "some", "example", "chips"],
      tempTagVal: "",
    };
  }

  handleDelete = (value) => {
    const { tagArr } = this.state;
    const newArr = [];
    for (let i = 0; i < tagArr.length; i++) {
      if (tagArr[i] !== value) {
        newArr.push(tagArr[i])
      }
    }
    this.setState({
      tagArr: newArr,
    })
  }

  toggleModal = () => {
    this.setState({ showAddChip: !this.state.showAddChip })
  }

  handleClickAway = () => {
    const { tempTagVal } = this.state;
    if (tempTagVal !== "") {
      this.addTag(tempTagVal)
    }
  }

  setTempTagVal = (e) => {
    this.setState({
      tempTagVal: e.target.value
    })
  }

  addTag = (newTag) => {
    const newArr = [...this.state.tagArr];
    newArr.push(newTag);
    this.setState({
      tagArr: newArr,
    }, this.resetChipDisplay)
  }

  resetChipDisplay = () => {
    this.setState({
      showAddChip: false,
      tempTagVal: '',
    })
  }

  render() {
    const { tagArr, showAddChip } = this.state;
    const chips = []

    for (const [index, value] of tagArr.entries()) {
      chips.push(
        <Chip
          variant="outlined"
          size="small"
          label={value}
          key={index}
          onDelete={() => this.handleDelete(value)}
        />
      )
    }

    return (
      <div>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div>
            {chips}
            <Fab
              aria-label="add"
              size='small'
            >
              <AddIcon onClick={this.toggleModal} />
            </Fab>
            {showAddChip &&
              <TextField
                id="title"
                onChange={this.setTempTagVal}
                autoFocus
                placeholder="example"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    this.handleClickAway();
                    e.preventDefault();
                  }
                }}
              />
            }
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}

export default PaintTags;