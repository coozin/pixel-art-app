import React from 'react';
import './NotebookList.styles.css';

// Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function NotebookList() {
  return (
    <div className='NotebookList'>
      <List>
        {/* TODO forloop */}
        <ListItem button>
          <ListItemText primary="Painting Name" secondary="#someTags" />
        </ListItem>
      </List>
    </div>
  );
}

export default NotebookList;
