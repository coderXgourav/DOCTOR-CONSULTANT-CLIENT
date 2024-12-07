import Sidebar from "../../../components/Sidebar";
import Topbar from "../../../components/Topbar";
import { postAPI } from "../../../API/commonAPI";
import { useState } from "react";
const AddDepartment = () => {
  const [department, setDepartment] = useState({ name: "", desc: "" });
  const textChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name == "name") {
      setDepartment({ ...department, name: value });
    } else {
      setDepartment({ ...department, desc: value });
    }
  };

  const departmentFormHandler = (event) => {
    event.preventDefault();
    postAPI("department/add", department);
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
                  Add Department
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
            <form onSubmit={departmentFormHandler}>
              <div className="app-body">
                {/* Row starts */}
                <div className="row gx-3">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title">Add Department</h5>
                      </div>
                      <div className="card-body">
                        {/* Row starts */}
                        <div className="row gx-3">
                          <div>
                            <div className="col-xxl-6 col-lg-6 col-sm-6">
                              <div className="mb-3">
                                <label className="form-label" htmlFor="a1">
                                  Department Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="a1"
                                  name="name"
                                  placeholder="Enter Department Name"
                                  onChange={textChangeHandler}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="a7">
                                Description
                              </label>
                              <textarea
                                className="form-control"
                                id="a7"
                                placeholder="Enter message"
                                rows={3}
                                defaultValue={""}
                                name="desc"
                                onChange={textChangeHandler}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="col-sm-6">
                              <div className="d-flex gap-2 justify-content-end">
                                <a className="btn btn-outline-secondary">
                                  Cancel
                                </a>
                                <button className="btn btn-primary">
                                  Add Department
                                </button>
                              </div>
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
            </form>
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

export default AddDepartment;
