import { useState } from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const data = {
    profile: {
      name: "John Doe",
      role: "Full Stack Developer",
      location: "Bay Area, San Francisco, CA",
      avatar: "https://bootdey.com/img/Content/avatar/avatar7.png",
    },
    contact: {
      fullName: "Kenneth Valdez",
      email: "fip@jukmuh.al",
      phone: "(239) 816-9029",
      mobile: "(320) 380-4539",
      address: "Bay Area, San Francisco, CA",
    },
    social: {
      website: "https://bootdey.com",
      github: "bootdey",
      twitter: "@bootdey",
      instagram: "bootdey",
      facebook: "bootdey",
    },
    progress: {
      left: [60, 70, 65, 75, 90],
      right: [50, 65, 60, 70, 85],
      labels: [
        "Web Design",
        "Website Markup",
        "One Page",
        "Mobile Template",
        "Backend API",
      ],
    },
  };
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  const { profile, contact, social, progress } = formData ? formData : data;
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {/* Profile Card */}
          <div className="col-md-4 text-center">
            <div className="card">
              <div className="card-body">
                <img
                  src={profile.avatar}
                  className="rounded-circle mb-3"
                  width="120"
                  alt="Profile"
                />
                <h4>{profile.name}</h4>
                <p className="text-muted">{profile.role}</p>
                <p className="text-muted">{profile.location}</p>
                <button className="btn btn-primary btn-sm me-2">Follow</button>
                <button className="btn btn-outline-primary btn-sm">
                  Message
                </button>
              </div>
            </div>

            {/* Social Links */}
            <ul className="list-group mt-3">
              <li className="list-group-item">
                🌐 Website: <a target="blank" href={social.website}>{social.website}</a>
              </li>
              <li className="list-group-item">💻 Github: <a target="blank" href={social.github}>{social.github}</a></li>
              <li className="list-group-item">🐦 Twitter: <a target="blank" href={social.twitter}>{social.twitter}</a></li>
              <li className="list-group-item">
                📸 Instagram: <a target="blank" href={social.instagram}>{social.instagram}</a>
              </li>
              <li className="list-group-item">
                📘 Facebook: <a target="blank" href={social.facebook}>{social.facebook}</a>
              </li>
            </ul>
          </div>

          {/* Details + Progress */}
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-sm-3">
                    <strong>Full Name</strong>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {contact.fullName}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-3">
                    <strong>Email</strong>
                  </div>
                  <div className="col-sm-9 text-secondary">{contact.email}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-3">
                    <strong>Phone</strong>
                  </div>
                  <div className="col-sm-9 text-secondary">{contact.phone}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-3">
                    <strong>Mobile</strong>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {contact.mobile}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <strong>Address</strong>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {contact.address}
                  </div>
                </div>
                <NavLink to="/editinfo" className="btn btn-outline-info me-2">
                  Edit-Info
                </NavLink>
              </div>
            </div>

            {/* Progress Boxes */}
            <div className="row">
              {/* Left */}
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="mb-3">Project Status</h6>
                    {progress.labels.map((label, index) => (
                      <div key={index} className="mb-2">
                        <small>{label}</small>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: `${progress.left[index]}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="mb-3">Project Status</h6>
                    {progress.labels.map((label, index) => (
                      <div key={index} className="mb-2">
                        <small>{label}</small>
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            style={{ width: `${progress.right[index]}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
