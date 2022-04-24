import React, { useState, useEffect, useMemo } from "react";
import { search } from "../BooksAPI";
import SearchTerms from "../BooksSearchTerms.json";
import { Link } from "react-router-dom";

// custom hooks
import useBooksByTerm from "./useBooksByTerm";

// components
import BookItem from "./BookItem";

function SearchBooks({ shelfHandler }) {
  const [term, setTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const bColl = useBooksByTerm()
  
  // custom hook
  useMemo(() => {
    (async () => {
        console.log("bColl", bColl)

    })()
  })

  const inputHandler = (query) => {
    setTerm(query.target.value);
    // finder(query.target.value);
  };

  const finder = async (query) => {
    console.log("query", query);
    const result = await SearchTerms.map( sTerm => (search(sTerm))).map( prom => prom.then(newF));
  };

  const newF = (response) => {
    console.log("response",response)
  }

  // const getSearch = async (searchTerm) => {
  //   const response = await getSearchTerms(searchTerm.target.value);
  // };
  // const getSearchTerms = async (userquery) => {
  //   let foundQuery = [];
  //   const result = await SearchTerms.map(async (sTerm) => {
  //     const response = await search(sTerm);
  //     const filter = response.filter((item) => {
  //       if (Object.keys(item).includes("authors")) {
  //         item.authors.forEach((aItem) => {
  //           if (aItem.includes(userquery)) foundQuery.push(item);
  //           if (aItem.includes(userquery)) setFound(item);
  //           if (aItem.includes(userquery)) console.log("filter loop:", item);
  //         });
  //       }
  //     });
  //     console.log("result loop:", "foundQuery", foundQuery);
  //   });
  // };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            type="text"
            onChange={inputHandler}
            value={term}
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            //found.length && found.map( book => (<BookItem book={book} shelfHandler={shelfHandler} key={Math.random()}/>))
          }
        </ol>
      </div>
    </div>
  );
}
export default SearchBooks;
