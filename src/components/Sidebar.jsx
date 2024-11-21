const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar-wrapper">
      {/* Sidebar profile starts */}
      <div className="sidebar-profile">
        <img
          src="assets/images/user6.png"
          className="img-shadow img-3x me-3 rounded-5"
          alt="Hospital Admin Templates"
        />
        <div className="m-0">
          <h5 className="mb-1 profile-name text-nowrap text-truncate">
            Nick Gonzalez
          </h5>
          <p className="m-0 small profile-name text-nowrap text-truncate">
            Dept Admin
          </p>
        </div>
      </div>
      {/* Sidebar profile ends */}
      {/* Sidebar menu starts */}
      <div className="sidebarMenuScroll">
        <ul className="sidebar-menu">
          <li className="active current-page">
            <a href="/dashboard">
              <i className="ri-home-6-line" />
              <span className="menu-text"> Dashboard</span>
            </a>
          </li>

          <li className="treeview">
            <a href="javascript:void(0)">
              <i className="ri-stethoscope-line" />
              <span className="menu-text">Doctors</span>
            </a>
            <ul className="treeview-menu">
              <li>
                <a href="/view-doctors">View Doctors</a>
              </li>
              <li>
                <a href="/add-doctor">Add Doctor</a>
              </li>
            </ul>
          </li>
          <li className="treeview">
            <a href="#!">
              <i className="ri-heart-pulse-line" />
              <span className="menu-text">Patients</span>
            </a>
            <ul className="treeview-menu">
              <li>
                <a href="/view-patients">Patients List</a>
              </li>
              <li>
                <a href="/add-patient">Add Patient</a>
              </li>
            </ul>
          </li>

          <li className="treeview">
            <a href="#!">
              <i className="ri-dossier-line" />
              <span className="menu-text">Appointments</span>
            </a>
            <ul className="treeview-menu">
              <li>
                <a href="appointments.html">Appointments</a>
              </li>
              <li>
                <a href="appointments-list.html">Appointments List</a>
              </li>
            </ul>
          </li>
          <li className="treeview">
            <a href="#!">
              <i className="ri-building-2-line" />
              <span className="menu-text">Departments</span>
            </a>
            <ul className="treeview-menu">
              <li>
                <a href="/view-department">Departments List</a>
              </li>
              <li>
                <a href="/add-department">Add Department</a>
              </li>
            </ul>
          </li>
          <li className="treeview">
            <a href="#!">
              <i className="ri-secure-payment-line" />
              <span className="menu-text">Payments</span>
            </a>
            <ul className="treeview-menu">
              <li>
                <a href="income.html">Successfull Payments</a>
              </li>
              <li>
                <a href="payments.html">Failed Payments</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="settings.html">
              <i className="ri-settings-5-line" />
              <span className="menu-text"> Settings</span>
            </a>
          </li>
          <li>
            <a href="settings.html">
              <i className="ri-settings-5-line" />
              <span className="menu-text"> Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Sidebar;
