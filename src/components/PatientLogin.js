// import React, { useState } from 'react';
// import './PatientLogin.css'; 

// const PatientLogin = () => {
//   const [bloodType, setBloodType] = useState('');
//   const [location, setLocation] = useState('');
//   const [medicalInfo, setMedicalInfo] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (event) => {
//     event.preventDefault();
//     console.log('Searching for blood type:', bloodType, 'in location:', location);
   
//     const dummyResults = [
//       { sNo: 1, name: 'Blood Bank A' },
//       { sNo: 2, name: 'Blood Bank B' }
//     ];
//     setSearchResults(dummyResults);
//   };

//   return (
//     <div className="patient-login">
//       <div className="login-container">
//         <div className="form-section">
//           <h1>Request Blood</h1>
//           <form onSubmit={handleSearch} className="search-form">
//             <label htmlFor="blood-type">Blood Type:</label>
//             <input
//               type="text"
//               id="blood-type"
//               value={bloodType}
//               onChange={(e) => setBloodType(e.target.value)}
//               required
//             />
//             <label htmlFor="location">Location:</label>
//             <input
//               type="text"
//               id="location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               required
//             />
//             <label htmlFor="medical-info">Medical Information:</label>
//             <textarea
//               id="medical-info"
//               value={medicalInfo}
//               onChange={(e) => setMedicalInfo(e.target.value)}
//               placeholder="Describe any medical conditions or specific needs..."
//               required
//             />
//             <button type="submit">Search</button>
//           </form>
          
//           {searchResults.length > 0 && (
//             <table className="results-table">
//               <thead>
//                 <tr>
//                   <th>S.No</th>
//                   <th>Name</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {searchResults.map(result => (
//                   <tr key={result.sNo}>
//                     <td>{result.sNo}</td>
//                     <td>{result.name}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PatientLogin;

// import React, { useState } from 'react';
// import './PatientLogin.css'; 
// import axios from 'axios';

// const PatientLogin = () => {
//   const [bloodType, setBloodType] = useState('');
//   const [location, setLocation] = useState('');
//   const [medicalInfo, setMedicalInfo] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async(event) => {
//     event.preventDefault();
//     console.log('Searching for blood type:', bloodType, 'in location:', location);
//     await axios.get("http://localhost:5000/reqblood", {
//       params: {
//         bloodType,
//         location
//     }
//     }).then((response) => {
//       console.log(response);
//       console.log(response.data,'data');
      
//       // const ummyResults = [
//       //   { sNo: 1, name: 'Blood Bank A' },
//       //   { sNo: 2, name: 'Blood Bank B' }
//       // ];
//       setSearchResults(response.data);
//     });
//   };

//   return (
//     <div className="patient-login">
//       <video
//         src="https://videos.pexels.com/video-files/4074364/4074364-sd_640_360_25fps.mp4"
//         autoPlay
//         muted
//         loop
//       ></video>
//       <div className="login-container">
//         <div className="form-section">
//           <h1>Request Blood</h1>
//           <form onSubmit={handleSearch} className="search-form">
//             <label htmlFor="blood-type">Blood Type:</label>
//             <input
//               type="text"
//               id="blood-type"
//               value={bloodType}
//               onChange={(e) => setBloodType(e.target.value)}
//               required
//             />
//             <label htmlFor="location">Location:</label>
//             <input
//               type="text"
//               id="location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               required
//             />
//             <label htmlFor="medical-info">Medical Information:</label>
//             <textarea
//               id="medical-info"
//               value={medicalInfo}
//               onChange={(e) => setMedicalInfo(e.target.value)}
//               placeholder="Describe any medical conditions or specific needs..."
//               required
//             />
//             <button type="submit">Search</button>
//           </form>
          
//           {searchResults.length > 0 && (
//             <table className="results-table">
//               <thead>
//                 <tr>
//                   <th>S.No</th>
//                   <th>Name</th>
//                   <th>Phone</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {searchResults.map((result,index) => (
//                   <tr key={index+1}>
//                     <td>{index+1}</td>
//                     <td>{result.name}</td>
//                     <td>{result.mobile}</td>
//                     <td><a href='tel:{result.mobile}' className="emergency-call-button"> call</a></td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PatientLogin;



import React, { useState } from "react";
import "./PatientLogin.css";
import axios from "axios";

const PatientLogin = () => {
  const [bloodType, setBloodType] = useState("");
  const [location, setLocation] = useState("");
  const [medicalInfo, setMedicalInfo] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    console.log(
      "Searching for blood type:",
      bloodType,
      "in location:",
      location
    );
    try {
      const response = await axios.get("http://localhost:5000/reqblood", {
        params: { bloodType, location },
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching blood request data:", error);
    }
  };

  return (
    <div className="patient-login">
      <video
        src="https://media.istockphoto.com/id/1409077043/video/closeup-of-doctor-drawing-blood-for-a-health-exam-in-sports-center-young-athlete-getting.mp4?s=mp4-640x640-is&k=20&c=5LnKAq2TiouW35TdjXZUafx8mJXxw4Pxc8jiqvqLQtc="
        autoPlay
        muted
        loop
      ></video>
      <div className="login-container">
        <div className="form-section">
          <h1>Request Blood</h1>
          <form onSubmit={handleSearch} className="search-form">
            <label htmlFor="blood-type">Blood Type:</label>
            <input
              type="text"
              id="blood-type"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              required
            />
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <label htmlFor="medical-info">Medical Information:</label>
            <textarea
              id="medical-info"
              value={medicalInfo}
              onChange={(e) => setMedicalInfo(e.target.value)}
              placeholder="Describe any medical conditions or specific needs..."
              required
            />
            <button type="submit">Search</button>
          </form>

          {searchResults.length > 0 && (
            <table className="results-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result, index) => (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{result.name}</td>
                    <td>{result.mobile}</td>
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

export default PatientLogin;