import React, { Component } from 'react';
import './NotebookSearch.styles.css';

// Material UI
import TextField from '@material-ui/core/TextField';

class NotebookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnChange = (e) => {
    const { filterCallback } = this.props;
    console.log("handleOnChange of search e", e)
    filterCallback(e.target.value)
  }

  render() {
    return (
      <div className='NotebookSearch'>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          onChange={(e) => this.handleOnChange(e)}
        />
      </div>
    );
  }
}

export default NotebookSearch;