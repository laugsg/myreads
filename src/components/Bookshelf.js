import React from 'react'

// Components
import BookItem from "./BookItem";

function Bookshelf({shelfHandler, name, books }) {


    return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {
                books.map( book => (<BookItem book={book} shelfHandler={shelfHandler} key={Math.random()}/>))
            }
        </ol>
      </div>
    </div>
  );
}


export default Bookshelf;
