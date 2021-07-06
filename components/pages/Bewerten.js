import React, { useState } from "react";
import "../Cards";
import CardItem from "../CardItem";
import image_bwt from "../pages/bewerte.jpg";
import "./form_bwt.css";

export function Bewerte(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ort, setOrt] = useState("");
  const [comments, setComments] = useState("");
  const [isPizzaChecked, setIsPizzaChecked] = useState(false);
  const [isPastaChecked, setIsPastaChecked] = useState(false);
  const [isSalatChecked, setIsSalatChecked] = useState(false);
  const [isGetrankeChecked, setIsGetrankeChecked] = useState(false);
  const [isDessertChecked, setIsDessertChecked] = useState(false);
  const [isGratinChecked, setIsGratinChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [radio, setRadio] = useState("5");
  const [radio_ser, setRadio_ser] = useState("5");
  const [radio_lief, setRadio_lief] = useState("5");
  const [radio_os, setRadio_os] = useState("5");

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const RadioInput = ({ label, value, checked, setter }) => {
    return (
      <label>
        <input
          type="radio"
          checked={checked === value}
          onChange={() => setter(value)}
        />
        <span>{label}</span>
      </label>
    );
  };

  return (
    <div>
      <h1>Geben Sie uns Ihr wertvolles Bewerten</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image_bwt}
              text="Geben Sie uns Ihr wertvolles Bewerten"
              label="Bewerte"
            />
          </ul>
        </div>
      </div>
      <form className="container_bwt" onSubmit={handleSubmit}>
        <h2>Bewerte Uns</h2>
        <br />
        <label>
          Name*:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email*:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Ort:
          <input
            className="text_ort"
            type="text"
            value={ort}
            onChange={(e) => setOrt(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>Was hast du bestellt?</label>
        <br />
        <label>
          Pizza
          <input
            type="checkbox"
            checked={isPizzaChecked}
            onChange={(e) => setIsPizzaChecked(!isPizzaChecked)}
          />
        </label>
        <label>
          Pasta
          <input
            type="checkbox"
            checked={isPastaChecked}
            onChange={(e) => setIsPastaChecked(!isPastaChecked)}
          />
        </label>
        <label>
          Salat
          <input
            type="checkbox"
            checked={isSalatChecked}
            onChange={(e) => setIsSalatChecked(!isSalatChecked)}
          />
        </label>
        <label>
          Getränke
          <input
            type="checkbox"
            checked={isGetrankeChecked}
            onChange={(e) => setIsGetrankeChecked(!isGetrankeChecked)}
          />
        </label>
        <label>
          Dessert
          <input
            type="checkbox"
            checked={isDessertChecked}
            onChange={(e) => setIsDessertChecked(!isDessertChecked)}
          />
        </label>
        <label>
          Gratin
          <input
            type="checkbox"
            checked={isGratinChecked}
            onChange={(e) => setIsGratinChecked(!isGratinChecked)}
          />
        </label>
        <br />
        <br />
        <label>Speisen</label>
        <br />
        <RadioInput label="" value="1" checked={radio} setter={setRadio} />
        <RadioInput label="" value="2" checked={radio} setter={setRadio} />
        <RadioInput label="" value="3" checked={radio} setter={setRadio} />
        <RadioInput label="" value="4" checked={radio} setter={setRadio} />
        <RadioInput label="" value="5" checked={radio} setter={setRadio} />
        <br />
        <br />
        <label>Service</label>
        <br />
        <RadioInput
          label=""
          value="1"
          checked={radio_ser}
          setter={setRadio_ser}
        />
        <RadioInput
          label=""
          value="2"
          checked={radio_ser}
          setter={setRadio_ser}
        />
        <RadioInput
          label=""
          value="3"
          checked={radio_ser}
          setter={setRadio_ser}
        />
        <RadioInput
          label=""
          value="4"
          checked={radio_ser}
          setter={setRadio_ser}
        />
        <RadioInput
          label=""
          value="5"
          checked={radio_ser}
          setter={setRadio_ser}
        />
        <br />
        <br />
        <label>Lieferzeit</label>
        <br />
        <RadioInput
          label=""
          value="1"
          checked={radio_lief}
          setter={setRadio_lief}
        />
        <RadioInput
          label=""
          value="2"
          checked={radio_lief}
          setter={setRadio_lief}
        />
        <RadioInput
          label=""
          value="3"
          checked={radio_lief}
          setter={setRadio_lief}
        />
        <RadioInput
          label=""
          value="4"
          checked={radio_lief}
          setter={setRadio_lief}
        />
        <RadioInput
          label=""
          value="5"
          checked={radio_lief}
          setter={setRadio_lief}
        />
        <br />
        <br />
        <label>Online-Shop</label>
        <br />
        <RadioInput
          label=""
          value="1"
          checked={radio_os}
          setter={setRadio_os}
        />
        <RadioInput
          label=""
          value="2"
          checked={radio_os}
          setter={setRadio_os}
        />
        <RadioInput
          label=""
          value="3"
          checked={radio_os}
          setter={setRadio_os}
        />
        <RadioInput
          label=""
          value="4"
          checked={radio_os}
          setter={setRadio_os}
        />
        <RadioInput
          label=""
          value="5"
          checked={radio_os}
          setter={setRadio_os}
        />
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(!isChecked)}
          />
          Über den Newsletter bekommst du Angebote und die jeweils neuste
          Speisekarte.
        </label>
        <br />
        <br />
        <label>
          Möchtest du uns sonst noch etwas mitteilen?
          <br />
          <input
            type="text"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Abschicken" className="abschicken" />
      </form>
      <div className="disclaimer">
        <p>* Dieses Feld ist ein Pflichtfeld. Bitte fülle es aus.</p>
        <br />

        <p>
          Wir nutzen deine Bewertung evtl. zu Werbezwecken. Dein Name wird dabei
          jedoch gekürzt und deine E-Mail-Adresse nicht verwendet. Du kannst
          diese Entscheidung natürlich jederzeit widerrufen.
        </p>
      </div>
    </div>
  );
}

export default Bewerte;
