// New! Keyboard shortcuts … Drive keyboard shortcuts have been updated to give you first-letters navigation
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Availability.css";

const Availability = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [selectedBloodType, setSelectedBloodType] = useState(
    queryParams.get("bloodType") || ""
  );
  const [selectedLiters, setSelectedLiters] = useState(
    queryParams.get("liters") || ""
  );
  const [selectedLocation, setSelectedLocation] = useState(
    queryParams.get("location") || ""
  );

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const availableLiters = ["0.5", "1", "1.5", "2", "2.5", "3"];
  const locations = [
    "Location 1",
    "Location 2",
    "Location 3",
    "Location 4",
    "Location 5"
  ];

  return (
    <div className="availability-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source
          src="https://cdn.pixabay.com/video/2024/01/20/197489-905015030_tiny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="availability-box">
        <h1 className="availability-title">Blood Availability</h1>
        <div className="availability-form">
          <label htmlFor="bloodType">
            <strong>Blood Type:</strong>
          </label>
          <select
            id="bloodType"
            value={selectedBloodType}
            onChange={(e) => setSelectedBloodType(e.target.value)}
          >
            <option value="">Select Blood Type</option>
            {bloodTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <label htmlFor="liters">
            <strong>Liters Required:</strong>
          </label>
          <select
            id="liters"
            value={selectedLiters}
            onChange={(e) => setSelectedLiters(e.target.value)}
          >
            <option value="">Select Liters</option>
            {availableLiters.map((liters) => (
              <option key={liters} value={liters}>
                {liters} Liters
              </option>
            ))}
          </select>

          <label htmlFor="location">
            <strong>Location:</strong>
          </label>
          <select
            id="location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Availability;