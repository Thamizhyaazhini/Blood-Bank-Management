// src/components/BloodList.js
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import '../styles/BloodList.css'; // Correct path to styles

const BloodList = () => {
    const [bloodData, setBloodData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch('/api/blood-data')
            .then(response => response.json())
            .then(data => {
                setBloodData(data);
                setFilteredData(data);
            });
    }, []);

    const handleSearch = (query) => {
        const lowercasedQuery = query.toLowerCase();
        const filtered = bloodData.filter(item =>
            item.name.toLowerCase().includes(lowercasedQuery) ||
            item.bloodType.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredData(filtered);
    };

    return (
        <div className="blood-list">
            <SearchBar onSearch={handleSearch} />
            <ul>
                {filteredData.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.bloodType}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BloodList;
