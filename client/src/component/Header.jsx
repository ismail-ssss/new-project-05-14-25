import { useState } from "react";
import NavbarToggle from "./NavbarToggle";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
function Header({ setInput }) {
  let [tog, setTog] = useState(window.innerWidth);
  let [showHeader, setShowHeader] = useState(false);
  window.addEventListener("resize", function () {
    setTog(window.innerWidth);
  });
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Ismail chamansab bhattipuri
          </NavLink>
          {tog < 990 ? (
            <span
              className="fs-1 btn"
              onClick={() => setShowHeader((show) => !show)}
            >
              ...
            </span>
          ) : (
            ""
          )}
          <Navbar/>
        </div>
      </nav>
      {tog < 990 ? showHeader ? <NavbarToggle /> : "" : ""}
    </>
  );
}
export default Header;
