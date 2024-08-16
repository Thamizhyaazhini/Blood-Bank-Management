// import React, { useState } from "react";
// import "./Nearest.css";

// const states = ["State 1", "State 2", "State 3"];
// const districts = {
//   "State 1": ["District 1-1", "District 1-2"],
//   "State 2": ["District 2-1", "District 2-2"],
//   "State 3": ["District 3-1", "District 3-2"],
// };

// const Nearest = () => {
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [results, setResults] = useState([]);

//   const handleStateChange = (event) => {
//     setSelectedState(event.target.value);
//     setSelectedDistrict("");
//   };

//   const handleSearch = () => {
//     const dummyResults = [
//       {
//         sNo: 1,
//         name: "Blood Bank A",
//         address: "123 Main St",
//         image: "https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/11804/westend-donor-centre.jpg",
//       },
//       {
//         sNo: 2,
//         name: "Blood Bank B",
//         address: "456 Elm St",
//         image: "url-to-image-B",
//       },
//     ];
//     setResults(dummyResults);
//   };

//   return (
//     <div>
//       <h1>Find Nearest Blood Banks</h1>
//       <div className="search-form">
//         <label htmlFor="state">Select State:</label>
//         <select id="state" value={selectedState} onChange={handleStateChange}>
//           <option value="">--Select State--</option>
//           {states.map((state) => (
//             <option key={state} value={state}>
//               {state}
//             </option>
//           ))}
//         </select>

//         <label htmlFor="district">Select District:</label>
//         <select
//           id="district"
//           value={selectedDistrict}
//           onChange={(e) => setSelectedDistrict(e.target.value)}
//           disabled={!selectedState}
//         >
//           <option value="">--Select District--</option>
//           {selectedState &&
//             districts[selectedState].map((district) => (
//               <option key={district} value={district}>
//                 {district}
//               </option>
//             ))}
//         </select>

//         <button onClick={handleSearch}>Search</button>
//       </div>

//       <div className="results-container">
//         {results.length === 0 ? (
//           <p>No results found</p>
//         ) : (
//           results.map((result) => (
//             <div key={result.sNo} className="branch">
//               <img
//                 src={result.image}
//                 alt={result.name}
//                 className="branch-image"
//               />
//               <div className="branch-details">
//                 <h3 className="branch-name">{result.name}</h3>
//                 <p className="branch-address">{result.address}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Nearest;


// src/components/Nearest.js
import React, { useState } from 'react';
import './Nearest.css';
import axios from 'axios';
import bloodBankImage from '../assets/blood-banks.png'; // Example image path

const states = ['Tamil Nadu', 'Kerala', 'Karnataka'];
const districts = {
  'Tamil Nadu': ['Chennai', 'Coimabatore'],
  'Kerala': ['Calicut', 'Cochin'],
  'Karnataka': ['Bangalore', 'Mysore']
};

const Nearest = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [results, setResults] = useState([]);


  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict(''); 
  };

  const handleSearch = async(event)  => {
    event.preventDefault();
    await axios.get("http://localhost:5000/nearby", {
      params: {
        selectedState,
        selectedDistrict
    }
    }).then((response) => {
      console.log(response);
      console.log(response.data,'data');
    
    // const dummyResults = [
    //   { sNo: 1, name: 'Blood Bank A', image: bloodBankImage },
    //   { sNo: 2, name: 'Blood Bank B', image: bloodBankImage }
    // ];
    setResults(response.data);
  });
};

  return (
    <div className="background-wrapper">
      <div className="nearest-container">
        <h1>Find Nearest Blood Banks</h1>
        <div className="search-form">
          <label htmlFor="state">Select State:</label>
          <select
            id="state"
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="">--Select State--</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>

          <label htmlFor="district">Select District:</label>
          <select
            id="district"
            value={selectedDistrict}
            onChange={e => setSelectedDistrict(e.target.value)}
            disabled={!selectedState}
          >
            <option value="">--Select District--</option>
            {selectedState && districts[selectedState].map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>

          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="results-container">
          {results.length === 0 ? (
            <div className="no-results">No results found</div>
          ) : (
            results.map((result,index) => (
              <div key={index+1} className="result-card">
                <img src={bloodBankImage} alt={result.state} className="result-image" />
                <div className="result-info">
                  <p>S.No: {index+1}</p>
                  <h3>{result.state} {result.district}</h3>
                  <h4>{result.bank}</h4>
                  <h5>Blood Type Available {result.bloodtype}</h5>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Nearest;