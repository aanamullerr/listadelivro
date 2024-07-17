import React from 'react';
import './App.css';
import BookList from './BookList';

function App() {
  const books = [
    { id: 1, title: 'O menino do pijama listrado', author: 'John Boyne' },
    { id: 2, title: 'Alice no País das Maravilhas', author: 'Lewis Carroll' },
    { id: 3, title: 'A Culpa É das Estrelas', author: 'John Green' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de livros</h1>
      </header>
      <BookList books={books} />
    </div>
  );
}

export default App;
