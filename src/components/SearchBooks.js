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
    found: [],
  };

  obtainDatabase = () => {
    searchTerms.forEach((term) => {
      search(term).then((res) => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> obtainDatabase")
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
    let booksArr = []
    this.state.biblio.map((booksArray) => {
      booksArray.filter((book) => {
        if (Object.keys(book).includes("authors")) {
          book.authors.forEach((author) => {
            if (author.includes(query)){
              console.log("author",author)
              // this.setState((prevState) => {
              //   return {
              //       found: [...prevState.found, book],
              //     } 
              // });
              booksArr.push(book)
            }
          });
        }

        if (book.title.includes(query)){
          // this.setState((prevState) => ({
          //   found: [...prevState.found, book],
          // }));
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
              console.log("book", this.state.found)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <SearchClose />
          <SearchInput searchTerm={this.searchTerm} />
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.biblio.length ? (
                this.state.found.length ? (
                  this.state.found.map((book) => (
                    <BookItem book={book} key={Math.random()} />
                  ))
                ) : (
                  "No Results..."
                )
              ) : (
                <Loader />
              )
            }
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBooks;
