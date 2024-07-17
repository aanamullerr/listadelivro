import React from 'react';

function BookList({ books }) {
  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
