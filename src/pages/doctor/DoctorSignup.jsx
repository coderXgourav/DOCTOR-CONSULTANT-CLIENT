import { useEffect, useState } from "react";
import { Spin, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { postAPI } from "../../API/commonAPI";

const DoctorSignUp = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      location.href = "/doctor/dashboard";
    }
  }, []);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    usernmae: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [btn, setBtn] = useState("Sign Up");
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const openNotification = (status, title, desc) => {
    if (status) {
      api.success({
        message: title,
        description: desc,
      });
    } else {
      api.error({
        message: title,
        description: desc,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setBtn("Please wait...");

    const {
      firstname,
      lastname,
      gender,
      email,
      phone,
      password,
      confirmPassword,
      username,
    } = formData;

    if (
      !firstname ||
      !lastname ||
      !gender ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword ||
      !username
    ) {
      openNotification(false, "Fill Details", "Please fill all the fields");
      setLoading(false);
      setBtn("Sign Up");
      return;
    }
    if (password != confirmPassword) {
      openNotification(
        false,
        "Password Mismatch",
        "Password and Confirm Password should be same"
      );
      setLoading(false);
      setBtn("Sign Up");
      return;
    }

    const response = await postAPI("doctor/add-doctor", formData);
    const { status, message, desc } = response;

    if (status) {
      openNotification(status, message, desc);
      setTimeout(() => {
        navigate("/doctor/dashboard");
      }, 1500);
    } else {
      openNotification(status, message, desc);
    }
    setLoading(false);
    setBtn("Sign Up");
  };

  return (
    <>
      {contextHolder}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          background: "rgb(53 55 57)",
        }}
      >
        <Spin spinning={loading} size="large">
          <form onSubmit={signUpHandler}>
            <div className="auth-box" style={{ width: "800px" }}>
              <h4 className="mb-4">Doctor Sign Up</h4>
              <div className="mb-3">
                <label className="form-label" htmlFor="firstname">
                  First Name <span className="text-danger">*</span>
                </label>

                <input
                  type="text"
                  id="firstname"
                  className="form-control"
                  placeholder="Enter your first name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="lastname">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="form-control"
                  placeholder="Enter your last name"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="gender">
                  Gender <span className="text-danger">*</span>
                </label>
                <select
                  id="gender"
                  className="form-control"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  autoComplete="off"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Username <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="phone">
                  Phone Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Confirm Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3 d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  {btn}
                </button>
                <a href="/doctor/login" className="btn btn-secondary">
                  Already registered? Login
                </a>
              </div>
            </div>
          </form>
        </Spin>
      </div>
    </>
  );
};

export default DoctorSignUp;
