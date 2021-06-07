import {Link} from 'react-router-dom'
function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-light navbar-background-color navbar-text">
    <div className="container-fluid">
      <Link to={"/index"} className={"navbar-brand navbar-text"}><strong>Mohieddin Tanna</strong></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <Link to={"/projects"} className={"nav-link navbar-text"}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to={"/work_history"} className={"nav-link navbar-text"}>Work History</Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact_me"} className={"nav-link navbar-text"}>Contact Me</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar;