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
                  Doctors Cards
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
                <div className="col-sm-12 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      {/* Row starts */}
                      <div className="d-flex align-items-end gap-2">
                        <div className="m-0">
                          <label className="form-label" htmlFor="a1">
                            Doctor Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="a1"
                            placeholder="Search By Doctors Name"
                          />
                        </div>
                        <div className="m-0">
                          <label className="form-label" htmlFor="a2">
                            Department
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="a2"
                            placeholder="Search By Department"
                          />
                        </div>
                        <div className="m-0">
                          <button className="btn btn-primary">Search</button>
                        </div>
                      </div>
                      {/* Row ends */}
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <a
                          href="doctors-profile.html"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user1.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Clive Nathan</h5>
                          <h6 className="text-truncate">
                            Gynecologist, General Physician
                          </h6>
                          <p>8 Years Experience</p>
                        </a>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <a href="/doctor" className="btn btn-primary">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <a
                          href="doctors-profile.html"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user2.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Laura Jaden</h5>
                          <h6>Plastic Surgeon</h6>
                          <p>9 Years Experience</p>
                        </a>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <a href="/doctor" className="btn btn-primary">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <a
                          href="doctors-profile.html"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user3.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Aliko Maria</h5>
                          <h6>Physiotherapist</h6>
                          <p>6 Years Experience</p>
                        </a>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <a href="/doctor" className="btn btn-primary">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <a
                          href="doctors-profile.html"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user4.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Amelia Kim</h5>
                          <h6>Gastroenterologist</h6>
                          <p>7 Years Experience</p>
                        </a>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly4" />
                        </div>
                        <a href="/doctor" className="btn btn-primary">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <a
                          href="doctors-profile.html"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user5.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Emma Monis</h5>
                          <h6>General Surgeon</h6>
                          <p>5 Years Experience</p>
                        </a>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <a href="/doctor" className="btn btn-primary">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <a
                          href="doctors-profile.html"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Olivia</h5>
                          <h6>Bariatric Surgeon</h6>
                          <p>8 Years Experience</p>
                        </a>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <a href="/doctor" className="btn btn-primary">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <a
                          href="doctors-profile.html"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user1.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Kelly Phong</h5>
                          <h6>Ophthalmologist</h6>
                          <p>9 Years Experience</p>
                        </a>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly4" />
                        </div>
                        <a href="/doctor" className="btn btn-primary">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <a
                          href="doctors-profile.html"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user3.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. George Max</h5>
                          <h6>Dermatologist</h6>
                          <p>3 Years Experience</p>
                        </a>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <a href="/doctor" className="btn btn-primary">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <a
                          href="doctors-profile.html"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user4.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Taylor</h5>
                          <h6>Radiologist</h6>
                          <p>8 Years Experience</p>
                        </a>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly3" />
                        </div>
                        <a href="/doctor" className="btn btn-primary">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <a
                          href="doctors-profile.html"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user2.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Bailey</h5>
                          <h6>Dentist</h6>
                          <p>8 Years Experience</p>
                        </a>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <a href="/doctor" className="btn btn-primary">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <a
                          href="doctors-profile.html"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user5.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. OSullivan</h5>
                          <h6>Laparoscopic Surgeon</h6>
                          <p>5 Years Experience</p>
                        </a>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <a href="/doctor" className="btn btn-primary">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <a
                          href="doctors-profile.html"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. OBrien Bui</h5>
                          <h6>Spine Surgeon</h6>
                          <p>6 Years Experience</p>
                        </a>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <a href="/doctor" className="btn btn-primary">
                          View Profile
                        </a>
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
