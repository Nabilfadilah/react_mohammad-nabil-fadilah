import React from "react";
import Content from "../Content/Content";
import FooterLandingPage from "../Footer/FooterLandingPage";
import JumbotronLandingPage from "../Jumbotron/JumbotronLandingPage";
import NavbarLandingPage from "../Navbar/NavbarLandingPage";
import "./LandingPage.css";
import ListProduct from "../ProductList/ListProduct";

function LandingPage() {
  return (
    <div>
      <NavbarLandingPage />
      <JumbotronLandingPage />
      <ListProduct />
      <Content />
      <FooterLandingPage />
    </div>
  );
}

export default LandingPage;
