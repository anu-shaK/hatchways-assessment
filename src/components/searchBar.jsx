import React from "react";

const SearchBar = ({ id, placeholder, className, value, onChange }) => {
  return (
    <input
      id={id}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
