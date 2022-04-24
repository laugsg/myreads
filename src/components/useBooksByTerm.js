import React, { useState, useEffect } from "react";
import SearchTerms from "../BooksSearchTerms.json";
import { search } from "../BooksAPI";

// init: hook calling
function useBooksByTerm() {
  const [books, setBoooks] = useState([]);

  // 1. call api endpoint
  // 2. init loop of calls
  // 3. get each collection by term
  // 4. store each collection into state
  // 4. wait till loop ends before return
  // 5. return state

  // 1. call api endpoint
  // 2. init loop of calls
  // 3. get each collection by term
  async function api_loop_collection() {
    let wholeCollection = []
    let result = SearchTerms.map(async (sTerm) => await search(sTerm));
    // let response = result.map((prom) => prom.then(newF));
    let response = result.map((prom) => prom.then(function( value ){
        wholeCollection.push(value)
    }));
    // return result;
  }
  const newF = (response) => {
    /**
     * Create an interface that get current state,
     * then, add new item into the interface,
     * finally, setState with the interface.
     */
    // let wholeCollection = []
    // response.map( item => wholeCollection.push(item))
    // console.log("wholeCollection:",wholeCollection)
    // setBoooks(wholeCollection)
  };

  useEffect(() => {
    (async () => {
      const response = await api_loop_collection();
      setBoooks(response)
    })();
    // console.log("api_call", api_loop_collection());
    // console.log("books:",books)
  });

  return books;
}
export default useBooksByTerm;
