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

class NotebookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // paintings: [],
      showAltView: true,
    };
  }

  componentDidMount() {
    this.props.loadPaintings()
  }

  // shouldComponentUpdate(nextProps) {
  //   const { paintings } = this.props;

  //   if (nextProps.paintings && nextProps.paintings.length > paintings.length)
  //   console.log("paintings componentWillReceiveProps", paintings)
  //   if (paintings && paintings.length > 0) {
  //     this.setState({
  //       showAltView: false
  //     })
  //   }
  // }

  handleOnClick = (selectedPainting) => {
    console.log("handleOnClick", selectedPainting)
    this.props.selectPainting(selectedPainting)
  }
  render() {
    const { paintings } = this.props
    const { showAltView } = this.state;

    let myPaintings = []

    console.log("showAltView render", showAltView)

    // if (!showAltView) {
    if (paintings && paintings.length > 0) {
      for (const [index, value] of paintings.entries()) {
        console.log("index", index)
        console.log("value", value)
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

    // }

    return (
      <div className='NotebookList'>
        <List>
          {myPaintings}
        </List>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { selectedPainting, paintings } = state.painting
  console.log("state selectedPainting", state)
  return { selectedPainting, paintings }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectPainting, loadPaintings }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookList);