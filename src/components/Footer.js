// import React from "react";
// import { Link } from "react-router-dom";
// import "./Footer.css";
// import fbIcon from "../assets/fb-icon.png";
// import twitterIcon from "../assets/twitter-icon.jpg";
// import instagramIcon from "../assets/instagram-icon.png";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section">
//           <h4>Quick Links</h4>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li>
//               <Link to="/info">Info</Link>
//             </li>
//             <li>
//               <Link to="/donor-login">Donate</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h4>Contact Us</h4>
//           <p>
//             Email:{" "}
//             <a href="mailto:contact@donatered.com">contact@donatered.com</a>
//           </p>
//           <p>
//             Phone: <a href="tel:+11234567890">7339571184</a>
//           </p>
//           <p>Address: 123 Blood Drive Ave, City, State, 12345</p>
//         </div>
//         <div className="footer-section">
//           <h4>Follow Us</h4>

//           <div className="social-icons">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-icon"
//             >
//               <img src={fbIcon} alt="Facebook" />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-icon"
//             >
//               <img src={twitterIcon} alt="Twitter" />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-icon"
//             >
//               <img src={instagramIcon} alt="Instagram" />
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; 2024 DonateRed. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./Footer.css";
import fbIcon from "../assets/fb-icon.png";
import twitterIcon from "../assets/twitter-icon.jpg";
import instagramIcon from "../assets/instagram-icon.png";

Modal.setAppElement("#root");

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    // Handle feedback form submission
    alert("Feedback submitted!");
    closeModal();
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/donor-login">Donate</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            Email:{" "}
            <a href="mailto:contact@donatered.com">contact@donatered.com</a>
          </p>
          <p>
            Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a>
          </p>
          <p>Address: 123 Blood Drive Ave, City, State, 12345</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={fbIcon} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 DonateRed. All rights reserved.</p>
        <button className="feedback-button" onClick={openModal}>
          Feedback
        </button>
      </div>

      {/* Feedback Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Feedback Form"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Feedback Form</h2>
        <form onSubmit={handleFeedbackSubmit} className="feedback-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="donationType">Donation Type:</label>
          <select id="donationType" name="donationType" required>
            <option value="">Select...</option>
            <option value="blood">Blood</option>
            <option value="plasma">Plasma</option>
            <option value="platelets">Platelets</option>
          </select>

          <label htmlFor="donationDate">Donation Date:</label>
          <input type="date" id="donationDate" name="donationDate" required />

          <label htmlFor="healthAfterDonation">
            How is your health after donating?
          </label>
          <select id="healthAfterDonation" name="healthAfterDonation" required>
            <option value="">Select...</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>

          <label htmlFor="serviceFeedback">
            How would you rate our service?
          </label>
          <select id="serviceFeedback" name="serviceFeedback" required>
            <option value="">Select...</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>

          <label htmlFor="hygiene">
            How would you rate the hygiene during the donation?
          </label>
          <select id="hygiene" name="hygiene" required>
            <option value="">Select...</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>

          <label htmlFor="punctuality">
            How would you rate the punctuality of the donation process?
          </label>
          <select id="punctuality" name="punctuality" required>
            <option value="">Select...</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>

          <label htmlFor="schedulingEase">
            How easy was it to schedule your appointment?
          </label>
          <select id="schedulingEase" name="schedulingEase" required>
            <option value="">Select...</option>
            <option value="very_easy">Very Easy</option>
            <option value="easy">Easy</option>
            <option value="neutral">Neutral</option>
            <option value="difficult">Difficult</option>
            <option value="very_difficult">Very Difficult</option>
          </select>

          <label htmlFor="staffProfessionalism">
            How would you rate the professionalism of our staff?
          </label>
          <select
            id="staffProfessionalism"
            name="staffProfessionalism"
            required
          >
            <option value="">Select...</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>

          <label htmlFor="waitTime">
            How would you rate the wait time before the donation?
          </label>
          <select id="waitTime" name="waitTime" required>
            <option value="">Select...</option>
            <option value="very_short">Very Short</option>
            <option value="short">Short</option>
            <option value="average">Average</option>
            <option value="long">Long</option>
            <option value="very_long">Very Long</option>
          </select>
          <label htmlFor="suggestions">Any suggestions for improvement?</label>
          <textarea id="suggestions" name="suggestions" rows="4"></textarea>

          <button type="submit">Submit</button>
          <button type="button" onClick={closeModal}>
            Close
          </button>
        </form>
      </Modal>
    </footer>
  );
};

export default Footer;
