import React, { Component } from 'react';

class Book extends Component {

  concatAuthors = (authors) => {
    let authorsString = ''
    authors.forEach(author => {
      authorsString += `${author}, `
    })
    return authorsString.slice(0, -2)
  }

  render () {
    const moveBook = this.props.moveBook
    const title = this.props.book.title
    const authors = this.concatAuthors(this.props.book.authors)
    const background = this.props.book.previewLink

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${background})`
            }}
          />
          <div className="book-shelf-changer">
            <select
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
