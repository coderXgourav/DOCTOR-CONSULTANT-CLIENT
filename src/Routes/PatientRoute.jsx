import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientLogin from "../pages/patient/PatientLogin";
import Dashboard from "../pages/patient/dashboard/Dashboard";
const PatientRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/patient/login" element={<PatientLogin />}></Route>
        <Route path="/patient/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
};
export default PatientRoute;
