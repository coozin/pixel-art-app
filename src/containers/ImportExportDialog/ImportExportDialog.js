import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { savePainting } from '../../actions';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';

class ImportExportDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: {}
    };
  }

  handleClose = () => {
    console.log("need callback")
    const { closeDialog } = this.props;
    closeDialog();
  }

  handleSave = () => {
    // need to save it to paintings or something
    const { savePainting } = this.props;
    const { schema } = this.state;
    let parsedSchema = JSON.parse(schema)
    savePainting(parsedSchema);
    this.handleClose();
  }

  handleChange = (schema) => {
    this.setState({
      schema
    })
  }

  render() {
    const { showDialog, isImport, painting } = this.props;
    console.log("painting", painting)
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={showDialog}>
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
          {isImport ? "Import" : "Export"}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {isImport ? "Paste your schema below and save." : "Copy your schema below and save to a plain text file."}
          </Typography>
          {isImport ?
            <TextareaAutosize rowsMin={3} onChange={e => this.handleChange(e.target.value)} /> :
            <Typography gutterBottom>
              {JSON.stringify(painting)}
            </Typography>
          }
        </DialogContent>
        <DialogActions>
          {isImport ?
            <Button autoFocus onClick={() => this.handleSave()} color="primary">
              Save changes
            </Button> :
            <Button autoFocus onClick={() => this.handleClose()} color="primary">
              Close
            </Button>
          }

        </DialogActions>
      </Dialog>
    );
  }
}

function mapStateToProps(state) {
  const { painting } = state.painting
  console.log("state painting", state)
  return { painting }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ savePainting }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportExportDialog);