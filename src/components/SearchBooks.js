import React, { useState, useEffect } from "react";
import { search } from "../BooksAPI";
import SearchTerms from "../BooksSearchTerms.json";
import { Link } from "react-router-dom";

// components
import BookItem from "./BookItem";

function SearchBooks({shelfHandler}) {
  const [term, setTerm] = useState("");
  const [found, setFound] = useState([]);

  const inputHandler = (query) => {
    const value = query.target.value;
    setTerm(value);
    getSearch(query);
  };

  const getSearch = async (searchTerm) => {
    const response = await getSearchTerms(searchTerm.target.value);
    // console.log("getSearch", response);
  };

  const getSearchTerms = async (userquery) => {
    let foundQuery = [];
    const result = await SearchTerms.map(async (sTerm) => {
      const response = await search(sTerm);
      const filter = response.filter((item) => {
        if (Object.keys(item).includes("authors")) {
          item.authors.forEach((aItem) => {
            if (aItem.includes(userquery)) foundQuery.push(item);
            if (aItem.includes(userquery)) setFound(item);
            if (aItem.includes(userquery)) console.log("filter loop:", item);
          });
        }
      });
      // console.log("result loop:", await filter)
      console.log("result loop:", "foundQuery", foundQuery);
      // return response
      // return filter
    });
    // console.log("getSearchTerms",result)
    // console.log("getSearchTerms",foundQuery)
    // return result;
    // console.log("getSearchTerms", result.then(value => (value)))
    // console.log("getSearchTerms",result)
    // console.log("getSearchTerms", result.map( item => item.then(value => (value))))
    // console.log("getSearchTerms", result.map( item => {
    //   item.then( value => console.log("value", value))
    // }))
    // return result.then(value => (value));
  };

  useEffect(() => {
    // getSearch()
  }, []);

  // console.log("found", found)
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

          {found.length ? "true" : "false"}
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            found.length && found.map( book => (<BookItem book={book} shelfHandler={shelfHandler} key={Math.random()}/>))
          }
        </ol>
      </div>
    </div>
  );
}
export default SearchBooks;
