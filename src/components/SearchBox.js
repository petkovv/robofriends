import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        aria-label="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={e => searchChange(e)}
      />
    </div>
  );
};

export default SearchBox;
