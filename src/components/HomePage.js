
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import './HomePage.css';
// import donateImage from '../assets/donate-blood.jpg';
// import requestImage from '../assets/request-blood.avif';
// import availabilityImage from '../assets/check-availability.avif';
// import bloodCampsImage from '../assets/blood-camps.webp';
// import nearestBanksImage from '../assets/blood-banks.png';
// import bgImage1 from '../assets/homepage-bg.jpg';
// import bgImage2 from '../assets/bg-image2.jpg';
// import bgImage3 from '../assets/bg-image3.avif';
// import Branch from './Branch';
// import branchData from '../data/branchData';
// // import Nearest from './Nearest'; // Adjust the path as necessary


// const HomePage = () => {
//   const navigate = useNavigate(); 

//   const chartData = [
//     { recipientType: 'A+', compatibleDonors: 'A+, A-, O+, O-' },
//     { recipientType: 'A-', compatibleDonors: 'A-, O-' },
//     { recipientType: 'B+', compatibleDonors: 'B+, B-, O+, O-' },
//     { recipientType: 'B-', compatibleDonors: 'B-, O-' },
//     { recipientType: 'AB+', compatibleDonors: 'AB+, AB-, A+, A-, B+, B-, O+, O-' },
//     { recipientType: 'AB-', compatibleDonors: 'AB-, A-, B-, O-' },
//     { recipientType: 'O+', compatibleDonors: 'O+, O-' },
//     { recipientType: 'O-', compatibleDonors: 'O-' }
//   ];

//   return (
//     <div className="homepage">
//       <section className="welcome-section">
//         <div className="background-slider">
//           <img src={bgImage1} alt="Background 1" />
//           <img src={bgImage2} alt="Background 2" />
//           <img src={bgImage3} alt="Background 3" />
//         </div>
//       <div className="welcome-content">
//           <h1>Welcome to the Blood Bank Management System</h1>
//           <p>Your contribution can save lives. Join us today!</p>
//         </div>
//       </section>

//       <section className="features">
//         <div className="feature">
//           <img src={donateImage} alt="Donate Blood" className="feature-image" />
//           <h2>Donate Blood</h2>
//           <p>Become a donor and save lives. Schedule your appointment.</p>
//           <button onClick={() => navigate('/donor-login')}>Donate Now</button> {/* Updated button */}
//         </div>
//         <div className="feature">
//           <img src={requestImage} alt="Request Blood" className="feature-image" />
//           <h2>Request Blood</h2>
//           <p>In need of blood? Find the right match quickly and easily.</p>
//           <button onClick={() => navigate('/patient-login')}>Request Blood</button>
//         </div>
//         <div className="feature">
//           <img src={availabilityImage} alt="Check Availability" className="feature-image" />
//           <h2>Check Availability</h2>
//           <p>Search our database for available blood types and donors.</p>
//           <button onClick={() => navigate('/availability')}>Check Availability</button>
//         </div>
//       </section>
//       {/* <Branch></Branch> */}
//       <section>
//         <center><h2>Our Branches</h2></center>
//         <div className="branch-section">
//         {branchData.map((branch, index) => (
//           <Branch
//             key={index}
//             name={branch.name}
//             address={branch.address}
//             image={branch.image}
//           />
//         ))}
//         </div>
//       </section>
//       <section className="compatibility-chart-container">
//         <h2>Blood Type Compatibility Chart</h2>
//         <table className="compatibility-chart">
//           <thead>
//             <tr>
//               <th>Recipient Blood Type</th>
//               <th>Compatible Donor Blood Types</th>
//             </tr>
//           </thead>
//           <tbody>
//             {chartData.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.recipientType}</td>
//                 <td>{item.compatibleDonors}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       <section className="additional-section">
//         <img src={bloodCampsImage} alt="Blood Camps" className="section-image" />
//         <div className="section-content">
//           <h2>Blood Camps</h2>
//           <p>Find and participate in upcoming blood donation camps near you. Your contribution is vital to saving lives.</p>
//           <button onClick={() => navigate('/campdetails')}>Learn More</button>
//         </div>
//       </section>

//       <section className="additional-section">
//         <img src={nearestBanksImage} alt="Nearest Blood Banks" className="section-image" />
//         <div className="section-content">
//           <h2>Nearest Blood Banks</h2>
//           <p>Locate the nearest blood banks and get in touch with them for your needs. We help you find the closest resources.</p>
//           <button onClick={() => navigate('/nearest')}>Find Nearest Blood Banks</button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default HomePage;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import donateImage from "../assets/blood-donation.jpeg";
import requestImage from "../assets/request-blood1.jpeg";
import availabilityImage from "../assets/check availability img.avif";
import bloodCampsImage from "../assets/blood-camps.webp";
import nearestBanksImage from "../assets/blood-banks.png";
import slideshowImage1 from '../assets/homepage-bg.jpg';
import slideshowImage2 from '../assets/bg-image2.jpg';
import slideshowImage3 from '../assets/bg-image3.avif';

const HomePage = () => {
  const navigate = useNavigate();

  const images = [slideshowImage1, slideshowImage2, slideshowImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500); // Change image every 1.5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="homepage">
      <section className="welcome-section">
        <div className="welcome-slideshow">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slideshow ${index + 1}`}
              className={`slideshow-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="welcome-content">
          <h1>Welcome to the Blood Bank Management</h1>
          <p>Your contribution can save lives. Join us today!</p>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <img src={donateImage} alt="Donate Blood" className="feature-image" />
          <h2>Donate Blood</h2>
          <p>Become a donor and save lives. Schedule your appointment.</p>
          <button onClick={() => navigate("/donor-login")}>
            Donate Now
          </button>
        </div>
        <div className="feature">
          <img src={requestImage} alt="Request Blood" className="feature-image" />
          <h2>Request Blood</h2>
          <p>In need of blood? Find the right match quickly and easily.</p>
          <button onClick={() => navigate("/patient-login")}>
            Request Blood
          </button>
        </div>
        <div className="feature">
          <img src={availabilityImage} alt="Check Availability" className="feature-image" />
          <h2>Check Availability</h2>
          <p>Search our database for available blood types and donors.</p>
          <button onClick={() => navigate("/availability")}>
            Check Availability
          </button>
        </div>
      </section>
      
      <section className="compatibility-chart-container">
        <h2>Blood Type Compatibility Chart</h2>
        <table className="compatibility-chart">
          <thead>
            <tr>
              <th>Recipient Blood Type</th>
              <th>Compatible Donor Blood Types</th>
            </tr>
          </thead>
          <tbody>
            {[
              { recipientType: "A+", compatibleDonors: "A+, A-, O+, O-" },
              { recipientType: "A-", compatibleDonors: "A-, O-" },
              { recipientType: "B+", compatibleDonors: "B+, B-, O+, O-" },
              { recipientType: "B-", compatibleDonors: "B-, O-" },
              { recipientType: "AB+", compatibleDonors: "AB+, AB-, A+, A-, B+, B-, O+, O-" },
              { recipientType: "AB-", compatibleDonors: "AB-, A-, B-, O-" },
              { recipientType: "O+", compatibleDonors: "O+, O-" },
              { recipientType: "O-", compatibleDonors: "O-" },
            ].map((item, index) => (
              <tr key={index}>
                <td>{item.recipientType}</td>
                <td>{item.compatibleDonors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="additional-section">
        <img src={bloodCampsImage} alt="Blood Camps" className="section-image" />
        <div className="section-content">
          <h2>Blood Camps</h2>
          <p>Find and participate in upcoming blood donation camps near you. Your contribution is vital to saving lives.</p>
          <button className="button" onClick={() => navigate('/blood-camps')}>Learn More</button>
          {/* <button onClick={() => navigate("/blood-camps")}> */}
        </div>
      </section>

      <section className="additional-section">
        <img src={nearestBanksImage} alt="Nearest Blood Banks" className="section-image" />
        <div className="section-content">
          <h2>Nearest Blood Banks</h2>
          <p>Locate the nearest blood banks and get in touch with them for your needs. We help you find the closest resources.</p>
          <button onClick={() => navigate("/nearest")}>
            Find Nearest Blood Banks
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
