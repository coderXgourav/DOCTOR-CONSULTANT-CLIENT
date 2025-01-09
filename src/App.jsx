import AdminRoute from "./Routes/AdminRoute";
import DoctorRoute from "./Routes/DoctorRoute";
import ManagerRoute from "./Routes/ManagerRoute";
import PatientRoute from "./Routes/PatientRoute";

function App() {
  return (
    <>
      <DoctorRoute />
      <AdminRoute />
      <ManagerRoute />
      <PatientRoute />
    </>
  );
}

export default App;
