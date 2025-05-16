import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active bg-info rounded text-white nav-link "
                  : "nav-link"
              }
            >
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? "active nav-link bg-info rounded text-white"
                  : "nav-link"
              }
            >
              Resume/CV
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive
                  ? "active nav-link dropdown-toggle bg-info rounded text-white"
                  : "nav-link"
              }
              role="button"
              data-bs-toggle="dropdown"
            >
              Project
            </NavLink>
            <ul className="dropdown-menu dropdown-menu-dark-body-tertiary">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
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
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "active nav-link bg-info rounded text-white"
                  : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "active nav-link bg-info rounded text-white"
                  : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <NavLink to="/login" className="btn btn-outline-info me-2">
          login
        </NavLink>
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            if (confirm("confirm you want to logOut")) {
              sessionStorage.clear();
              navigator("/");
            }
          }}
        >
          logOut
        </button>
      </div>
    </>
  );
}

export default Navbar;
