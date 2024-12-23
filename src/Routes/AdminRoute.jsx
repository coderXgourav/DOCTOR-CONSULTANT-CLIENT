import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import AddDoctor from "../pages/dashboard/doctor/AddDoctor";
import ViewDoctor from "../pages/dashboard/doctor/ViewDoctor";
import DoctorProfile from "../pages/dashboard/doctor/DoctorProfile";
import ViewPatient from "../pages/dashboard/patient/ViewPatient";
import AddPatient from "../pages/dashboard/patient/AddPatient";
import AddDepartment from "../pages/dashboard/department/AddDepartment";
import ViewDepartment from "../pages/dashboard/department/ViewDepartment";
// import Soon from "../pages/Soon";

const AdminRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/add-doctor" element={<AddDoctor />}></Route>
          <Route path="/view-doctors" element={<ViewDoctor />}></Route>
          <Route path="/doctor" element={<DoctorProfile />}></Route>
          <Route path="/view-patients" element={<ViewPatient />}></Route>
          <Route path="/add-patient" element={<AddPatient />}></Route>
          <Route path="/add-department" element={<AddDepartment />}></Route>
          <Route path="/view-department" element={<ViewDepartment />}></Route>
          {/* <Route path="*" element={<Soon />}></Route> */}
        </Routes>
      </Router>
    </>
  );
};

export default AdminRoute;
