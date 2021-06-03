import React from "react";
//import { Test } from './SearchBox.styles';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Rechercher"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
