import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { savePaintTags } from '../../actions';

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
      // tagArr: ["these", "are", "some", "example", "chips"],
      tempTagVal: "",
    };
  }

  handleDelete = (value) => {
    // const { tagArr } = this.state;
    const { tags } = this.props;
    const newTags = [];
    for (let i = 0; i < tags.length; i++) {
      if (tags[i] !== value) {
        newTags.push(tags[i])
      }
    }
    // this.setState({
    //   tagArr: newTags,
    // })

    this.props.savePaintTags(newTags)
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
    const { tags } = this.props;
    const newTags = [...tags];
    newTags.push(newTag);
    // this.setState({
    //   tagArr: newTags,
    // }, this.resetChipDisplay)
    this.props.savePaintTags(newTags)

    this.resetChipDisplay()
  }

  resetChipDisplay = () => {
    this.setState({
      showAddChip: false,
      tempTagVal: '',
    })
  }

  render() {
    const { tags } = this.props;
    const { showAddChip } = this.state;
    const chips = []

    if (tags && tags.length > 0) {
      for (const [index, value] of tags.entries()) {
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

function mapStateToProps(state) {
  const { tags } = state.painting
  console.log("state (tags)", state)
  return { tags }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ savePaintTags }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaintTags);