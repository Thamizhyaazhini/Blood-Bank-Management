// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import HomePage from './components/HomePage';
// import About from './components/About';
// import Info from './components/Info';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import DonorLogin from './components/DonorLogin';
// import PatientLogin from './components/PatientLogin';
// import Signup from './components/Signup';
// import Availability from './components/Availability';
// import Nearest from './components/Nearest';
// import LoginChoice from './components/LoginChoice';
// import BloodDonation from './components/BloodDonation';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#dc004e',
//     },
//   },
// });

// const App = () => {
//   const [user, setUser] = useState(null); // User state

//   const handleLogin = (userInfo) => {
//     setUser(userInfo); // Set user state on login
//   };

//   const handleLogout = () => {
//     setUser(null); // Clear user state on logout
//   };

//   return (
//     <Router>
//       <ThemeProvider theme={theme}>
//         <Header user={user} onLogout={handleLogout} />
//         <div className="main-content">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/info" element={<Info />} />
//             <Route path="/login-choice" element={<LoginChoice />} />
//             <Route
//               path="/donor-login"
//               element={<DonorLogin onLogin={handleLogin} />}
//             />
//             <Route path="/patient-login" element={<PatientLogin />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/availability" element={<Availability />} />
//             <Route path="/nearest" element={<Nearest />} />
//             <Route path="/blood-donation" element={<BloodDonation />} />
//           </Routes>
//         </div>
//         <Footer />
//       </ThemeProvider>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Info from "./components/Info";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DonorLogin from "./components/DonorLogin";
import PatientLogin from "./components/PatientLogin";
import Signup from "./components/Signup";
import Availability from "./components/Availability";
import Nearest from "./components/Nearest";
import LoginChoice from "./components/LoginChoice";
import BloodDonation from "./components/BloodDonation";
import Branches from "./pages/Branches"; // Updated import path
import BloodCamps from "./components/BloodCamps";


const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const App = () => {
  const [user, setUser] = useState(null); // User state

  const handleLogin = (userInfo) => {
    setUser(userInfo); // Set user state on login
  };

  const handleLogout = () => {
    setUser(null); // Clear user state on logout
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header user={user} onLogout={handleLogout} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Info />} />
            <Route path="/login-choice" element={<LoginChoice />} />
            <Route path="/donor-login" element={<DonorLogin onLogin={handleLogin} />} />
            <Route path="/patient-login" element={<PatientLogin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/availability" element={<Availability />} />
            <Route path="/nearest" element={<Nearest />} />
            <Route path="/blood-donation" element={<BloodDonation />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/blood-camps" element={<BloodCamps />} />

          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
