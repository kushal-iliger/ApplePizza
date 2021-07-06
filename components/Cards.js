import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import image from "../images/pasta1.jpg";
import image1 from "../images/pasta.jpg";
function Cards() {
  return (
    <div className="cards">
      <h1>Was wir anbieten?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image}
              text="Lorem ipsum dolor sit amet"
              label="Jetzt Bestellen"
              path="/services"
            />
            <CardItem
              src={image1}
              text="Lorem ipsum dolor sit amet"
              label="Warum wir?"
              path="/services"
            />
            <CardItem
              src={image}
              text="Lorem ipsum dolor sit amet"
              label="Jobs"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image1}
              text="Lorem ipsum dolor sit amet"
              label="Sei dein Eigner Chef"
              path="/services"
            />
            <CardItem
              src={image}
              text="Lorem ipsum dolor sit amet"
              label="Allergene"
              path="/products"
            />
            <CardItem
              src={image1}
              text="Lorem ipsum dolor sit amet"
              label="Kontact"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
