import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../../../components/Sidebar";
import Topbar from "../../../components/Topbar";

const AddPatient = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    age: "",
    blood_group: "",
    treatment: "",
    mobile: "",
    email: "",
    address: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const navigate = useNavigate();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/patient/add-patient`, formData);
      setSuccess(response.data.message);
      setError("");
      window.location.href = "/view-patients";
    } catch (error) {
      setError(
        error.response?.data?.message || "Something went wrong, try again!"
      );
      setSuccess("");
    }
  };

  return (
    <div className="page-wrapper">
      <Topbar />
      <div className="main-container">
        <Sidebar />
        <div className="app-container">
          <div className="app-hero-header d-flex align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <i className="ri-home-8-line lh-1 pe-3 me-3 border-end" />
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item text-primary" aria-current="page">
                Add Patient
              </li>
            </ol>
          </div>
          <div className="app-body">
            <form onSubmit={handleSubmit}>
              <div className="row gx-3">
                <div className="col-sm-6 mb-3">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-sm-6 mb-3">
                  <label>Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="form-control"
                    min={0}
                    max={150}
                    required
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <label>Blood Group</label>
                  <select
                    name="blood_group"
                    value={formData.blood_group}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div className="col-sm-6 mb-3">
                  <label>Treatment</label>
                  <input
                    type="text"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <label>Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-sm-12">
                  <label>Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                    required
                  ></textarea>
                </div>
              </div>
              {error && <p className="text-danger">{error}</p>}
              {success && <p className="text-success">{success}</p>}
              <button type="submit" className="btn btn-primary mt-3">
                Add Patient
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;


// import Sidebar from "../../../components/Sidebar";
// import Topbar from "../../../components/Topbar";

// const AddPatient = () => {
//   return (
//     <>
//       <div className="page-wrapper">
//         {/* App header starts */}
//         <Topbar />
//         {/* App header ends */}
//         {/* Main container starts */}
//         <div className="main-container">
//           {/* Sidebar wrapper starts */}
//           <Sidebar />
//           {/* Sidebar wrapper ends */}
//           {/* App container starts */}
//           <div className="app-container">
//             {/* App hero header starts */}
//             <div className="app-hero-header d-flex align-items-center">
//               {/* Breadcrumb starts */}
//               <ol className="breadcrumb">
//                 <li className="breadcrumb-item">
//                   <i className="ri-home-8-line lh-1 pe-3 me-3 border-end" />
//                   <a href="index-2.html">Home</a>
//                 </li>
//                 <li
//                   className="breadcrumb-item text-primary"
//                   aria-current="page"
//                 >
//                   Add Patient
//                 </li>
//               </ol>
//               {/* Breadcrumb ends */}
//               {/* Sales stats starts */}
//               <div className="ms-auto d-lg-flex d-none flex-row">
//                 <div className="d-flex flex-row gap-1 day-sorting">
//                   <button className="btn btn-sm btn-primary">Today</button>
//                   <button className="btn btn-sm">7d</button>
//                   <button className="btn btn-sm">2w</button>
//                   <button className="btn btn-sm">1m</button>
//                   <button className="btn btn-sm">3m</button>
//                   <button className="btn btn-sm">6m</button>
//                   <button className="btn btn-sm">1y</button>
//                 </div>
//               </div>
//               {/* Sales stats ends */}
//             </div>
//             {/* App Hero header ends */}
//             {/* App body starts */}
//             <div className="app-body">
//               {/* Row starts */}
//               <div className="row gx-3">
//                 <div className="col-sm-12">
//                   <div className="card">
//                     <div className="card-header">
//                       <h5 className="card-title">Add Patient Details</h5>
//                     </div>
//                     <div className="card-body">
//                       {/* Row starts */}
//                       <div className="row gx-3">
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a1">
//                               First Name <span className="text-danger">*</span>
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               id="a1"
//                               placeholder="Enter First Name"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a2">
//                               Last Name <span className="text-danger">*</span>
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               id="a2"
//                               placeholder="Enter Last Name"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a3">
//                               Age <span className="text-danger">*</span>
//                             </label>
//                             <select className="form-select" id="a3">
//                               <option value={0}>Select Age</option>
//                               <option value={1}>1</option>
//                               <option value={2}>2</option>
//                               <option value={3}>3</option>
//                               <option value={4}>4</option>
//                               <option value={5}>5</option>
//                               <option value={6}>6</option>
//                               <option value={7}>7</option>
//                               <option value={8}>8</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label
//                               className="form-label"
//                               htmlFor="selectGender1"
//                             >
//                               Gender <span className="text-danger">*</span>
//                             </label>
//                             <div className="m-0">
//                               <div className="form-check form-check-inline">
//                                 <input
//                                   className="form-check-input"
//                                   type="radio"
//                                   name="selectGenderOptions"
//                                   id="selectGender1"
//                                   defaultValue="male"
//                                 />
//                                 <label
//                                   className="form-check-label"
//                                   htmlFor="selectGender1"
//                                 >
//                                   Male
//                                 </label>
//                               </div>
//                               <div className="form-check form-check-inline">
//                                 <input
//                                   className="form-check-input"
//                                   type="radio"
//                                   name="selectGenderOptions"
//                                   id="selectGender2"
//                                   defaultValue="female"
//                                 />
//                                 <label
//                                   className="form-check-label"
//                                   htmlFor="selectGender2"
//                                 >
//                                   Female
//                                 </label>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a4">
//                               Create ID <span className="text-danger">*</span>
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               id="a4"
//                               placeholder="Create Unique ID"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a5">
//                               Email ID <span className="text-danger">*</span>
//                             </label>
//                             <input
//                               type="email"
//                               className="form-control"
//                               id="a5"
//                               placeholder="Enter Email ID"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a6">
//                               Mobile Number{" "}
//                               <span className="text-danger">*</span>
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               id="a6"
//                               placeholder="Enter Mobile Number"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a7">
//                               Marital Status
//                             </label>
//                             <select className="form-select" id="a7">
//                               <option value={0}>Select</option>
//                               <option value={1}>Married</option>
//                               <option value={2}>Un Married</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a8">
//                               Occupation
//                             </label>
//                             <select className="form-select" id="a8">
//                               <option value={0}>Select</option>
//                               <option value={1}>Teacher</option>
//                               <option value={2}>Engineer</option>
//                               <option value={3}>Business</option>
//                               <option value={4}>Bank</option>
//                               <option value={5}>Army</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a9">
//                               Blood Group <span className="text-danger">*</span>
//                             </label>
//                             <select className="form-select" id="a9">
//                               <option value={0}>Select</option>
//                               <option value={1}>A+</option>
//                               <option value={2}>A-</option>
//                               <option value={3}>B+</option>
//                               <option value={4}>B-</option>
//                               <option value={5}>O+</option>
//                               <option value={6}>O-</option>
//                               <option value={7}>AB+</option>
//                               <option value={8}>AB-</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a10">
//                               Blood Presure
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               id="a10"
//                               placeholder="Enter Blood Presure"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a11">
//                               Sugar
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               id="a11"
//                               placeholder="Enter Sugar Levels"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a12">
//                               Address
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               id="a12"
//                               placeholder="Enter Address"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a13">
//                               City
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               id="a13"
//                               placeholder="Enter City"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a14">
//                               State
//                             </label>
//                             <select className="form-select" id="a14">
//                               <option value={0}>Select</option>
//                               <option value={1}>Alabama</option>
//                               <option value={2}>Alaska</option>
//                               <option value={3}>Arizona</option>
//                               <option value={4}>California</option>
//                               <option value={5}>Florida</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-xxl-3 col-lg-4 col-sm-6">
//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="a15">
//                               Postal Code
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               id="a15"
//                               placeholder="Enter Postal Code"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-sm-12">
//                           <div id="dropzone" className="mb-3">
//                             <form
//                               action="https://bootstrapget.com/upload"
//                               className="dropzone dz-clickable"
//                               id="demo-upload"
//                             >
//                               <div className="dz-message">
//                                 <button type="button" className="dz-button">
//                                   Click here to upload or Drop your reports
//                                   here.
//                                 </button>
//                                 <h5>Upload your health reports.</h5>
//                               </div>
//                             </form>
//                           </div>
//                         </div>
//                         <div className="col-sm-12">
//                           <div className="d-flex gap-2 justify-content-end">
//                             <a
//                               href="patients-list.html"
//                               type="button"
//                               className="btn btn-outline-secondary"
//                             >
//                               Cancel
//                             </a>
//                             <a
//                               href="patients-list.html"
//                               type="button"
//                               className="btn btn-primary"
//                             >
//                               Create Patient Profile
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                       {/* Row ends */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Row ends */}
//             </div>
//             {/* App body ends */}
//             {/* App footer starts */}

//             {/* App footer ends */}
//           </div>
//           {/* App container ends */}
//         </div>
//         {/* Main container ends */}
//       </div>
//     </>
//   );
// };

// export default AddPatient;
