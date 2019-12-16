import React from 'react';
import './NotebookButtonGroup.styles.css';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

// Icons
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import PublishIcon from '@material-ui/icons/Publish';

function NotebookButtonGroup() {
  return (
    <div className='NotebookButtonGroup'>
      <ButtonGroup
        color="primary"
        aria-label="contained primary button group"
        size="small"
      >
        <Button variant="contained" startIcon={<SystemUpdateAltIcon />}>
          Import
        </Button>
        <Button startIcon={<PublishIcon />}>
          Export
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default NotebookButtonGroup;
