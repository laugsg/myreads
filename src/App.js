import React from "react";
import { useState, useEffect } from 'react'
import * as BooksAPI from "./BooksAPI";
import { Routes, Route } from "react-router-dom";
import { update } from  "./BooksAPI";

import "./App.css";

/** wireframe
 * https://wireframe.cc/CSiKnF
 */

// Components
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks";

function BooksApp() {
  const [listBooks, setListBooks] = useState([])
  const init = async () => {
    await BooksAPI.getAll().then((books) => {
      setListBooks(books)
    })
  }


  const [state, setState] = useState([])
  const shelfHandler = async (item) => {
    const value = item.target.value
    const id = item.target.name
    const response = await update({id:id}, value);
    setState( response )
    init()
  };

  useEffect(() => {
    init()
  }, [state])

  return (
          <Routes>
            <Route exact path="/" element={<ListBooks shelfHandler={shelfHandler} listBooks={listBooks} />} />
            <Route exact path="/search" element={<SearchBooks shelfHandler={shelfHandler} listBooks={listBooks} />} />
          </Routes>
        );
}

export default BooksApp;
