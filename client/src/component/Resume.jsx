import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useRef, useState } from "react";

const Resume = () => {
  const info = {
    profile: {
      name: "SHAHBAJ AHMAD",
      role: "Full Stack Developer",
      address: "Subhash Nagar, Bermo, Bokaro",
      district: "Dist- Bokaro-829124 (Jharkhand)",
      phone: "9999999999",
      email: "youremail@gmail.com",
      avatar: "https://bootdey.com/img/Content/avatar/avatar7.png",
    },
    careerObjective:
      "Aim to be associated with a progressive organization which offers an excellent atmosphere to prove myself by utilizing all technical knowledge into practice and profit myself with experience and valuable knowledge for the development and growth of the organization.",
    education: [
      {
        course: "B.COM (ACCOUNTS HONS)",
        yearOfPass: "2024",
        percentage: "",
        university: "Vinoba Bhave University Hazaribagh",
        division: "2nd",
      },
    ],
    skills: {
      office: "Microsoft Office 2007, 2003",
      technical: "Tally, Typing",
    },
    hobbies: ["Interact with people", "Travelling", "Listening Hollywood Song"],
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
  const [data] = useState(info);
  const pattern = [
    <div className="gap-2 p-5 row container-fluid" id="1" key={1}>
      <h5 className="card p-2" style={{ backgroundColor: "#adb5bd" }}>
        CURRICULUM VITAE
      </h5>
      <div className="card p-3 col-md-12 ">
        <h4 className="">{data.profile.name}</h4>
        <p>{data.profile.address}</p>
        <p>{data.profile.district}</p>
        <p>Mobile: {data.profile.phone}</p>
        <p>Email: {data.profile.email}</p>
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
              <li>{edu.course}</li>
              <p>
                {edu.yearOfPass} <br />
                {edu.university} <br />
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
    <div className="card m-3 p-3 " id="2" key={2}>
      <h2 className="text-center">Curriculum Vitae</h2>
      <div className="mt-4 text-center">
        <h5 className="text-lg font-semibold">{data.profile.name}</h5>
        <p>
          {data.profile.address}, {data.profile.district}
        </p>
        <p>
          Phone: {data.profile.phone} | Email: {data.profile.email}
        </p>
      </div>
      <div className="mt-6">
        <h4 className="font-bold underline">Career Objective</h4>
        <p className="mt-2 text-justify">{data.careerObjective}</p>
      </div>
    </div>,
    <div className="p-3" id="3" key={3}>
      {/* Left Sidebar */}

      <ul>
        <h5 className="font-bold text-lg">{data.profile.name}</h5>
        <li className="text-sm">
          {data.profile.address}, {data.profile.district}
        </li>
        <li className="text-sm">📞 {data.profile.phone}</li>
        <li className="text-sm">📧 {data.profile.email}</li>
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
            <li className="font-bold">{edu.course}</li>
            <p className="text-sm">{edu.yearOfPass}</p>
            <p className="text-sm">{edu.university}</p>
            <p className="text-sm">Division: {edu.division}</p>
          </ul>
        ))}
      </div>
    </div>,
    <div id="4" className="m-5 max-w-3xl  p-5 bg-white shadow-lg rounded-lg border border-gray-300" key={4}>
      <h1 className="text-2xl font-bold text-center mb-6">Resume</h1>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{data.profile.name}</h2>
        <p>
          {data.profile.address}, {data.profile.district}
        </p>
        <p>
          Phone: {data.profile.phone} | Email: {data.profile.email}
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
            <p className="font-bold">{edu.course}</p>
            <p className="text-sm">{edu.yearOfPass}</p>
            <p className="text-sm">{edu.university}</p>
            <p className="text-sm">Division: {edu.division}</p>
          </div>
        ))}
      </div>
    </div>,
    <div id="5" className="m-5  bg-gray-900 text-gray-100 p-5 rounded shadow-lg" key={5}>
      <h1 className="text-3xl font-bold text-center text-yellow-400">Resume</h1>
      <div className="mt-4">
        <h2 className="text-lg font-bold">{data.profile.name}</h2>
        <p>
          {data.profile.address}, {data.profile.district}
        </p>
        <p>
          {data.profile.phone} | {data.profile.email}
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
            <li className="font-semibold">{edu.course}</li>
            <p>{edu.yearOfPass}</p>
            <p>{edu.university}</p>
            <p>Division: {edu.division}</p>
          </ul>
        ))}
      </div>
    </div>,
    <div id="6" className="p-5 bg-white max-w-4xl mx-auto space-y-6" key={6}>
      <div className="text-center">
        <h2 className="text-2xl font-bold">Curriculum Vitae</h2>
        <p>{data.name}</p>
        <p>
          {data.profile.address}, {data.profile.district}
        </p>
        <p>
          {data.profile.phone} | {data.profile.email}
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
            <strong>{edu.course}</strong>
            <p>{edu.yearOfPass}</p>
            <p>{edu.university}</p>
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
  const handleDownload = async () => {
    const input =  document.getElementById(`${count + 1}`);
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
      <div className="ms-5 m-2">
        <button onClick={countDec} className="btn btn-outline-info">
          {"<"}
        </button>
        <button onClick={countInc} className="btn btn-outline-info">
          {">"}
        </button>
        {/* <button
          onClick={() => {
            window.print();
          }}
          className="btn btn-outline-info"
        >
          Print Resume
        </button> */}
        <button className="btn btn-outline-info me-2" onClick={handleDownload}>
          Download as PDF
        </button>
      </div>
      {pattern[count]}
    </>
  );
};

export default Resume;
