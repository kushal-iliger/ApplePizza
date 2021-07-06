import React from "react";
import "../../App.css";
import "../Cards";
import CardItem from "../CardItem";
import image_boss from "../pages/boss.jpg";

export default function SignUp() {
  return (
    <div>
      <h1>SEI DEIN EIGENER CHEF!</h1>
      <br />
      <br />
      <h2>
        SIE WOLLEN IHR EIGENER CHEF SEIN UND SUCHEN EINE GESCHÄFTSIDEE MIT EINEM
        STARKEN PARTNER AN IHRER SEITE?
      </h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image_boss}
              text="‍             SEI DEIN EIGENER CHEF!                       "
              label="SEI DEIN EIGENER CHEF!"
            />
          </ul>
        </div>
        <p>
          Sie wollen auch als Unternehmer nicht „allein“ dastehen und trotzdem
          Ihre eigenen Entscheidungen und Visionen realisieren? Dann starten Sie
          als Partner von <span className="apple_span">apple </span>
          <span className="pizza_span">pizza</span>, einer Zukunft
          versprechenden Franchise-Marke! Wir liefern Ihnen ein hundertfach
          erprobtes Konzept und damit einen einfacheren und schnelleren
          Markteinstieg mit hohen Verdienstchancen. Bitte kontaktieren Sie uns
          unter folgender Adresse: info@applepizza.de.
        </p>
      </div>
    </div>
  );
}
