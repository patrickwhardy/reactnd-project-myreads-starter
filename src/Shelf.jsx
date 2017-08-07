import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component {
  render() {

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
          {this.props.books.map((book) => (
            <li>
              <Book
                key={book.id}
                book={book}
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
