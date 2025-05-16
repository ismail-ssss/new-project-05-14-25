import { useState } from "react";
import { NavLink } from "react-router-dom";

const Resume = () => {
  const [data] = useState({
    name: "SHAHBAJ AHMAD",
    address: "Subhash Nagar, Bermo, Bokaro",
    district: "Dist- Bokaro-829124 (Jharkhand)",
    phone: "9999999999",
    email: "youremail@gmail.com",
    careerObjective:
      "Aim to be associated with a progressive organization which offers an excellent atmosphere to prove myself by utilizing all technical knowledge into practice and profit myself with experience and valuable knowledge for the development and growth of the organization.",
    education: [
      {
        title: "B.COM (ACCOUNTS HONS)",
        college: "R.V.S. (B.S.CITY)",
        university: "Vinoba Bhave University Hazaribagh",
        division: "2nd",
      },
      {
        title: "INTERMEDIATE",
        school: "Ananda College, Hazaribagh (Jharkhand)",
        board: "J.A.C.",
        division: "2nd",
      },
      {
        title: "SECONDARY SCHOOL CERTIFICATE (SSC)",
        school: "Ram Ratan High School (Jharkhand)",
        board: "J.A.C",
        division: "2nd",
      },
    ],
    skills: {
      office: "Microsoft Office 2007, 2003",
      technical: "Tally, Typing",
    },
    hobbies: ["Interact with people", "Travelling", "Listening Hollywood Song"],
  });

  const pattern = [
    <div className="gap-2 ps-5 row container-fluid">
      <h5 className="card p-2" style={{ backgroundColor: "#adb5bd" }}>
        CURRICULUM VITAE
      </h5>
      <div className="card p-3 col-md-12 ">
        <h4 className="">{data.name}</h4>
        <p>{data.address}</p>
        <p>{data.district}</p>
        <p>Mobile: {data.phone}</p>
        <p>Email: {data.email}</p>
      </div>
      {/* Career Objective */}
      <div className="p-0">
        <h5 className="card p-2" style={{ backgroundColor: "#adb5bd" }}>
          CAREER OBJECTIVES:
        </h5>
        <p className="text-justify">{data.careerObjective}</p>
      </div>
      {/* Academic Details */}
      <section className="p-0">
        <h5 className="card p-2" style={{ backgroundColor: "#adb5bd" }}>
          ACADEMIC DETAILS:
        </h5>
        <ul>
          {data.education.map((edu, idx) => (
            <div key={idx} className="mt-4 pl-4">
              <li>{edu.title}</li>
              <p>
                {edu.college || edu.school} <br />
                {edu.university || edu.board} <br />
                Division: {edu.division}
              </p>
            </div>
          ))}
        </ul>
      </section>
      {/* Computer Proficiency */}
      <section className="p-0">
        <h5 className="card p-2" style={{ backgroundColor: "#adb5bd" }}>
          COMPUTER PROFICIENCY:
        </h5>
        <ul className="list-disc ml-6 mt-2">
          <li>Office Automation: {data.skills.office}</li>
          <li>Technical Knowledge: {data.skills.technical}</li>
        </ul>
      </section>
      {/* Hobbies & Interests */}
      <section className="p-0">
        <h5 className="card p-2" style={{ backgroundColor: "#adb5bd" }}>
          HOBBIES & INTERESTS:
        </h5>
        <ul className="list-disc ml-6 mt-2">
          {data.hobbies.map((hobby, i) => (
            <li key={i}>{hobby}</li>
          ))}
        </ul>
      </section>
    </div>,
    <div className="card m-3 p-3 ">
      <h2 className="text-center">Curriculum Vitae</h2>
      <div className="mt-4 text-center">
        <h5 className="text-lg font-semibold">{data.name}</h5>
        <p>
          {data.address}, {data.district}
        </p>
        <p>
          Phone: {data.phone} | Email: {data.email}
        </p>
      </div>
      <div className="mt-6">
        <h4 className="font-bold underline">Career Objective</h4>
        <p className="mt-2 text-justify">{data.careerObjective}</p>
      </div>
    </div>,
    <div className="p-3">
      {/* Left Sidebar */}

      <ul>
        <h5 className="font-bold text-lg">{data.name}</h5>
        <li className="text-sm">
          {data.address}, {data.district}
        </li>
        <li className="text-sm">📞 {data.phone}</li>
        <li className="text-sm">📧 {data.email}</li>
      </ul>
      <ul className="mt-4">
        <h4 className="font-semibold underline">Skills</h4>
        <li className="text-sm">Office: {data.skills.office}</li>
        <li className="text-sm">Technical: {data.skills.technical}</li>
      </ul>

      {/* Main Content */}
      <div className="col-span-2">
        <h5 className="text-xl font-bold mb-2">Career Objective</h5>
        <p className="text-justify">{data.careerObjective}</p>

        <h5 className="text-xl font-bold mt-4">Academic Details</h5>
        {data.education.map((edu, idx) => (
          <ul key={idx} className="mt-2 pl-2 border-l-4 border-blue-500">
            <li className="font-bold">{edu.title}</li>
            <p className="text-sm">{edu.college || edu.school}</p>
            <p className="text-sm">{edu.university || edu.board}</p>
            <p className="text-sm">Division: {edu.division}</p>
          </ul>
        ))}
      </div>
    </div>,
    <div className="m-5 max-w-3xl  p-5 bg-white shadow-lg rounded-lg border border-gray-300">
      <h1 className="text-2xl font-bold text-center mb-6">Resume</h1>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{data.name}</h2>
        <p>
          {data.address}, {data.district}
        </p>
        <p>
          Phone: {data.phone} | Email: {data.email}
        </p>
      </div>
      <hr className="my-4" />
      <div>
        <h5 className="font-semibold text-lg mb-1">Career Objective</h5>
        <p className="text-sm text-justify">{data.careerObjective}</p>
      </div>
      <hr className="my-4" />
      <div>
        <h5 className="font-semibold text-lg mb-1">Education</h5>
        {data.education.map((edu, i) => (
          <div key={i} className="mb-2">
            <p className="font-bold">{edu.title}</p>
            <p className="text-sm">{edu.college || edu.school}</p>
            <p className="text-sm">{edu.university || edu.board}</p>
            <p className="text-sm">Division: {edu.division}</p>
          </div>
        ))}
      </div>
    </div>,
    <div className="m-5  bg-gray-900 text-gray-100 p-5 rounded shadow-lg">
      <h1 className="text-3xl font-bold text-center text-yellow-400">Resume</h1>
      <div className="mt-4">
        <h2 className="text-lg font-bold">{data.name}</h2>
        <p>
          {data.address}, {data.district}
        </p>
        <p>
          {data.phone} | {data.email}
        </p>
      </div>
      <div className="mt-6">
        <h5 className="text-yellow-300 font-bold border-b border-yellow-400 pb-1 mb-2">
          Career Objective
        </h5>
        <p className="text-justify">{data.careerObjective}</p>
      </div>
      <div className="mt-6">
        <h5 className="text-yellow-300 font-bold border-b border-yellow-400 pb-1 mb-2">
          Education
        </h5>
        {data.education.map((edu, i) => (
          <ul key={i} className="mb-3">
            <li className="font-semibold">{edu.title}</li>
            <p>{edu.college || edu.school}</p>
            <p>{edu.university || edu.board}</p>
            <p>Division: {edu.division}</p>
          </ul>
        ))}
      </div>
    </div>,
    <div className="p-5 bg-white max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Curriculum Vitae</h2>
        <p>{data.name}</p>
        <p>
          {data.address}, {data.district}
        </p>
        <p>
          {data.phone} | {data.email}
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow">
        <h5 className="text-lg font-bold mb-2">Career Objective</h5>
        <p className="text-justify text-sm">{data.careerObjective}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow">
        <h5 className="text-lg font-bold mb-2">Academic Details</h5>
        {data.education.map((edu, i) => (
          <div key={i} className="text-sm mb-3">
            <strong>{edu.title}</strong>
            <p>{edu.college || edu.school}</p>
            <p>{edu.university || edu.board}</p>
            <p>Division: {edu.division}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-4 rounded shadow">
        <h5 className="text-lg font-bold mb-2">Skills</h5>
        <p>Office: {data.skills.office}</p>
        <p>Technical: {data.skills.technical}</p>
      </div>
    </div>,
  ];
  const [count, setcount] = useState(0);
  function countInc() {
    if (count < pattern.length - 1) {
      setcount(count + 1);
    } else {
      setcount(0);
    }
  }
  function countDec() {
    if (count > 0) {
      setcount(count - 1);
    } else {
      setcount(pattern.length - 1);
    }
  }
  return (
    <>
      <div className="ms-5 m-2">
        <button onClick={countDec} className="btn btn-outline-info">
          {"<"}
        </button>
        <button onClick={countInc} className="btn btn-outline-info">
          {">"}
        </button>
        <NavLink to="/resumeform" className="btn btn-outline-info ms-2">
          Edit Info
        </NavLink>
      </div>
      {pattern[count]}
    </>
  );
};

export default Resume;
