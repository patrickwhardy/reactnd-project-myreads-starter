import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Shelf from "./Shelf";
import * as BooksAPI from "./BooksAPI";

class Search extends Component {
  state = { booksFromQuery: [] };

  handleInput = event => {
    const query = event.target.value;

    if (query !== "") {
      this.performQuery(query);
    } else {
      return null;
    }
  };

  removeFromSearchPage = bookId => {
    const filteredBooks = this.state.booksFromQuery.filter(
      book => book.id !== bookId
    );
    this.setState({ booksFromQuery: filteredBooks });
  };

  moveBook = (book, shelf) => {
    this.removeFromSearchPage(book.id);
    this.props.moveBook(book, shelf);
  };

  syncQueryAndShelf = booksFromQuery => {
    const booksFromShelf = this.props.books;

    const shelfIds = booksFromShelf.map(book => book.id);

    const merged = booksFromQuery.map(queryBook => {
      if (shelfIds.includes(queryBook.id)) {
        return booksFromShelf.find(shelfBook => shelfBook.id === queryBook.id);
      } else {
        return queryBook;
      }
    });

    return merged;
  };

  performQuery = query => {
    BooksAPI.search(query).then(books =>
      this.setState({ booksFromQuery: this.syncQueryAndShelf(books) })
    );
  };

  render() {
  const { booksFromQuery } = this.state;
  const handleInput = this.handleInput;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="search-books-results">
          {booksFromQuery.length > 0 &&
            <Shelf
              category="searchResults"
              books={booksFromQuery}
              moveBook={this.moveBook}
            />}
        </div>
      </div>
    )
  }
}

export default Search
