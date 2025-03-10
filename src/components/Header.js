import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
      <div className="hero_area">
    {/* <!-- header section strats --> */}
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
        <Link className="navbar-brand" to="/">
            <span>
              Neogym
            </span>
        </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item ">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                <Link className="nav-link" to="/why"> Why us </Link>
                </li>
            
                <li className="nav-item">
                <Link className="nav-link" to="/trainer"> trainers</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/user"> USerData</Link>
                </li>
                <li className="nav-item active">
                <Link className="nav-link" to="/contact"> Contact Us</Link>
                </li>
              </ul>
              <div className="user_option">
                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                </form>
              </div>
            </div>
      </div>
        </nav>
      </div>
    </header>
    </div>
    {/* <!-- end header section --> */}
    </>
  )
}

export default Header