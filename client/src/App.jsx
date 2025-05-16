import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./component/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./component/Profile";
import Resume from "./component/Resume";
import Project from "./component/Project";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Register from "./component/Register";
import Addinfo from "./component/Addinfo";
import { useEffect } from "react";
import ResumeForm from "./component/ResumeForm";
function App() {
  let navigate = useNavigate();
  function WithAuth(Func) {
    return (props) => {
      let auth = JSON.parse(sessionStorage.getItem("logedin")) ? true : false;
      useEffect(() => {
        if (!auth) navigate("/login");
      }, [auth]);
      return auth ? <Func {...props} /> : <div>null</div>;
    };
  }
  const Auth = WithAuth(Addinfo);
  const Auth2 = WithAuth(ResumeForm);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editinfo" element={<Auth />} />
        <Route path="/resumeform" element={<Auth2 />} />
      </Routes>
    </>
  );
}

export default App;
