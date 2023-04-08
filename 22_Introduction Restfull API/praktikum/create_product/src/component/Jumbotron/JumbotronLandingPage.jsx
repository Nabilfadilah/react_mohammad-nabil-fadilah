import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../img/hero-img.png"

function JumbotronLandingPage() {
    const navigate = useNavigate();
    return (
        <div id="hero" className="container-fluid">
            <h1 className="text-white">
                Better Solutions For Your <br /> Business
            </h1>
            <p className="text-header">
                We are team of talented designers making websites with <br /> Bootstrap
            </p>
            <img src={logo} alt="" className='img'/>
            <br />
            <button className="get-started pb-5" onClick={() => navigate('/createproduct')}>Create Product</button>
            <button className="video">Watch Video</button>
        </div>
    )
}

export default JumbotronLandingPage