import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `nav-link ${isActive ? "active fw-semibold" : ""}`;

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Student Manager
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/students" className={navLinkClass}>
                List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/students/add" className={navLinkClass}>
                Add
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/students/search" className={navLinkClass}>
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
