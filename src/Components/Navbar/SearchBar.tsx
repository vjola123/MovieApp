import React from "react";
import { Input } from "antd";
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (value: string) => {
    onSearch(value);
  };

  return (
    <div className="Search"> 
    <div className="search-bar-container">
      <img className="search-icon" src="https://i.pinimg.com/originals/8c/e4/f9/8ce4f94dda345bba8b9ba7dc57cd961c.png" alt="Search Icon" />
      <Input.Search
        placeholder="Search movies"
        onSearch={handleSearch}
        enterButton
      />
    </div>
    </div>
  );
};

export default SearchBar;
