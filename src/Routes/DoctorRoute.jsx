import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorLogin from "../pages/doctor/DoctorLogin";
import DoctorSignUp from "../pages/doctor/DoctorSignup";
import Dashboard from "../pages/doctor/dashboard/Dashboard";
import PatientView from "../pages/doctor/dashboard/PatientView";
import AddStaff from "../pages/doctor/dashboard/AddStaff";
import ViewStaff from "../pages/doctor/dashboard/ViewStaff";

const DoctorRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/doctor/signup" element={<DoctorSignUp />} />
        <Route path="/doctor/dashboard" element={<Dashboard />} />
        <Route path="/doctor/view-patients" element={<PatientView />} />
        <Route path="/doctor/add-staff" element={<AddStaff />} />
        <Route path="/doctor/view-appoinment-manager" element={<ViewStaff />} />
      </Routes>
    </Router>
  );
};

export default DoctorRoute;
