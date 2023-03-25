import React from 'react'
import logo from "../../img/Fadilah.png"

function Navbar() {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg shadow fixed-top bg-dark"
                data-bs-theme="dark"
                >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src={logo} alt="" className='img' width="50px" style={{ marginLeft: 30 }}/>
                    </a>
                    <h4>Fadilah Academy</h4>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div
                    className="collapse navbar-collapse justify-content-end round"
                    id="navbarNavDropdown"
                    >
                    <ul
                        className="navbar-nav gap-3 text-sm-center mt-lg-auto"
                        style={{ marginRight: 30 }}
                    >
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            Home
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#about">
                            About Us
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            Contact Us
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#footerr">
                            Footer
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar