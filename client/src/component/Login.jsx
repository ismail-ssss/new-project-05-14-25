import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [err, setErr] = useState("");

  let [credentials] = useState(
    JSON.parse(localStorage.getItem("auth"))
      ? JSON.parse(localStorage.getItem("auth"))
      : []
  );
  const onLogin = (e) => {
    e.preventDefault();
    if (email === "" || pass === "") {
      alert("Please fill all fields");
      return;
    }
    credentials.map((c) => {
      if (c.email == email && pass == c.pass) {
        sessionStorage.setItem("logedin", JSON.stringify("hello"));
        navigate("/");
      } else {
        setErr("Invalid credentials");
      }
    });
  };
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="card p-4 shadow"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <h3 className="text-center mb-4">Login</h3>
          {err && (
            <div className="alert alert-danger" role="alert">
              {err}
            </div>
          )}
          <form onSubmit={onLogin}>
            <div className="form-group mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-check mb-3 d-flex justify-content-between">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input "
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <NavLink
                to="/register"
                className="form-check-label"
                htmlFor="rememberMe"
              >
                SignIn
              </NavLink>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              LogIn
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
