// src/components/SearchBar.js
import React, { useState } from 'react';
import '../styles/SearchBar.css'; // Correct path to styles

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search..."
            className="search-bar"
        />
    );
};

export default SearchBar;
