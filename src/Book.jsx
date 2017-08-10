import React, { Component } from 'react';

class Book extends Component {
  render () {
    const moveBook = this.props.moveBook
    const title = this.props.book.title
    const shelf = this.props.book.shelf ? this.props.book.shelf : 'none'
    const image = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''
    const authors = this.props.book.authors ? this.props.book.authors.join(', ') : ''

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${image})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={event => moveBook(event.target.value)}
            >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default Book
