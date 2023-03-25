import React from 'react'
import slider2 from "../../img/slider2.jpg"
import slider3 from "../../img/slider3.jpg"

function Slider() {
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            >
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={slider3} alt="" className='img d-block w-100'/>
                <div className="carousel-caption d-none d-md-block mt-5">
                    <h1 className="justify-content-center">
                    Selamat Datang di Webiste Fadilah Academy
                    </h1>
                    <hr />
                    <h3>...</h3>
                    <h3>..</h3>
                    <h3>.</h3>
                </div>
                </div>
                <div className="carousel-item">
                <img src={slider2} alt="" className='img d-block w-100'/>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    )
}

export default Slider