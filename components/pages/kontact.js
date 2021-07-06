import React from "react";
import "../Cards";
import CardItem from "../CardItem";
import image_contact from "../pages/contact.jpg";

function kontact() {
  return (
    <div>
      <h1>Kontakt</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image_contact}
              text="           
              info@applepizza.de ~ 
              
              Hotline. 0621/8460200"
              label="Kontact"
            />
          </ul>
        </div>
        <p>Verantwortlich für "apple pizza.de"</p>
        <p>M&N GmbH Q1, 7 D-68199 Mannheim</p>
        <p>info@applepizza.de</p>

        <p>Telefon : 0621 / 87524130 Fax : 0621 / 87524131</p>

        <p>Telefon : 0621 / 87524130 Fax : 0621 / 87524131</p>

        <p>Amtsgericht: 68159 Mannheim Registernummer: HRB 702406</p>

        <p>Geschäftsführung: Nasir Jalali USt-IdNr.: DE 254678959</p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default kontact;
