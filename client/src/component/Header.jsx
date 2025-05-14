import { useState } from "react";

function Header({setInput}) {
  let [tog, setTog] = useState(window.innerWidth);
  let [showHeader, setShowHeader] = useState(false);
  window.addEventListener("resize", function () {
    setTog(window.innerWidth);
  });
  function sendDataToParent(e){
    setInput(e.target.value);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            products
          </a>
          {tog < 990 ? (
            <div>
              <button
                className="btn btn-outline-gray"
                onClick={() => setShowHeader((show) => !show)}
              >
                spand
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
                
                onChange={(e) => sendDataToParent(e)}
              />
              <p className="w-50">Found 0</p>
            </form>
          </div>
        </div>
      </nav>
      {tog < 990 ? (
        showHeader ? (
          <div className="container-fluid">
            <div className="">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
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
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => sendDataToParent(e)}
                />
              </form>
            </div>
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </>
  );
}
export default Header;
