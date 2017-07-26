import React, { Component } from 'react';
import Shelf from './Shelf'

class BookShelves extends Component {
  render() {
    let categories = [
      'Currently Reading',
      'Read',
      'Want to Read'
    ]

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {categories.map((category, index) => {
              return (
              <div key={category}>
                <Shelf
                  category={category}
                />
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
