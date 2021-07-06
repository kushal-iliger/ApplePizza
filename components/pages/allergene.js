import React from "react";
import "../Cards";
import CardItem from "../CardItem";
import image_allergene1 from "../pages/0001.jpg";
import background from "../pages/allergy.jpg";
import "../pages/allergene.css";

function allergene() {
  return (
    <div>
      <h1>Allergene</h1>
      <img className="allergy_back" src={background} alt="Background"></img>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* <CardItem
              src={image_allergene}
              text="Der apple pizza Teig unserer Pizza wird mit echter Hefe angesetzt und ist frei von künstlichen Backtriebmitteln oder jeglichen Konservierungsstoffen. Ihm wird Zeit gegeben, um zu reifen und seinen ganz persönlichen würzigen Geschmack zu entwickeln, den du schon beim ersten Bissen unverkennbar herausschmecken wirst."
              label="Allergene"
              path="/services"
            /> */}
            <CardItem
              src={image_allergene1}
              text="Die deklarationspflichtigen Zusatzstoffe finden Sie direkt auf unserer Speisekarte. Kreuzkontamination bei den einzelnen Zutaten sowie technologisch unvermeidbare Verunreinigungen einzelner Produkte sind nicht auszuschließen"
              label="Allergene"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default allergene;
