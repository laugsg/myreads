import React, { Component } from "react";
import { search } from "../BooksAPI";

// components
import SearchInput from "./searchInput";
import SearchClose from "./searchClose";
import BookItem from "./BookItem";
import Loader from "./Loader";

// Search Terms
import searchTerms from "../BooksSearchTerms.json";

class SearchBooks extends Component {
  state = {
    biblio: [],
    found: []
  };

  obtainDatabase = () => {
    searchTerms.forEach((term) => {
      search(term).then((res) => {
        this.setState((prevState) => ({
          biblio: [...prevState.biblio, res],
        }));
      });
    });
  };

  cleanFoundBooks = () => {
    this.setState({
      found: [],
    });
  };

  searchTerm = (query) => {
    this.cleanFoundBooks();
    let booksArr = [];
    this.state.biblio.map((booksArray) => {
      booksArray.filter((book) => {
        if (Object.keys(book).includes("authors")) {
          book.authors.forEach((author) => {
            if (author.includes(query)) {
              booksArr.push(book)
            }
          });
        }
        if (book.title.includes(query)) {
          booksArr.push(book)
        }
      });
    });
    this.setState({
      found: booksArr
    })
  };

  componentDidMount() {
    this.obtainDatabase();
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <SearchClose />
          <SearchInput searchTerm={this.searchTerm} />
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.biblio ? (
              this.state.found ? (
                this.state.found.map((book) => (
                  <BookItem book={book} shelfHandler={this.props.shelfHandler} key={Math.random()} />
                ))
              ) : (
                "No Results..."
              )
            ) : (
              <Loader />
            )}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBooks;
