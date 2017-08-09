import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookShelves from './BookShelves'
import * as BooksAPI from './BooksAPI'
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = { books: [] }

  updateBookInShelf = book => {
    const newState = this.state.books.map(
      shelfBook => (shelfBook.id === book.id ? book : shelfBook)
    )

    this.setState({ books: newState })
  }

  addBookToShelf = book => {
    const newState = this.state.books.concat(book)

    this.setState({ books: newState })
  }

  bookInBookShelf = book => {
    return this.state.books.find(shelfBook => shelfBook.id === book.id)
  }

  moveBook = (book, shelf) => {
  console.log('moveBook', book, shelf)
  const newBook = Object.assign({}, book, { shelf })

  if (this.bookInBookShelf(newBook)) {
    this.updateBookInShelf(newBook)
  } else {
    this.addBookToShelf(newBook)
  }

  BooksAPI.update(newBook, shelf)
}

  render() {
    const { books } = this.state;
    const moveBook = this.moveBook;

    return (
      <div className="app">
        <Route
          path="/search"
          render={() => <Search books={books} moveBook={moveBook} />}
        />
        <Route
          exact
          path="/"
          render={() => <BookShelves books={books} moveBook={moveBook} />}
        />
      </div>
    )
  }
}

export default BooksApp
