import React from 'react'
import Content from '../Content/Content'
import FooterLandingPage from '../Footer/FooterLandingPage'
import JumbotronLandingPage from '../Jumbotron/JumbotronLandingPage'
import NavbarLandingPage from '../Navbar/NavbarLandingPage'
import "./LandingPage.css";

function LandingPage() {
    return (
        <div>
            <NavbarLandingPage/>
            <JumbotronLandingPage/>
            <Content/>
            <FooterLandingPage/>
        </div>
    )
}

export default LandingPage