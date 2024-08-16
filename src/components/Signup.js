// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Signup.css";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     fathersName: "",
//     mobile: "",
//     email: "",
//     state: "",
//     district: "",
//     address: "",
//     pincode: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const validateForm = () => {
//     const {
//       name,
//       age,
//       gender,
//       fathersName,
//       mobile,
//       email,
//       state,
//       district,
//       address,
//       pincode,
//       password,
//       confirmPassword,
//     } = formData;
//     if (
//       !name ||
//       !age ||
//       !gender ||
//       !fathersName ||
//       !mobile ||
//       !email ||
//       !state ||
//       !district ||
//       !address ||
//       !pincode ||
//       !password ||
//       !confirmPassword
//     ) {
//       return "Please fill in all required fields";
//     }

//     if (password !== confirmPassword) {
//       return "Passwords do not match";
//     }

//     return null;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError("");

//     const validationError = validateForm();
//     if (validationError) {
//       setError(validationError);
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/api/donors/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Registration failed");
//       }
//       navigate("/blood-donation");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const genderOptions = ["Male", "Female", "Other"];
//   const stateOptions = ["State1", "State2", "State3"]; 
//   const districtOptions = ["District1", "District2", "District3"]; 

//   return (
//     <div className="signup">
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit} className="signup-form">
//         {Object.keys(formData).map(
//           (key) =>
//             key !== "confirmPassword" &&
//             key !== "gender" &&
//             key !== "state" &&
//             key !== "district" && (
//               <div className="form-group" key={key}>
//                 <label htmlFor={key}>
//                   {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')} *
//                 </label>
//                 <input
//                   type={key === "age" || key === "pincode" ? "number" : "text"}
//                   id={key}
//                   value={formData[key]}
//                   onChange={handleChange}
//                   placeholder={`Enter your ${key}`}
//                   required
//                 />
//               </div>
//             )
//         )}
//         <div className="form-group">
//           <label htmlFor="gender">Gender *</label>
//           <select
//             id="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Gender</option>
//             {genderOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="state">State *</label>
//           <select
//             id="state"
//             value={formData.state}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select State</option>
//             {stateOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="district">District *</label>
//           <select
//             id="district"
//             value={formData.district}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select District</option>
//             {districtOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password *</label>
//           <input
//             type="password"
//             id="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password *</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             placeholder="Confirm your password"
//             required
//           />
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit" disabled={loading}>
//           {loading ? "Registering..." : "Register"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    fathersName: "",
    mobile: "",
    email: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const {
      name,
      age,
      gender,
      fathersName,
      mobile,
      email,
      state,
      district,
      address,
      pincode,
      password,
      confirmPassword,
    } = formData;
    if (
      !name ||
      !age ||
      !gender ||
      !fathersName ||
      !mobile ||
      !email ||
      !state ||
      !district ||
      !address ||
      !pincode ||
      !password ||
      !confirmPassword
    ) {
      return "Please fill in all required fields";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match";
    }

    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      // const response = (
      //   "http://localhost:5000/api/donors/register",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   }
      // );
      axios.post("http://localhost:5000/register", {
      ...formData
    })
    .then((response) => {
      console.log(response);
    });

      // if (!response.ok) {
      //   throw new Error("Registration failed");
      // }
      alert('Registration succesfull!');
      navigate("/donor-login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const genderOptions = ["Male", "Female", "Other"];
  const stateOptions = ["Tamil nadu", "Others"];
  const districtOptions = ["Chennai", "Bangalore", "Coimbatore"];
  const BGOptions = ["A+", "A-", "B+", "B-", "O+", "O-" ];

  return (
    <div className="signup">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        {Object.keys(formData).map(
          (key) =>
            key !== "confirmPassword" &&
            key !== "gender" &&
            key !== "state" &&
            key !== "district" && (
              <div className="form-group" key={key}>
                <label htmlFor={key}>
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")}{" "}
                  *
                </label>
                <input
                  type={key === "age" || key === "pincode" ? "number" : "text"}
                  id={key}
                  value={formData[key]}
                  onChange={handleChange}
                  placeholder={`Enter your ${key}`}
                  required
                />
              </div>
            )
        )}
        <div className="form-group">
          <label htmlFor="gender">Gender *</label>
          <select
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            {genderOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="state">State *</label>
          <select
            id="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            {stateOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="district">District *</label>
          <select
            id="district"
            value={formData.district}
            onChange={handleChange}
            required
          >
            <option value="">Select District</option>
            {districtOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bloodgroup">Blood group *</label>
          <select
            id="bloodgroup"
            value={formData.bloodgroup}
            onChange={handleChange}
            required
          >
            <option value="">Blood group</option>
            {BGOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password *</label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
