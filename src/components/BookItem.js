import React from "react";

function BookItem({ shelfHandler, book }) {
  const categories = [
    {
      name: "None",
      category: "None",
    },
    {
      name: "Want to Read",
      category: "wantToRead",
    },
    {
      name: "Currently Reading",
      category: "currentlyReading",
    },
    {
      name: "Read",
      category: "read",
    },
  ];


  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${Object.keys(book).includes("imageLinks")
              ? book.imageLinks.smallThumbnail 
              : null})`,
            }}
          />
          <div className="book-shelf-changer">
            <select name={book.id} onChange={shelfHandler}>
              <option value="move" disabled>
                Move to...
              </option>
              {// show first to get the "tick": match global category with book category
              categories
                .filter((shelf) =>
                  shelf.category == book.shelf ? shelf : null
                )
                .map((shelf) => (
                  <option value={shelf.category} key={Math.random()}>
                    {shelf.name}
                  </option>
                ))}
              {// show after
              categories.map((shelf) =>
                shelf.category !== book.shelf ? (
                  <option value={shelf.category} key={Math.random()}>
                    {shelf.name}
                  </option>
                ) : null
              )}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {
          Object.keys(book).includes("authors")
            ? book.authors.map( (author, index) => (<div className="book-authors" key={author+index}>{author}</div>))
            : null
        }
      </div>
    </li>
  );
}

export default BookItem;
