import Topbar from "../../../components/Topbar";
import Sidebar from "../../../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import { message, Spin } from "antd"; // Import Spin from Ant Design

const ViewDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  // const [pagination, setPagination] = useState({
  //   totalDoctors: 0,
  //   currentPage: 1,
  //   totalPages: 1,
  // });

  const [selectedDoctorId, setSelectedDoctorId] = useState(null); // Store selected doctor ID
  const [loading, setLoading] = useState(false); // State for loading spinner

  useEffect(() => {
    // Fetch doctors when the component mounts
    fetchDoctors();
  }, []);

  // Function to fetch doctors from the API
  const fetchDoctors = async () => {
    setLoading(true); // Show loading spinner
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/doctor/get-doctor`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.status) {
        setDoctors(response.data.doctors);
        // setPagination(response.data.pagination);
      } else {
        console.error("Failed to fetch doctors:", response.data.desc);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false); // Hide loading spinner after request completes
    }
  };

  // Function to delete doctor using Axios
  const deleteDoctor = async () => {
    setLoading(true); // Show loading spinner during deletion
    try {
      const response = await axios.delete(
        `${
          import.meta.env.VITE_API_URL
        }/doctor/delete-doctor/${selectedDoctorId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const { message } = response.data;
      message.success(message);
      fetchDoctors();
    } catch (error) {
      // Handle error in case of exception
      console.error("Error deleting doctor:", error);
      message.error("Error deleting doctor");
    } finally {
      setLoading(false); // Hide loading spinner after operation
    }
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
                  Doctors List
                </li>
              </ol>
              {/* Breadcrumb ends */}
            </div>
            {/* App Hero header ends */}
            {/* App body starts */}
            <div className="app-body">
              <div className="row gx-3">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="card-title">Doctors List</h5>
                      <a href="/add-doctor" className="btn btn-primary ms-auto">
                        Add Doctor
                      </a>
                    </div>
                    <div className="card-body">
                      {/* Table starts */}
                      <div className="table-responsive">
                        <Spin spinning={loading} size="large">
                          <table
                            id="basicExample"
                            className="table truncate m-0 align-middle"
                          >
                            <thead>
                              <tr>
                                <th>No.</th>
                                <th>Doctor Name</th>
                                <th>Gender</th>
                                <th>Experience</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {doctors.map((doctor, index) => (
                                <tr key={doctor._id}>
                                  <td>{index + 1}</td>
                                  <td>
                                    <img
                                      src="assets/images/patient.png"
                                      className="img-shadow img-2x rounded-5 me-1"
                                      alt={doctor.firstName}
                                    />
                                    {doctor.firstName} {doctor.lastName}
                                  </td>
                                  <td>
                                    <span className="badge bg-info-subtle text-info">
                                      {doctor.gender}
                                    </span>
                                  </td>
                                  <td>{doctor.experience} Years</td>
                                  <td>{doctor.mobile}</td>
                                  <td>{doctor.email}</td>
                                  <td>
                                    <div className="d-inline-flex gap-1">
                                      <button
                                        className="btn btn-outline-danger btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delRow"
                                        onClick={() =>
                                          setSelectedDoctorId(doctor._id)
                                        } // Set selected doctor ID
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
                              ))}
                            </tbody>
                          </table>
                        </Spin>
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
                              Are you sure you want to delete this doctor?
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
                                  onClick={deleteDoctor} // Trigger delete function on button click
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
          </div>
          {/* App container ends */}
        </div>
        {/* Main container ends */}
      </div>
    </>
  );
};

export default ViewDoctor;
