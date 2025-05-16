import { useState } from "react";

const ResumeForm = () => {
  let initialState = {
    name: "",
    address: "",
    district: "",
    phone: "",
    email: "",
    careerObjective: "",
    education: [
      { title: "", college: "", university: "", division: "" },
      { title: "", school: "", board: "", division: "" },
      { title: "", school: "", board: "", division: "" },
    ],
    projects: [{ name: "", details: "", link: "", technology: "" }],
    skills: { office: "", technical: "" },
    hobbies: [],
  };
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("resume"))
      ? JSON.parse(localStorage.getItem("resume"))
      : initialState
  );
  function submitform() {
    localStorage.setItem("resume", JSON.stringify(data));
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleEduChange = (index, field, value) => {
    const updatedEdu = [...data.education];
    updatedEdu[index][field] = value;
    setData({ ...data, education: updatedEdu });
  };

  const handleAddEdu = () => {
    setData({
      ...data,
      education: [
        ...data.education,
        { title: "", school: "", board: "", division: "" },
      ],
    });
  };
  const handleAddPro = () => {
    setData({
      ...data,
      projects: [
        ...data.projects,
        { name: "", details: "", link: "", technology: "" },
      ],
    });
  };
  const handledeletePro = (index) => {
    const updatedPro = [...data.projects];
    updatedPro.splice(index, 1);
    setData({ ...data, projects: updatedPro });
  };
  const handledeleteEdu = (index) => {
    const updatedEdu = [...data.education];
    updatedEdu.splice(index, 1);
    setData({ ...data, education: updatedEdu });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-md">
      <div className="row ps-5 pe-5">
        <div className="col-sm">
          <div>
            <span className="fs-3 me-2 font-bold mb-4">
              Enter Resume Details
            </span>
            <span className="btn btn-outline-info m-2" onClick={submitform}>
              submit
            </span>
          </div>
          <input
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="input form-control"
          />
          <input
            name="address"
            value={data.address}
            onChange={handleChange}
            placeholder="Address"
            className="input form-control"
          />
          <input
            name="district"
            value={data.district}
            onChange={handleChange}
            placeholder="District"
            className="input form-control"
          />
          <input
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="input form-control"
          />
          <input
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
            className="input form-control"
          />
          <textarea
            name="careerObjective"
            value={data.careerObjective}
            onChange={handleChange}
            placeholder="Career Objective"
            className="input form-control"
          />
        </div>
        <div className="col-sm">
          <h3 className="mt-4 font-semibold">Skills</h3>
          <input
            name="office"
            value={data.skills.office}
            onChange={(e) =>
              setData({
                ...data,
                skills: { ...data.skills, office: e.target.value },
              })
            }
            placeholder="Office Automation"
            className="input form-control"
          />
          <input
            name="technical"
            value={data.skills.technical}
            onChange={(e) =>
              setData({
                ...data,
                skills: { ...data.skills, technical: e.target.value },
              })
            }
            placeholder="Technical Skills"
            className="input form-control"
          />

          <h3 className="mt-4 font-semibold">Hobbies (comma-separated)</h3>
          <input
            value={data.hobbies.join(", ")}
            onChange={(e) =>
              setData({
                ...data,
                hobbies: e.target.value.split(",").map((h) => h.trim()),
              })
            }
            placeholder="e.g. Travelling, Listening Songs"
            className="input form-control"
          />
        </div>
      </div>
      <div className="row gap-3 ps-5 pe-5">
        <div className="m-2 ">
          <span className="font-semibold fs-3">Education</span>
          <span onClick={handleAddEdu} className="btn btn-outline-info ms-3">
            Add
          </span>
          <span onClick={handledeleteEdu} className="btn btn-outline-info ms-3">
            delete
          </span>
        </div>
        {data.education.map((edu, index) => (
          <div key={index} className="m-auto col-sm-3 card p-3">
            <input
              value={edu.title}
              onChange={(e) => handleEduChange(index, "title", e.target.value)}
              placeholder="Title"
              className="input form-control"
            />
            <input
              value={edu.college || edu.school}
              onChange={(e) =>
                handleEduChange(index, "college", e.target.value)
              }
              placeholder="College/School"
              className="input form-control"
            />
            <input
              value={edu.university || edu.board}
              onChange={(e) =>
                handleEduChange(index, "university", e.target.value)
              }
              placeholder="University/Board"
              className="input form-control"
            />
            <input
              value={edu.division}
              onChange={(e) =>
                handleEduChange(index, "division", e.target.value)
              }
              placeholder="Division"
              className="input form-control"
            />
          </div>
        ))}
      </div>
      <div className="row gap-3 ps-5 pe-5">
        <div className="m-2">
          <span className="font-semibold fs-3">Projects</span>
          <span onClick={handleAddPro} className="btn btn-outline-info ms-3">
            Add
          </span>
          <span onClick={handledeletePro} className="btn btn-outline-info ms-3">
            delete
          </span>
        </div>

        {data.projects.map((edu, index) => (
          <div key={index} className="border gap-2 m-auto col-2 card p-3 mb-2">
            <input
              value={edu.name}
              onChange={(e) => handleEduChange(index, "title", e.target.value)}
              placeholder="name"
              className="input form-control"
            />
            <input
              value={edu.college || edu.school}
              onChange={(e) =>
                handleEduChange(index, "college", e.target.value)
              }
              placeholder="details"
              className="input form-control"
            />
            <input
              value={edu.university || edu.board}
              onChange={(e) =>
                handleEduChange(index, "university", e.target.value)
              }
              placeholder="link"
              className="input form-control"
            />
            <input
              value={edu.division}
              onChange={(e) =>
                handleEduChange(index, "division", e.target.value)
              }
              placeholder="technology"
              className="input form-control"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeForm;
