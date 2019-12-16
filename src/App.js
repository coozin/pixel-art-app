import React from 'react';
import './App.css';
import Notebook from './containers/Notebook/Notebook';
import PaintingArea from './containers/PaintingArea/PaintingArea';
import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Pixel art app
        </p>
      </header>
      <Grid container>
        <Grid item xs={2}>
          <Notebook />
        </Grid>
        <Grid item xs={10}>
          <PaintingArea />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
