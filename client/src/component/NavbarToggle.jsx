import { NavLink } from "react-router-dom";
function NavbarToggle() {
  return (
    <>
      <div className="container-fluid w-25 bg-body-tertiary position-absolute z-3 ">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <NavLink className="nav-link active" to={"/"}>
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to={"/resume"}>
              Resume/CV
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="/project"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Project
            </NavLink>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <NavLink className="dropdown-item" href="#">
                  Action
                </NavLink>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to={"/contact"}>
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to={"/about"}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to={"/drag"}>
              drag
            </NavLink>
          </li>
        </ul>
        <NavLink to="/editinfo" className="btn btn-outline-info ">
          Edit-Info
        </NavLink>
        <br />
        <NavLink to="/login" className="btn btn-outline-info mt-2">
          login
        </NavLink>
        <br />
        <button
          className="btn btn-outline-danger mt-2"
          onClick={() => {
            if (confirm("confirm you want to logOut")) {
              sessionStorage.clear();
            }
          }}
        >
          logOut
        </button>
      </div>
    </>
  );
}

export default NavbarToggle;
