import { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar";
import Topbar from "../../../components/Topbar";
import { postAPI, getAPI } from "../../../API/commonAPI";

const AddDoctor = () => {
  const [data, setData] = useState([]);
  const [doctor, setDoctor] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    mobile: "",
    about: "",
    password: "",
    username: "",
    photo: "",
    specialization: "",
    experience: "",
    qualifications: "",
    license: "",
    schedule: {
      sun: { start: "", end: "" },
      mon: { start: "", end: "" },
      tue: { start: "", end: "" },
      wed: { start: "", end: "" },
      thu: { start: "", end: "" },
      fri: { start: "", end: "" },
      sat: { start: "", end: "" },
    },
  });

  const fetchDepartment = async () => {
    const result = await getAPI("department/all-department");
    setData(result);
    // setLoading(false);
  };

  useEffect(() => {
    fetchDepartment();
  }, []);

  const formChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setDoctor({ ...doctor, firstName: value });
        break;
      case "lastName":
        setDoctor({ ...doctor, lastName: value });
        break;
      case "age":
        setDoctor({ ...doctor, age: value });
        break;
      case "gender":
        setDoctor({ ...doctor, gender: value });
        break;
      case "email":
        setDoctor({ ...doctor, email: value });
        break;
      case "number":
        setDoctor({ ...doctor, mobile: value });
        break;
      case "image":
        setDoctor({ ...doctor, photo: value });
        break;
      case "specialization ":
        setDoctor({ ...doctor, specialization: value });
        break;
      case "experience":
        setDoctor({ ...doctor, experience: value });
        break;
      case "qualifications":
        setDoctor({ ...doctor, qualifications: value });
        break;
      case "license":
        setDoctor({ ...doctor, license: value });
        break;
      case "password":
        setDoctor({ ...doctor, password: value });
        break;
      case "username":
        setDoctor({ ...doctor, username: value });
        break;
      case "about":
        setDoctor({ ...doctor, about: value });
        break;
      case "sun1":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { sun: { start: value } },
        });
        break;
      case "sun2":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { sun: { end: value } },
        });
        break;
      case "mon1":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { mon: { start: value } },
        });
        break;
      case "mon2":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { mon: { end: value } },
        });
        break;
      case "tue1":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { tue: { start: value } },
        });
        break;
      case "tue2":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { tue: { end: value } },
        });
        break;
      case "wed1":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { wed: { start: value } },
        });
        break;
      case "wed2":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { wed: { end: value } },
        });
        break;
      case "thu1":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { thu: { start: value } },
        });
        break;
      case "thu2":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { thu: { end: value } },
        });
        break;
      case "fri1":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { fri: { start: value } },
        });
        break;
      case "fri2":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { fri: { end: value } },
        });
        break;
      case "sat1":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { sat: { start: value } },
        });
        break;
      case "sat2":
        setDoctor({
          ...doctor,
          ...doctor.schedule,
          schedule: { fri: { end: value } },
        });
        break;

      default:
        break;
    }
  };

  const doctorSubmit = (event) => {
    event.preventDefault();
    postAPI("doctor/add-doctor", doctor);
  };

  return (
    <>
      <div className="page-wrapper">
        {/* App header starts */}
        <Topbar />

        {/* App header ends */}
        {/* Main container starts */}
        <div className="main-container">
          {/* Sidebar wrapper starts */}
          <Sidebar />
          {/* Sidebar wrapper ends */}
          {/* App container starts */}
          <div className="app-container">
            {/* App hero header starts */}
            <div className="app-hero-header d-flex align-items-center">
              {/* Breadcrumb starts */}
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <i className="ri-home-8-line lh-1 pe-3 me-3 border-end" />
                  <a href="index-2.html">Home</a>
                </li>
                <li
                  className="breadcrumb-item text-primary"
                  aria-current="page"
                >
                  Add Doctor
                </li>
              </ol>
              {/* Breadcrumb ends */}
              {/* Sales stats starts */}
              <div className="ms-auto d-lg-flex d-none flex-row">
                <div className="d-flex flex-row gap-1 day-sorting">
                  <button className="btn btn-sm btn-primary">Today</button>
                  <button className="btn btn-sm">7d</button>
                  <button className="btn btn-sm">2w</button>
                  <button className="btn btn-sm">1m</button>
                  <button className="btn btn-sm">3m</button>
                  <button className="btn btn-sm">6m</button>
                  <button className="btn btn-sm">1y</button>
                </div>
              </div>
              {/* Sales stats ends */}
            </div>
            {/* App Hero header ends */}
            {/* App body starts */}
            <div className="app-body">
              {/* Row starts */}
              <div className="row gx-3">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <form onSubmit={doctorSubmit}>
                        {/* Custom tabs starts */}
                        <div className="custom-tabs-container">
                          {/* Nav tabs starts */}
                          <ul
                            className="nav nav-tabs"
                            id="customTab2"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link active"
                                id="tab-oneA"
                                data-bs-toggle="tab"
                                href="#oneA"
                                role="tab"
                                aria-controls="oneA"
                                aria-selected="true"
                              >
                                <i className="ri-account-pin-circle-line" />
                                Personal Details
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                id="tab-twoA"
                                data-bs-toggle="tab"
                                href="#twoA"
                                role="tab"
                                aria-controls="twoA"
                                aria-selected="false"
                              >
                                <i className="ri-briefcase-4-line" />
                                Professional Information
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                id="tab-threeA"
                                data-bs-toggle="tab"
                                href="#threeA"
                                role="tab"
                                aria-controls="threeA"
                                aria-selected="false"
                              >
                                <i className="ri-calendar-check-line" />
                                Availability
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                id="tab-fourA"
                                data-bs-toggle="tab"
                                href="#fourA"
                                role="tab"
                                aria-controls="fourA"
                                aria-selected="false"
                              >
                                <i className="ri-lock-password-line" /> Account
                                Details
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                id="tab-fiveA"
                                data-bs-toggle="tab"
                                href="#fiveA"
                                role="tab"
                                aria-controls="fiveA"
                                aria-selected="false"
                              >
                                <i className="ri-account-pin-circle-line" />
                                About Me
                              </a>
                            </li>
                          </ul>
                          {/* Nav tabs ends */}
                          {/* Tab content starts */}
                          <div className="tab-content h-350">
                            <div
                              className="tab-pane fade show active"
                              id="oneA"
                              role="tabpanel"
                            >
                              {/* Row starts */}
                              <div className="row gx-3">
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="a1">
                                      First Name{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-account-circle-line" />
                                      </span>
                                      <input
                                        type="text"
                                        className="form-select"
                                        onChange={formChange}
                                        name="firstName"
                                        id="a1"
                                        placeholder="Enter First Name"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="a2">
                                      Last Name{" "}
                                      <span
                                        className="text-danger"
                                        name="firstName"
                                      >
                                        *
                                      </span>
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-account-circle-line" />
                                      </span>
                                      <input
                                        type="text"
                                        className="form-select"
                                        onChange={formChange}
                                        name="lastName"
                                        id="a2"
                                        placeholder="Enter Last Name"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="a3">
                                      Age <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-flower-line" />
                                      </span>
                                      <input
                                        type="text"
                                        placeholder="Type Number"
                                        className="form-select"
                                        onChange={formChange}
                                        name="age"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="selectGender1"
                                    >
                                      Gender
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-flower-line" />
                                      </span>
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        name="gender"
                                        id="a3"
                                      >
                                        <option value="">Select Age</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="a5">
                                      Email ID{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-mail-open-line" />
                                      </span>
                                      <input
                                        type="email"
                                        className="form-select"
                                        onChange={formChange}
                                        id="a5"
                                        placeholder="Enter Email ID"
                                        name="email"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="a6">
                                      Mobile Number{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-phone-line" />
                                      </span>
                                      <input
                                        type="text"
                                        className="form-select"
                                        onChange={formChange}
                                        id="a6"
                                        placeholder="Enter Mobile Number"
                                        name="number"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="a6">
                                      Profile Photo
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      {/* <span className="input-group-text">
                                      <i className="ri-phone-line" />
                                    </span> */}
                                      <input
                                        type="file"
                                        className="form-select"
                                        onChange={formChange}
                                        name="image"
                                        id="a6"
                                        placeholder="Enter Mobile Number"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Row ends */}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="twoA"
                              role="tabpanel"
                            >
                              {/* Row starts */}
                              <div className="row gx-3">
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="a3">
                                      Specialization{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-flower-line" />
                                      </span>
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="a3"
                                        name="specialization"
                                      >
                                        <option value={0}>
                                          Select Specialization
                                        </option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="a3">
                                      Experience{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-flower-line" />
                                      </span>
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        name="experience"
                                        id="a3"
                                      >
                                        <option value={0}>
                                          Years of Experience
                                        </option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="a3">
                                      Qualifications{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-flower-line" />
                                      </span>
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="a3"
                                        name="qualifications"
                                      >
                                        <option value={0}>
                                          Select Qualifications{" "}
                                        </option>
                                        <option value={1}>MBBS</option>
                                        <option value={2}>MD</option>
                                        <option value={3}>DNB</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="a1">
                                      License/Registration Number
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-account-circle-line" />
                                      </span>
                                      <input
                                        type="text"
                                        className="form-select"
                                        onChange={formChange}
                                        id="a1"
                                        placeholder="Type Registration Number"
                                        name="license"
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="col-xxl-3 col-lg-4 col-sm-6">
                                <div className="mb-3">
                                  <label className="form-label" htmlFor="a2">
                                    Upload Medical License
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="input-group">
                                    <input
                                      type="file"
                                      className="form-select" onChange={formChange}
                                      id="a2"
                                    />
                                  </div>
                                </div>
                              </div> */}
                              </div>

                              {/* Row ends */}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="threeA"
                              role="tabpanel"
                            >
                              {/* Row starts */}
                              <div className="row gx-3">
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="d1">
                                      Sun
                                    </label>
                                    <div className="input-group">
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="d1"
                                        name="sun1"
                                      >
                                        <option value={0}>From</option>
                                        <option value={1}>7AM</option>
                                        <option value={2}>8AM</option>
                                        <option value={3}>9AM</option>
                                      </select>
                                      <select
                                        name="sun2"
                                        className="form-select"
                                        onChange={formChange}
                                        id="d1X"
                                      >
                                        <option value={0}>To</option>
                                        <option value={1}>3PM</option>
                                        <option value={2}>4PM</option>
                                        <option value={3}>5PM</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="d2">
                                      Mon
                                    </label>
                                    <div className="input-group">
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="d2"
                                        name="mon1"
                                      >
                                        <option value={0}>From</option>
                                        <option value={1}>7AM</option>
                                        <option value={2}>8AM</option>
                                        <option value={3}>9AM</option>
                                      </select>
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="d2X"
                                        name="mon2"
                                      >
                                        <option value={0}>To</option>
                                        <option value={1}>3PM</option>
                                        <option value={2}>4PM</option>
                                        <option value={3}>5PM</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="d3">
                                      Tue
                                    </label>
                                    <div className="input-group">
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="d3"
                                        name="tue1"
                                      >
                                        <option value={0}>From</option>
                                        <option value={1}>7AM</option>
                                        <option value={2}>8AM</option>
                                        <option value={3}>9AM</option>
                                      </select>
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="d3X"
                                        name="tue2"
                                      >
                                        <option value={0}>To</option>
                                        <option value={1}>3PM</option>
                                        <option value={2}>4PM</option>
                                        <option value={3}>5PM</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="d4">
                                      Wed
                                    </label>
                                    <div className="input-group">
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="d4"
                                        name="wed1"
                                      >
                                        <option value={0}>From</option>
                                        <option value={1}>7AM</option>
                                        <option value={2}>8AM</option>
                                        <option value={3}>9AM</option>
                                      </select>
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="d4X"
                                        name="wed2"
                                      >
                                        <option value={0}>To</option>
                                        <option value={1}>3PM</option>
                                        <option value={2}>4PM</option>
                                        <option value={3}>5PM</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="d5">
                                      Thu
                                    </label>
                                    <div className="input-group">
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="d5"
                                        name="thu1"
                                      >
                                        <option value={0}>From</option>
                                        <option value={1}>7AM</option>
                                        <option value={2}>8AM</option>
                                        <option value={3}>9AM</option>
                                      </select>
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="d5X"
                                        name="thu2"
                                      >
                                        <option value={0}>To</option>
                                        <option value={1}>3PM</option>
                                        <option value={2}>4PM</option>
                                        <option value={3}>5PM</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="d6">
                                      Fri
                                    </label>
                                    <div className="input-group">
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="d6"
                                        name="fri1"
                                      >
                                        <option value={0}>From</option>
                                        <option value={1}>7AM</option>
                                        <option value={2}>8AM</option>
                                        <option value={3}>9AM</option>
                                      </select>
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="d6X"
                                        name="fri2"
                                      >
                                        <option value={0}>To</option>
                                        <option value={1}>3PM</option>
                                        <option value={2}>4PM</option>
                                        <option value={3}>5PM</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="d7">
                                      Sat
                                    </label>
                                    <div className="input-group">
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="d7"
                                        name="sat1"
                                      >
                                        <option value={0}>From</option>
                                        <option value={1}>7AM</option>
                                        <option value={2}>8AM</option>
                                        <option value={3}>9AM</option>
                                      </select>
                                      <select
                                        className="form-select"
                                        onChange={formChange}
                                        id="d7X"
                                        name="sat2"
                                      >
                                        <option value={0}>To</option>
                                        <option value={1}>3PM</option>
                                        <option value={2}>4PM</option>
                                        <option value={3}>5PM</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Row ends */}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="fourA"
                              role="tabpanel"
                            >
                              {/* Row starts */}
                              <div className="row gx-3">
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="u1">
                                      User Name
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-account-pin-circle-line" />
                                      </span>
                                      <input
                                        type="text"
                                        id="u1"
                                        placeholder="Enter username"
                                        className="form-select"
                                        onChange={formChange}
                                        name="username"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="u2">
                                      Password
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-lock-password-line" />
                                      </span>
                                      <input
                                        type="password"
                                        id="u2"
                                        name="password"
                                        className="form-select"
                                        onChange={formChange}
                                        placeholder="Password must be 8-20 characters long."
                                      />
                                      <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                      >
                                        <i className="ri-eye-line" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-sm-6">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="u3">
                                      Confirm Password
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-lock-password-line" />
                                      </span>
                                      <input
                                        type="password"
                                        id="u3"
                                        name="confirmPassword"
                                        placeholder="Confirm new password"
                                        className="form-select"
                                        onChange={formChange}
                                      />
                                      <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                      >
                                        <i className="ri-eye-off-line" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Row ends */}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="fiveA"
                              role="tabpanel"
                            >
                              {/* Row starts */}
                              <div className="row gx-3">
                                <div className="col-xxl-12 col-lg-12 col-sm-12">
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="u1">
                                      About Me
                                    </label>
                                    <div className="input-group">
                                      <span className="input-group-text">
                                        <i className="ri-account-pin-circle-line" />
                                      </span>
                                      <input
                                        type="text"
                                        id="u1"
                                        placeholder="Enter username"
                                        className="form-select"
                                        name="about"
                                        onChange={formChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Row ends */}
                            </div>
                          </div>
                          {/* Tab content ends */}
                        </div>
                        {/* Custom tabs ends */}
                        {/* Card acrions starts */}
                        <div className="d-flex gap-2 justify-content-end mt-4">
                          <a href="#" className="btn btn-outline-secondary">
                            Cancel
                          </a>
                          <button type="submit" className="btn btn-primary">
                            Create Doctor Profile
                          </button>
                        </div>
                      </form>

                      {/* Card acrions ends */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Row ends */}
            </div>
            {/* App body ends */}
            {/* App footer starts */}

            {/* App footer ends */}
          </div>
          {/* App container ends */}
        </div>
        {/* Main container ends */}
      </div>
    </>
  );
};

export default AddDoctor;
