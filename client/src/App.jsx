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
import Drag from "./component/Drag";
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
  const AuthProfile = WithAuth(Profile);
  const AuthAddinfo = WithAuth(Addinfo);
  const AuthResume = WithAuth(Resume);
  const AuthProject = WithAuth(Project);
  const AuthAbout = WithAuth(About);
  const AuthContact = WithAuth(Contact);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AuthProfile />}></Route>
        <Route path="/resume" element={<AuthResume />} />
        <Route path="/project" element={<AuthProject />} />
        <Route path="/about" element={<AuthAbout />} />
        <Route path="/contact" element={<AuthContact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editinfo" element={<AuthAddinfo />} />
        <Route path="/drag" element={<Drag />} />
      </Routes>
    </>
  );
}

export default App;
