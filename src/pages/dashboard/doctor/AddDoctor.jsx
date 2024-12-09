import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Topbar from "../../../components/Topbar";

const AddDoctor = () => {
  const [doctor, setDoctor] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    mobile: "",
    photo: "",
    specialization: "",
    experience: "",
    qualifications: "",
    license: "",
    sun1: "",
    sun2: "",
    mon1: "",
    mon2: "",
    tue1: "",
    tue2: "",
    wed1: "",
    wed2: "",
    thu1: "",
    thu2: "",
    fri1: "",
    fri2: "",
    sat1: "",
    sat2: "",
  });
  const formChange = () => {};
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
                                    Gender<span className="text-danger">*</span>
                                  </label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="ri-flower-line" />
                                    </span>
                                    <select
                                      className="form-select"
                                      onChange={formChange}
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
                                    >
                                      <option value={0}>From</option>
                                      <option value={1}>7AM</option>
                                      <option value={2}>8AM</option>
                                      <option value={3}>9AM</option>
                                    </select>
                                    <select
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
                        <a
                          href="doctors-list.html"
                          className="btn btn-outline-secondary"
                        >
                          Cancel
                        </a>
                        <a href="doctors-list.html" className="btn btn-primary">
                          Create Doctor Profile
                        </a>
                      </div>
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
