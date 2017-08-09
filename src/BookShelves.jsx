import React, { Component } from 'react';
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class BookShelves extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

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
                {this.state.books ?
                  <Shelf
                    category={category}
                    books={this.filterByCategory(category, this.state.books)}
                    moveBook={moveBook}
                  />
                : null }
              </div>
            )
            })}
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default BookShelves
