import React, { Component } from 'react';
import './NotebookButtonGroup.styles.css';

// Material UI
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';

// Icons
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import PublishIcon from '@material-ui/icons/Publish';

// Containers
import ImportExportDialog from '../ImportExportDialog/ImportExportDialog';

class NotebookButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      isImport: true,
    };
  }

  handleImport = () => {
    this.setState({
      showDialog: true,
      isImport: true,
    })
  }

  handleExport = () => {
    this.setState({
      showDialog: true,
      isImport: false,
    })
  }

  closeDialog = () => {
    this.setState({ showDialog: false })
  }

  render() {
    const { showDialog, isImport } = this.state;
    return (
      <div className='NotebookButtonGroup'>
        <ButtonGroup
          color="primary"
          aria-label="contained primary button group"
          size="small"
        >
          <Button
            variant="contained"
            startIcon={<SystemUpdateAltIcon />}
            onClick={() => this.handleImport()}
          >
            Import
          </Button>
          <Button
            startIcon={<PublishIcon />}
            onClick={() => this.handleExport()}
          >
            Export
          </Button>
        </ButtonGroup>

        <ImportExportDialog
          showDialog={showDialog}
          closeDialog={this.closeDialog}
          isImport={isImport}
        />

      </div>
    );
  }
}

export default NotebookButtonGroup;
