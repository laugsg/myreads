import React from "react";
import { Link } from "react-router-dom";

function SearchClose() {
  return (
    <Link to="/">
      <button className="close-search">Close</button>
    </Link>
  );
}
export default SearchClose;
