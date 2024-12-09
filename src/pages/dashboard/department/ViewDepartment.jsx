import Sidebar from "../../../components/Sidebar";
import Topbar from "../../../components/Topbar";
import { getAPI, deleteAPI } from "../../../API/commonAPI";
import { useState, useEffect } from "react";
import { Spin } from "antd";

const ViewDepartment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);
  let no = 1;
  const fetchDepartment = async () => {
    setLoading(true);
    const result = await getAPI("department/all-department");
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchDepartment();
  }, []);

  const deleteDepartment = (id) => {
    setId(id);
  };
  const confirmDelete = (deleteId) => {
    deleteAPI("department/delete-department", { id: deleteId });
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
                  Departments List
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
                {/* <div className="col-sm-6">
                  <div className="card mb-3">
                    <div className="card-header">
                      <h5 className="card-title">Departments</h5>
                    </div>
                    <div className="card-body">
                      <div className="chart-height-lg">
                        <div
                          id="total-department"
                          className="auto-align-graph"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card mb-3">
                    <div className="card-header">
                      <h5 className="card-title">Employees</h5>
                    </div>
                    <div className="card-body">
                      <div className="chart-height-lg">
                        <div id="employees" className="auto-align-graph" />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="card-title">Department List</h5>
                      <a
                        href="/add-department"
                        className="btn btn-primary ms-auto"
                      >
                        Add Department
                      </a>
                    </div>
                    <div className="card-body">
                      {/* Table starts */}
                      <div className="table-responsive">
                        <table
                          id="basicExample"
                          className="table m-0 align-middle"
                        >
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Department</th>
                              <th>Doctors List</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {loading ? (
                              <td colSpan={4} style={{ textAlign: "center" }}>
                                {" "}
                                <Spin spinning={loading} size="large"></Spin>
                              </td>
                            ) : data.length > 0 ? (
                              data.map((item) => (
                                <tr key={item._id}>
                                  <td>{no++}</td>
                                  <td>{item.department}</td>
                                  <td>
                                    <div className="stacked-images">
                                      <img
                                        src="assets/images/user.png"
                                        alt="Medical Dashboard"
                                      />
                                      <img
                                        src="assets/images/user2.png"
                                        alt="Medical Dashboard"
                                      />
                                      <img
                                        src="assets/images/user3.png"
                                        alt="Medical Dashboard"
                                      />
                                      <span className="plus bg-primary">
                                        +5
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-inline-flex gap-1">
                                      <button
                                        className="btn btn-outline-danger btn-sm rounded-5"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delRow"
                                        onClick={() => {
                                          deleteDepartment(item._id);
                                        }}
                                      >
                                        <i className="ri-delete-bin-line" />
                                      </button>
                                      <a
                                        href="edit-department.html"
                                        className="btn btn-outline-success btn-sm rounded-5"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Edit Department"
                                      >
                                        <i className="ri-edit-box-line" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td
                                  colSpan={4}
                                  style={{
                                    textAlign: "center",
                                    color: "red",
                                  }}
                                >
                                  Departments not found..
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                      {/* Table ends */}
                      {/* Modal Delete Row */}
                      <div
                        className="modal fade"
                        id="delRow"
                        tabIndex={-1}
                        aria-labelledby="delRowLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-sm">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="delRowLabel">
                                Confirm
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              Are you sure you want to delete the department?
                            </div>
                            <div className="modal-footer">
                              <div className="d-flex justify-content-end gap-2">
                                <a
                                  href="departments-list.html"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  No
                                </a>
                                <a
                                  href="departments-list.html"
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                  onClick={() => confirmDelete(id)}
                                >
                                  Yes
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ViewDepartment;
