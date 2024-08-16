
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./Availability.css";
// import axios from 'axios';

// const Availability = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const [searchResults, setSearchResults] = useState([]);

//   const [selectedBloodType, setSelectedBloodType] = useState(
//     queryParams.get("bloodType") || ""
//   );
//   const [selectedLiters, setSelectedLiters] = useState(
//     queryParams.get("liters") || ""
//   );
//   const [selectedLocation, setSelectedLocation] = useState(
//     queryParams.get("location") || ""
//   );
//   const handleSearch = async(event) => {
//     event.preventDefault();
//     await axios.get("http://localhost:5000/availability", {
//       params: {
//         bloodTypes,
//         location
//     }
//     }).then((response) => {
//       console.log(response);
//       console.log(response.data,'data');
//       setSearchResults(response.data);
//     });
//   };

//   const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
//   const availableLiters = ["0.5", "1", "1.5", "2", "2.5", "3"];
//   const locations = [
//     "Chennai",
//     "Bangalore",
//     "Coimbatore",
    
//   ];

//   return (
//     <div className="availability-container">
//       {/* Background Video */}
//       <video autoPlay loop muted className="background-video">
//         <source
//           src="https://cdn.pixabay.com/video/2024/01/20/197489-905015030_tiny.mp4"
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>

//       <div className="availability-box">
//         <h1 className="availability-title">Blood Availability</h1>
//         <div className="availability-form">
//           <label htmlFor="bloodType">
//             <strong>Blood Type:</strong></label>
//             <form onSubmit={handleSearch} className="search-form">
//             <select
//             id="bloodType"
//             value={selectedBloodType}
//             onChange={(e) => setSelectedBloodType(e.target.value)}
//             >
//             <option value="">Select Blood Type</option>
//             {bloodTypes.map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//             </select>

//             <label htmlFor="liters">
//             <strong>Liters Required:</strong>
//             </label>
//             <select
//             id="liters"
//             value={selectedLiters}
//             onChange={(e) => setSelectedLiters(e.target.value)}
//             >
//             <option value="">Select Liters</option>
//             {availableLiters.map((liters) => (
//               <option key={liters} value={liters}>
//                 {liters} Liters
//               </option>
//             ))}
//             </select>

//             <label htmlFor="location">
//             <strong>Location:</strong>
//             </label>
//             <select
//             id="location"
//             value={selectedLocation}
//             onChange={(e) => setSelectedLocation(e.target.value)}
//             >
//             <option value="">Select Location</option>
//             {locations.map((loc) => (
//               <option key={loc} value={loc}>
//                 {loc}
//               </option>
//             ))}
//             </select>
//             <button type="search-button">Search</button>
//             </form>
//              {searchResults.length > 0 && (
//               <table className="results-table">
//                 <thead>
//                   <tr>
//                     <th>S.No</th>
//                     <th>Name</th>
//                     <th>Location</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {searchResults.map((result,index) => (
//                     <tr key={index+1}>
//                       <td>{index+1}</td>
//                       <td>{result.name}</td>
//                       <td>{result.location}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//       </div>
//     </div>
//   );
// };

// export default Availability;
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Availability.css";
import axios from 'axios';


const Availability = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [searchResults, setSearchResults] = useState([]);

  const [selectedBloodType, setSelectedBloodType] = useState(
    queryParams.get("bloodType") || ""
  );
  const [selectedLiters, setSelectedLiters] = useState(
    queryParams.get("liters") || ""
  );
  const [selectedLocation, setSelectedLocation] = useState(
    queryParams.get("location") || ""
  );
  const handleSearch = async(event) => {
        event.preventDefault();
        await axios.get("http://localhost:5000/availability", {
          params: {
            selectedBloodType,
            selectedLocation
        }
        }).then((response) => {
          console.log(response);
          console.log(response.data,'data');
          setSearchResults(response.data);
        });
      };

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const availableLiters = ["0.5", "1", "1.5", "2", "2.5", "3"];
  const locations = [
    "Chennai", 
    "Bangalore", 
    "Coimbatore"
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
          <label htmlFor="bloodType"><strong>Blood Type:</strong></label>
            <form onSubmit={handleSearch} className="search-form">
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

              <label htmlFor="liters"><strong>Liters Required:</strong></label>
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

            <label htmlFor="location"><strong>Location:</strong></label>
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
            <button type="search-button">Search</button>
            </form>
            {searchResults.length > 0 && (
            <table className="results-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Blood Bank</th>
                  <th>Location</th>
                  <th>Liters Available</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result,index) => (
                  <tr key={index+1}>
                    <td>{index+1}</td>
                    <td>{result.bank}</td>
                    <td>{result.location}</td>
                    <td>{result.literavail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Availability;