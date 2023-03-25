import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer bg-dark text-white pt-5 pb-4" id="footerr">
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                        Fadilah Academy
                        </h5>
                        <p>
                        Fadilah Academy adalah platform edukasi teknologi terdepan yang
                        mendorong akses literasi digital yang lebih luas untuk semua. Fadilah
                        Academy memiliki misi untuk mengakselerasi transisi Indonesia menuju
                        dunia digital.
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                        Contact
                        </h5>
                        <p>
                        <i className="fas" />
                        Kota Bandung, Jawa Barat Indonesia
                        </p>
                        <p>
                        <i className="fas" />
                        mnabilfadilahh@gmail.com
                        </p>
                        <p>
                        <i className="fas" />
                        085-233-344-007
                        </p>
                    </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="row align-items-center">
                    <div className="col-md-7 col-lg-6">
                        <p>
                        {" "}
                        Copyright ©2023 All rights reserved by:
                        <a href="#" style={{ textDecoration: "none" }}>
                            <strong className="text-warning"> M Nabil Fadilah</strong>
                        </a>
                        </p>
                    </div>
                    <div className="col-md-5 col-lg-6">
                        <div className="text-center text-md-right">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                            <a
                                href="www.facebook.com/Nabil Fadilah"
                                className="btn-floating btn-sm text-white"
                                style={{ fontSize: 23 }}
                            >
                                <i className="bi bi-facebook" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a
                                href="www.instagram.com/nabillfdh/"
                                className="btn-floating btn-sm text-white"
                                style={{ fontSize: 23 }}
                            >
                                <i className="bi bi-instagram" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a
                                href="www.twitter.com/tidakTerhindar"
                                className="btn-floating btn-sm text-white"
                                style={{ fontSize: 23 }}
                            >
                                <i className="bi bi-linkedin" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a
                                href="www.twitter.com/tidakTerhindar"
                                className="btn-floating btn-sm text-white"
                                style={{ fontSize: 23 }}
                            >
                                <i className="bi bi-twitter" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer