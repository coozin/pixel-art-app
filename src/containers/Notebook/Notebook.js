import React from 'react';
import './Notebook.styles.css';
import NotebookSearch from '../NotebookSearch/NotebookSearch';
import NotebookList from '../NotebookList/NotebookList';

function Notebook() {
  return (
    <div className='Notebook'>
      <h2 style={{ margin: 0, padding: 10 }}>Notebook Title</h2>
      <NotebookSearch />
      <NotebookList />
    </div>
  );
}

export default Notebook;
