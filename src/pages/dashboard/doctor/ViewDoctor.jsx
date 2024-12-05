import Topbar from "../../../components/Topbar";
import Sidebar from "../../../components/Sidebar";
const ViewDoctor = () => {
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
                  Patients List
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
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="card-title">Doctores List</h5>
                      <a
                        href="add-patient.html"
                        className="btn btn-primary ms-auto"
                      >
                        Add Doctor
                      </a>
                    </div>
                    <div className="card-body">
                      {/* Table starts */}
                      <div className="table-responsive">
                        <table
                          id="basicExample"
                          className="table truncate m-0 align-middle"
                        >
                          <thead>
                            <tr>
                              <th>No.</th>
                              <th>Doctor Name</th>
                              <th>Gender</th>
                              <th>Exprience</th>
                              <th>Mobile</th>
                              <th>Email</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>#89990</td>
                              <td>
                                <img
                                  src="assets/images/patient.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Medical Admin Template"
                                />
                                Allan Stuart
                              </td>
                              <td>
                                <span className="badge bg-info-subtle text-info">
                                  Male
                                </span>
                              </td>
                              <td>2 Years</td>
                              <td>0987654321</td>
                              <td>test@testing.com</td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <a
                                    href="edit-patient.html"
                                    className="btn btn-outline-success btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Patient Details"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </a>
                                  <a
                                    href="/doctor"
                                    className="btn btn-outline-info btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="View Dashboard"
                                  >
                                    <i className="ri-eye-line" />
                                  </a>
                                </div>
                              </td>
                            </tr>
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
                              Are you sure you want to delete the patient?
                            </div>
                            <div className="modal-footer">
                              <div className="d-flex justify-content-end gap-2">
                                <button
                                  className="btn btn-outline-secondary"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  No
                                </button>
                                <button
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  Yes
                                </button>
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

export default ViewDoctor;
