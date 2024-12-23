import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorLogin from "../pages/doctor/DoctorLogin";
import DoctorSignUp from "../pages/doctor/DoctorSignup";

const DoctorRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/doctor/signup" element={<DoctorSignUp />} />
      </Routes>
    </Router>
  );
};

export default DoctorRoute;
