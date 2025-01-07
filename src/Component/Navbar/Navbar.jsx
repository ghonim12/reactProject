import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand text-uppercase text-white fs-2 fw-bold" to={"/"}>
          Start Framework
        </Link>
        <button
          className="navbar-toggler p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars fa-xl text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink className="nav-link text-uppercase text-white fw-bold me-3 rounded-2" to={"about"}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase text-white fw-bold me-3 rounded-2" to={"Portfolio"}>
              Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase text-white fw-bold me-3 rounded-2" to={"contact"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
}
