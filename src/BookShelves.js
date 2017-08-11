import React, { Component } from 'react';
import Shelf from './Shelf'
import { Link } from "react-router-dom";

class BookShelves extends Component {
  filterByCategory = (category, books) => {
    if (books) {
      return books.filter(book => {
        return book.shelf === category
      })
    }
  }

  render() {
    const categories = ['currentlyReading', 'read', 'wantToRead']
    const moveBook = this.props.moveBook
    const books = this.props.books

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {categories.map((category) => {
              return (
              <div key={category}>
                {books ?
                  <Shelf
                    category={category}
                    books={this.filterByCategory(category, books)}
                    moveBook={moveBook}
                  />
                : null }
              </div>
            )
            })}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelves
