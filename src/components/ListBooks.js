import React from "react";
import { Link } from "react-router-dom";

// Components
import Bookshelf from "./Bookshelf";

function ListBooks({ shelfHandler, listBooks }) {
  
  const currentlyReading = listBooks.filter((book) => book.shelf === "currentlyReading");
  const wantToRead = listBooks.filter((book) => book.shelf === "wantToRead");
  const read = listBooks.filter((book) => book.shelf === "read");

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              shelfHandler={shelfHandler}
              books={currentlyReading}
              name="Currently Reading"
            />
            <Bookshelf
              shelfHandler={shelfHandler}
              books={wantToRead}
              name="Want to Read"
            />
            <Bookshelf shelfHandler={shelfHandler} books={read} name="Read" />
          </div>
        </div>
        <div className="open-search">
          {/* "Circle Plus" Button */}
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListBooks;
