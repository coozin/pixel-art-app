import React from 'react';
import './App.css';
import Notebook from './containers/Notebook/Notebook';
import PaintingArea from './containers/PaintingArea/PaintingArea';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Pixel art app
        </p>
      </header>
      <Grid container>
        <Grid item xs={3}>
          <Notebook />
        </Grid>
        <Grid item xs={9}>
          <PaintingArea />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
