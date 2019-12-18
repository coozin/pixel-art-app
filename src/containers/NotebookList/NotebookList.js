import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './NotebookList.styles.css';

// Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Actions
import { selectPainting, loadPaintings } from '../../actions';

// Containers
import NotebookSearch from '../NotebookSearch/NotebookSearch';

class NotebookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPaintings: [],
    };
  }

  componentDidMount() {
    this.props.loadPaintings()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.paintings && nextProps.paintings.length > 0) {
      this.setState({ filteredPaintings: [] })
    }
  }

  handleOnClick = (selectedPainting) => {
    this.props.selectPainting(selectedPainting)
  }

  filterCallback = (search) => {
    const { paintings } = this.props;

    let filteredList = [];

    for (let i = 0; i < paintings.length; i++) {
      let currentPainting = paintings[i];

      if (currentPainting.textVal.includes(search)) {

        filteredList.push(currentPainting)
      } else {
        for (let j = 0; j < currentPainting.tags.length; j++) {
          if (currentPainting.tags[j].includes(search)) {
            filteredList.push(currentPainting)
            break;
          }
        }
      }
    }

    this.setState({ filteredPaintings: filteredList })
  }

  render() {
    const { paintings } = this.props;
    const { filteredPaintings } = this.state;

    let myPaintings = []

    let paintingsShown = filteredPaintings && filteredPaintings.length > 0 ? filteredPaintings : paintings;

    if (paintingsShown && paintingsShown.length > 0) {
      for (const [index, value] of paintingsShown.entries()) {
        let tempStr = "";
        if (value.tags && value.tags.length > 0) {
          for (let i = 0; i < value.tags.length; i++) {
            tempStr = `${tempStr} #${value.tags[i]}`
          }
        }

        myPaintings.push(
          <ListItem button key={index} onClick={() => this.handleOnClick(value)}>
            <ListItemText primary={value.textVal} secondary={tempStr} />
          </ListItem>
        )
      }
    } else {
      myPaintings = "no paintings saved yet"
    }

    return (
      <div className='NotebookList'>
        <NotebookSearch filterCallback={this.filterCallback} />
        <List>
          {myPaintings}
        </List>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { selectedPainting, paintings } = state.painting

  return { selectedPainting, paintings }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectPainting, loadPaintings }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookList);