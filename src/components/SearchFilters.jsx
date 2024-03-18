import React, { useState } from 'react';
const SearchFilters = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-filters">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search characters..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchFilters;
