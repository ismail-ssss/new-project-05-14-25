import { useState } from "react";
import { NavLink } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { data } from "../js/handleButtons";

const Profile = () => {
  const [formData] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo"))
      : data
  );
  const { profile, social, avatar, progress } = formData;
  const handleDownload = async () => {
    const input = document.getElementById("content");
    if (!input) return;
    try {
      const canvas = await html2canvas(input, {
        useCORS: true,
        scale: 2,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    }
  };

  return (
    <>
      <div className="container  card p-4" id="content">
        <div className="row">
          {/* Profile Card */}
          <div className="col-md-4 text-center">
            <div className="card">
              <div className="card-body">
                <img
                  src={avatar}
                  className="rounded-circle mb-3"
                  width="120"
                  alt="Profile"
                />
                <h4>{profile[0].value}</h4>
                <p className="text-muted">{profile[1].value}</p>
                <p className="text-muted">{profile[2].value}</p>
                <button className="btn btn-primary btn-sm me-2">Follow</button>
                <button className="btn btn-outline-primary btn-sm">
                  Message
                </button>
              </div>
            </div>

            {/* Social Links */}
            <ul className="list-group mt-3">
              {social.map((item, index) => (
                <li key={index } className="list-group-item">
                  {item.key+" : "}
                  <a target="blank" href={item.value}>
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Details + Progress */}
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                {profile.map((item, index) => (
                  <div key={index} className="row mb-2">
                    <div className="col-sm-3">
                      <strong>{item.key}</strong>
                    </div>
                    <div className="col-sm-9 text-secondary">{item.value}</div>
                  </div>
                ))}
                <NavLink to="/editinfo" className="btn btn-outline-info me-2">
                  Edit-Info
                </NavLink>
                <button
                  className="btn btn-outline-info me-2"
                  onClick={handleDownload}
                >
                  Download as PDF
                </button>
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
