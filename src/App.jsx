import AdminRoute from "./Routes/AdminRoute";
import DoctorRoute from "./Routes/DoctorRoute";
import ManagerRoute from "./Routes/ManagerRoute";

function App() {
  return (
    <>
      <DoctorRoute />
      <AdminRoute />
      <ManagerRoute/>
    </>
  );
}

export default App;
