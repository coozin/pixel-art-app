import React from 'react';
import './Notebook.styles.css';

// Containers
import NotebookList from '../NotebookList/NotebookList';
import NotebookButtonGroup from '../NotebookButtonGroup/NotebookButtonGroup';

function Notebook() {
  return (
    <div className='Notebook'>
      <div className="Notebook-title">
        Notebook
      </div>

      <NotebookList />
      <NotebookButtonGroup />
    </div>
  );
}

export default Notebook;
