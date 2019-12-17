import React from 'react';
import './Notebook.styles.css';

// Containers
import NotebookList from '../NotebookList/NotebookList';
import NotebookButtonGroup from '../NotebookButtonGroup/NotebookButtonGroup';

function Notebook() {
  return (
    <div className='Notebook'>
      <h2 style={{ margin: 0, padding: 10 }}>Notebook</h2>

      <NotebookList />
      <NotebookButtonGroup />
    </div>
  );
}

export default Notebook;
