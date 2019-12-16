import React from 'react';
import './NotebookSearch.styles.css';

// Material UI
import TextField from '@material-ui/core/TextField';

function NotebookSearch() {
  return (
    <div className='NotebookSearch'>
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        variant="outlined"
      />
    </div>
  );
}

export default NotebookSearch;