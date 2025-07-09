import React from 'react';


const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value.trim();
    if (value) onSearch(value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input name="search" type="text" placeholder="Search movies..." />
      <button type="submit">Search</button>
     
    </form>
  );
};

export default SearchBar;