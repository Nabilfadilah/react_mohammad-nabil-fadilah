import React from 'react'
import about from "../../img/about.jpg"
import "./AboutUs.css"

const About = () => {
    return (
        <div className='testimonial pt-2 pb-2' id='about'>
        <div className="container text-center about">
            <div className="row mb-2">
            <div className="col text-center mb-2">
                <h2 className="title-text">About Us</h2>
                <hr />
            </div>
            </div>
            <div className="row">
            <div className="col-md-6">
                <div className="gambar">
                <img src={about} alt="" className='img rounded float-start'/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="panel">
                <p className="pt-2 text-start">
                    Selamat datang di website Fadilah Academy, adalah platform edukasi teknologi terdepan yang mendorong akses literasi digital yang lebih luas untuk semua. Fadilah Academy memiliki misi untuk mengakselerasi transisi Indonesia menuju dunia digital.
                </p>
                <p className=" text-start">
                    Kami berkomitmen untuk selalu menghadirkan informasi yang terpercaya dan berguna. Fadilah Academy memiliki misi untuk mengakselerasi transisi Indonesia menuju dunia digital melalui pendidikan teknologi yang mentransformasi kehidupan!
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default About