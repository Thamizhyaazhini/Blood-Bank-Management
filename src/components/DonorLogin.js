// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './DonorLogin.css';

// const DonorLogin = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [resetLoading, setResetLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError('');

//     // Hardcoded credentials for testing
//     const validEmail = 'test@example.com';
//     const validPassword = 'pass123';
//     const userFirstName = 'John'; // Hardcoded for example purposes

//     if (email === validEmail && password === validPassword) {
//       // Simulate successful login
//       onLogin({ email, firstName: userFirstName }); // Pass email and first name
//       navigate('/blood-donation'); // Redirect to BloodDonation page
//     } else {
//       setError('Invalid credentials');
//     }

//     setLoading(false);
//   };

//   const handleForgotPasswordSubmit = async (event) => {
//     event.preventDefault();
//     setResetLoading(true);
//     setError('');

//     try {
//       const response = await fetch('http://localhost:8080/api/forgot-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ mobile }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to send OTP');
//       }

//       setOtpSent(true);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setResetLoading(false);
//     }
//   };

//   const handleOtpSubmit = async (event) => {
//     event.preventDefault();
//     setResetLoading(true);
//     setError('');

//     try {
//       const response = await fetch('http://localhost:8080/api/verify-otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ otp }),
//       });

//       if (!response.ok) {
//         throw new Error('Invalid OTP');
//       }

//       navigate('/reset-password');
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setResetLoading(false);
//     }
//   };

//   return (
//     <div className="donor-login">
//       <h1>Donor Login</h1>
//       {!showForgotPassword ? (
//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           <button type="submit" disabled={loading} className="submit-btn">
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//           <button
//             type="button"
//             className="forgot-password-btn"
//             onClick={() => setShowForgotPassword(true)}
//           >
//             Forgot Password?
//           </button>
//           <button
//             type="button"
//             className="register-now-btn"
//             onClick={() => navigate('/signup')}
//           >
//             Don't have an account? Register Now
//           </button>
//         </form>
//       ) : (
//         <div className="forgot-password-form">
//           {!otpSent ? (
//             <form onSubmit={handleForgotPasswordSubmit} className="login-form">
//               <div className="form-group">
//                 <label htmlFor="mobile">Registered Mobile Number</label>
//                 <input
//                   type="text"
//                   id="mobile"
//                   value={mobile}
//                   onChange={(e) => setMobile(e.target.value)}
//                   required
//                 />
//               </div>
//               {error && <p className="error-message">{error}</p>}
//               <button type="submit" disabled={resetLoading} className="submit-btn">
//                 {resetLoading ? 'Sending OTP...' : 'Send OTP'}
//               </button>
//               <button
//                 type="button"
//                 className="back-to-login-btn"
//                 onClick={() => setShowForgotPassword(false)}
//               >
//                 Back to Login
//               </button>
//             </form>
//           ) : (
//             <form onSubmit={handleOtpSubmit} className="login-form">
//               <div className="form-group">
//                 <label htmlFor="otp">Enter OTP</label>
//                 <input
//                   type="text"
//                   id="otp"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   required
//                 />
//               </div>
//               {error && <p className="error-message">{error}</p>}
//               <button type="submit" disabled={resetLoading} className="submit-btn">
//                 {resetLoading ? 'Verifying OTP...' : 'Verify OTP'}
//               </button>
//               <button
//                 type="button"
//                 className="back-to-login-btn"
//                 onClick={() => setShowForgotPassword(false)}
//               >
//                 Back to Login
//               </button>
//             </form>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DonorLogin;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./DonorLogin.css";

const DonorLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // try {
    // const response =
    await axios
      .get("http://localhost:5000/login", {
        params: {
          email,
          password,
        },
        // { email, password }
      })
      .then((response) => {
        console.log(response);
        console.log(response.data, "data");
        const res = response.data;
        if (res) {
          onLogin(response.data); // Assuming this function updates the global state with user data
          alert("Login success");
          navigate("/blood-donation");
        } else {
          alert("Invalid credentials");
          setLoading(false);
        }

        // } catch (err) {
        //   setError("Invalid credentials");
        // } finally {
        //   setLoading(false);
        // }
      });
  };

  const handleForgotPasswordSubmit = async (event) => {
    event.preventDefault();
    setResetLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/forgot-password",
        { mobile }
      );

      if (response.status === 200) {
        setOtpSent(true);
      } else {
        throw new Error("Failed to send OTP");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setResetLoading(false);
    }
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    setResetLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/verify-otp",
        { otp }
      );

      if (response.status === 200) {
        navigate("/reset-password");
      } else {
        throw new Error("Invalid OTP");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="donor-login">
      <video autoPlay loop muted className="background-video">
        <source
          src="https://videos.pexels.com/video-files/6290528/6290528-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h1>Donor Login</h1>
      {!showForgotPassword ? (
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Logging in..." : "Login"}
          </button>
          <button
            type="button"
            className="forgot-password-btn"
            onClick={() => setShowForgotPassword(true)}
          >
            Forgot Password?
          </button>
          <button
            type="button"
            className="register-now-btn"
            onClick={() => navigate("/signup")}
          >
            Don't have an account? Register Now
          </button>
        </form>
      ) : (
        <div className="forgot-password-form">
          {!otpSent ? (
            <form onSubmit={handleForgotPasswordSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="mobile">Registered Mobile Number</label>
                <input
                  type="text"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button
                type="submit"
                disabled={resetLoading}
                className="submit-btn"
              >
                {resetLoading ? "Sending OTP..." : "Send OTP"}
              </button>
              <button
                type="button"
                className="back-to-login-btn"
                onClick={() => setShowForgotPassword(false)}
              >
                Back to Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="otp">Enter OTP</label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button
                type="submit"
                disabled={resetLoading}
                className="submit-btn"
              >
                {resetLoading ? "Verifying OTP..." : "Verify OTP"}
              </button>
              <button
                type="button"
                className="back-to-login-btn"
                onClick={() => setShowForgotPassword(false)}
              >
                Back to Login
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default DonorLogin;
