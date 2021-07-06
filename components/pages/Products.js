import React from "react";
import "../../App.css";
import image_delivery from "../pages/1.jpg";
import image_counter from "../pages/counter.jpg";
import image_baker from "../pages/baker.jpg";
import "../Cards";
import CardItem from "../CardItem";

export default function Products() {
  return (
    <div>
      <h1>Jobs</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image_delivery}
              text="Aktuelle Stellenangebote bei apple pizza"
              label="Auslieferungsfahrer"
            />
          </ul>
        </div>
        <p>
          Als Fahrer repräsentierst du apple pizza. "Du bist sozusagen unsere
          Visitenkarte!" Denn Du überbringst dem Kunden seine Bestellung. Wenn
          er Dich sieht, betrachtet er die Marke apple pizza. Aus diesem Grund
          sind ein gepflegtes Äußeres und ein freundlicher Umgangston
          unverzichtbare Voraussetzungen. Wir geben unseren Kunden das
          Versprechen, ihre Pizza 30 - 45 Minuten nach Bestellung zu liefern,
          das heißt: Den Überblick behalten, Ruhe bewahren, und pünktlich sein.
          Autofahrer (m/w) (mit Führerschein Kl. B) und Rollerfahrer (m/w) sind
          herzlich willkommen.
        </p>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image_counter}
              text="Aktuelle Stellenangebote bei apple pizza"
              label="Verkauf/Innendienst, Bestell-/Auftragsannahme"
            />
          </ul>
        </div>
        <p>
          Mitarbeiter im Innendienst sind das Gesicht unseres Unternehmens. Am
          Telefon oder im Restaurant nimmst Du Bestellungen entgegen und
          erfüllst die Wünsche der Kunden. Voraussetzungen dafür ist eine
          freundliche Art, auch dann, wenn richtig was los ist. Wenn Dir der
          Umgang mit Menschen Spaß macht und Du Kunden beraten und für unsere
          Produkte begeistern kannst, freuen wir uns auf Deine Bewerbung.
        </p>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image_baker}
              text="Aktuelle Stellenangebote bei apple pizza"
              label="Pizza-Bäcker und Pasta Koch"
            />
          </ul>
        </div>
        <p>
          Nach unseren Rezepturen bereitest Du die Pizzen individuell für jeden
          Kunden zu. Deine Arbeit hat direkten Einfluss auf die Zufriedenheit
          des Kunden. Mit Deiner Arbeit machst Du unser Versprechen für Frische
          & Qualität erlebbar! Gastronomische Erfahrung ist von Vorteil, wir
          bilden Dich aber auch gerne selbst aus. Qualität, auch in der
          Ausbildung, steht bei uns mit an erster Stelle. Wenn Du gerne mit
          frischen Lebensmitteln umgehen und daraus schmackhafte Gerichte machen
          willst, dann melde Dich jetzt bei uns.
        </p>
      </div>
    </div>
  );
}
