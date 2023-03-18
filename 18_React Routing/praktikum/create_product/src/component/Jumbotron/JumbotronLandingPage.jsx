import React from 'react'
import { useNavigate } from 'react-router-dom'

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
            <br />
            <button className="get-started" onClick={() => navigate('/createproduct')}>Create Product</button>
            <button className="video">Watch Video</button>
            <img src="./assets/img/hero-img.png" alt="hero" />
        </div>
    )
}

export default JumbotronLandingPage