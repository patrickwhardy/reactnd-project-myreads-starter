import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component {
  render() {
    const books = this.props.books
    const moveBook = this.props.moveBook
    const titles = {
      currentlyReading: 'Currently Reading',
      read: 'Read',
      wantToRead: 'Want to Read'
    }

    return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{titles[this.props.category]}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book
                key={book.id}
                book={book}
                moveBook={shelf => moveBook(book, shelf)}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
    )
  }
}

export default Shelf
