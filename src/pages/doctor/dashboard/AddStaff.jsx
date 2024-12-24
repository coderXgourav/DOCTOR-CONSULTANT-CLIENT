import Sidebar from "../../../components/doctor/Sidebar";
import Topbar from "../../../components/doctor/Topbar";

const AddStaff = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* TOPBAR  */}
        <Topbar />

        {/* Main container starts */}
        <div className="main-container">
          {/* Sidebar wrapper starts */}
          {/* SIDE BAR  */}
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
                  Doctors Dashboard
                </li>
              </ol>
              {/* Breadcrumb ends */}
              {/* Sales stats starts */}

              {/* Sales stats ends */}
            </div>
            {/* App Hero header ends */}
            {/* App body starts */}
            <div className="app-body">
              {/* Row starts */}
              <div className="row gx-3">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Add Staff Member</h5>
                    </div>
                    <div className="card-body">
                      {/* Row starts */}
                      <div className="row gx-3">
                        <div className="col-sm-12">
                          <div className="bg-light rounded-2 px-3 py-2 mb-3">
                            <h6 className="m-0">Personal Details</h6>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a1">
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="a1"
                              placeholder="Enter First Name"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a2">
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="a2"
                              placeholder="Enter Last Name"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a3">
                              Mobile Number
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="a3"
                              placeholder="Enter Mobile Number"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="selectGender1"
                            >
                              Gender <span className="text-danger">*</span>
                            </label>
                            <div className="m-0">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="selectGenderOptions"
                                  id="selectGender1"
                                  defaultValue="male"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="selectGender1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="selectGenderOptions"
                                  id="selectGender2"
                                  defaultValue="female"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="selectGender2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a4">
                              Date of Birth{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="a4"
                              placeholder="Enter DOB"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a5">
                              Qualification{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="a5"
                              placeholder="Enter Qualification"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a6">
                              Department <span className="text-danger">*</span>
                            </label>
                            <select className="form-select" id="a6">
                              <option value={0}>Select</option>
                              <option value={1}>Surgeon</option>
                              <option value={2}>Gynecologist</option>
                              <option value={3}>Psychiatrists</option>
                              <option value={4}>Urologist</option>
                              <option value={5}>Paediatrician</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a7">
                              Designation <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="a7"
                              placeholder="Enter Designation"
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a8">
                              Address <span className="text-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              id="a8"
                              placeholder="Enter Address"
                              rows={2}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a9">
                              City <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="a9"
                              placeholder="Enter City"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a10">
                              Country <span className="text-danger">*</span>
                            </label>
                            <select className="form-select" id="a10">
                              <option value={0}>Select</option>
                              <option value={1}>USA</option>
                              <option value={2}>Switzerland</option>
                              <option value={3}>Australia</option>
                              <option value={4}>Japan</option>
                              <option value={5}>New Zealand</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a11">
                              State <span className="text-danger">*</span>
                            </label>
                            <select className="form-select" id="a11">
                              <option value={0}>Select</option>
                              <option value={1}>Alabama</option>
                              <option value={2}>Alaska</option>
                              <option value={3}>Arizona</option>
                              <option value={4}>California</option>
                              <option value={5}>Florida</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a12">
                              Postal Code <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="a12"
                              placeholder="Enter Postal Code"
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="d-flex gap-2 justify-content-end">
                            <a
                              href="staff.html"
                              className="btn btn-outline-secondary"
                            >
                              Cancel
                            </a>
                            <a href="staff.html" className="btn btn-primary">
                              Add Staff Member
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Row ends */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Row ends */}
            </div>
          </div>

          {/* App container ends */}
        </div>
        {/* Main container ends */}
      </div>
      {/* Page wrapper ends */}
      {/* *************
       ************ JavaScript Files *************
       ************* */}
      {/* Required jQuery first, then Bootstrap Bundle JS */}
      {/* *************
       ************ Vendor Js Files *************
       ************* */}
      {/* Overlay Scroll JS */}
      {/* Apex Charts */}
      {/* Custom JS files */}
    </>
  );
};

export default AddStaff;
