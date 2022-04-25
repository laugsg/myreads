import React, { Component } from "react";
import { search } from "../BooksAPI";

// components
import SearchInput from "./searchInput";
import SearchClose from "./searchClose";
import BookItem from "./BookItem";

class SearchBooks extends Component {
  state = {
    biblio: []
  };

  cleanFoundBooks = () => {
    this.setState({
      found: [],
    });
  };

  searchTerm = (query) => {
    if( query.length > 0){
      search(query).then((res) => {
        console.log("books", res)
        this.setState((prevState) => ({
          biblio:res,
        }));
      });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <SearchClose />
          <SearchInput searchTerm={this.searchTerm} />
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.biblio.length
              ? (
                this.state.biblio.map((book) => (
                  <BookItem book={book} shelfHandler={this.props.shelfHandler} key={Math.random()} />
                ))
              )
              : (
                "No Results..."
              )
            }
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBooks;
