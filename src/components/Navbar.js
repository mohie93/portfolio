function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-light navbar-background-color navbar-text">
    <div className="container-fluid ">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="navbar-brand navbar-text" href={"/"}>Portfolio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item ">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link navbar-text" href={"/"}>Home</a>
          </li>
          <li className="nav-item ">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link navbar-text" href={"/work"}>Work</a>
          </li>
          <li className="nav-item">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link navbar-text" href={"/experience"}>Experience</a>
          </li>
          <li className="nav-item">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link navbar-text" href={"/contact_me"}>Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar;