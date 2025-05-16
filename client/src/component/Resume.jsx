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
      <div className="card fs-3">CURRICULUM VITAE</div>
      <div className="card p-3 col-md-12">
        <h4 className="">{data.name}</h4>
        <p>{data.address}</p>
        <p>{data.district}</p>
        <p>Mobile: {data.phone}</p>
        <p>Email: {data.email}</p>
      </div>
      {/* Career Objective */}
      <section className="mt-6">
        <h3 className="bg-gray-300 px-2 py-1 font-bold border border-gray-600">
          CAREER OBJECTIVES:
        </h3>
        <p className="mt-2 text-justify">{data.careerObjective}</p>
      </section>
      {/* Academic Details */}
      <section className="mt-6">
        <h3 className="bg-gray-300 px-2 py-1 font-bold border border-gray-600">
          ACADEMIC DETAILS:
        </h3>
        {data.education.map((edu, idx) => (
          <div key={idx} className="mt-4 pl-4">
            <p className="font-bold">{edu.title}</p>
            <p>
              {edu.college || edu.school} <br />
              {edu.university || edu.board} <br />
              Division: {edu.division}
            </p>
          </div>
        ))}
      </section>
      {/* Computer Proficiency */}
      <section className="mt-6">
        <h3 className="bg-gray-300 px-2 py-1 font-bold border border-gray-600">
          COMPUTER PROFICIENCY:
        </h3>
        <ul className="list-disc ml-6 mt-2">
          <li>Office Automation: {data.skills.office}</li>
          <li>Technical Knowledge: {data.skills.technical}</li>
        </ul>
      </section>
      {/* Hobbies & Interests */}
      <section className="mt-6 mb-4">
        <h3 className="bg-gray-300 px-2 py-1 font-bold border border-gray-600">
          HOBBIES & INTERESTS:
        </h3>
        <ul className="list-disc ml-6 mt-2">
          {data.hobbies.map((hobby, i) => (
            <li key={i}>{hobby}</li>
          ))}
        </ul>
      </section>
    </div>,
    <div className="border border-gray-400 p-6 shadow-md rounded-md bg-white">
      <h2 className="text-2xl font-bold text-center border-b pb-2">
        Curriculum Vitae
      </h2>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{data.name}</h3>
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
    <div className="grid grid-cols-3 gap-6 bg-gray-50 p-6 shadow-lg rounded">
      {/* Left Sidebar */}
      <div className="col-span-1 bg-gray-200 p-4 rounded">
        <h3 className="font-bold text-lg">{data.name}</h3>
        <p className="text-sm">
          {data.address}, {data.district}
        </p>
        <p className="text-sm">📞 {data.phone}</p>
        <p className="text-sm">📧 {data.email}</p>

        <div className="mt-4">
          <h4 className="font-semibold underline">Skills</h4>
          <p className="text-sm">Office: {data.skills.office}</p>
          <p className="text-sm">Technical: {data.skills.technical}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-2">
        <h3 className="text-xl font-bold mb-2">Career Objective</h3>
        <p className="text-justify">{data.careerObjective}</p>

        <h3 className="text-xl font-bold mt-4">Academic Details</h3>
        {data.education.map((edu, idx) => (
          <div key={idx} className="mt-2 pl-2 border-l-4 border-blue-500">
            <p className="font-bold">{edu.title}</p>
            <p className="text-sm">{edu.college || edu.school}</p>
            <p className="text-sm">{edu.university || edu.board}</p>
            <p className="text-sm">Division: {edu.division}</p>
          </div>
        ))}
      </div>
    </div>,
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300">
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
        <h3 className="font-semibold text-lg mb-1">Career Objective</h3>
        <p className="text-sm text-justify">{data.careerObjective}</p>
      </div>
      <hr className="my-4" />
      <div>
        <h3 className="font-semibold text-lg mb-1">Education</h3>
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
    <div className="bg-gray-900 text-gray-100 p-6 rounded shadow-lg">
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
        <h3 className="text-yellow-300 font-bold border-b border-yellow-400 pb-1 mb-2">
          Career Objective
        </h3>
        <p className="text-justify">{data.careerObjective}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-yellow-300 font-bold border-b border-yellow-400 pb-1 mb-2">
          Education
        </h3>
        {data.education.map((edu, i) => (
          <div key={i} className="mb-3">
            <p className="font-semibold">{edu.title}</p>
            <p>{edu.college || edu.school}</p>
            <p>{edu.university || edu.board}</p>
            <p>Division: {edu.division}</p>
          </div>
        ))}
      </div>
    </div>,
    <div className="p-6 bg-white max-w-4xl mx-auto space-y-6">
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
        <h3 className="text-lg font-bold mb-2">Career Objective</h3>
        <p className="text-justify text-sm">{data.careerObjective}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow">
        <h3 className="text-lg font-bold mb-2">Academic Details</h3>
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
        <h3 className="text-lg font-bold mb-2">Skills</h3>
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
