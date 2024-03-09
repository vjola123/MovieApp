import React, { useState } from 'react';

function SearchButton() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
  
    console.log();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Find your movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchButton;