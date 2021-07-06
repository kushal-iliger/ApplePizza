import React from "react";
import "../App.css";
//import { Button } from "./Button";
import "./HeroSection.css";
import logo from "../components/pages/1-removebg-preview.png";
//import video from "../videos/video-ap.mp4";
import button1 from "../images/button_jetzt_bestellen.gif";
import button2 from "../images/btn_hotline.gif";

function HeroSection() {
  return (
    <div className="hero-container">
      <p>
        Pizza,<span>Pasta,</span> <span>Salat.</span>{" "}
      </p>
      <h3>Enjoy the freshness!</h3>
      {/* <video src={video} autoPlay loop muted /> */}
      {/* <h1>APPLE PIZZA</h1> */}
      <img className="logo_hero" src={logo} alt="logo"></img>
      <a href="https://www.applepizza.de/shop/mannheim/page/mittagsangebote">
        <img className="bestellen" src={button1} alt="bestellen"></img>
        <img className="hotline" src={button2} alt="hotline"></img>
      </a>
      {/* <div className="hero-btns">
        <Button
          href="https://applepizza.de/"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large">
          Online Bestellen
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
