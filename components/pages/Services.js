import React from "react";
//import image2 from "../pages/IMG_0189.JPG";
import "../Cards";
import CardItem from "../CardItem";
import image_base from "../pages/male-pizza-makers-collection-006_1024x1024@2x.jpg";
import image_tomato from "../pages/Tomato.jpg";
import image_kase from "../pages/800px_COLOURBOX10823550.jpg";
import image_belag from "../pages/belag.jpg";
import image_apple from "../pages/apple.jpg";

function Services() {
  return (
    <div>
      <h1>Wieso Du uns Lieben Wirst!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image_base}
              text="Wieso Du uns Lieben Wirst"
              label="Teig"
            />
          </ul>
        </div>
        <p>
          Der <span className="apple_span">apple</span> Teig unserer Pizza wird
          mit echter Hefe angesetzt und ist frei von künstlichen
          Backtriebmitteln oder jeglichen Konservierungsstoffen. Ihm wird Zeit
          gegeben, um zu reifen und seinen ganz persönlichen würzigen Geschmack
          zu entwickeln, den du schon beim ersten Bissen unverkennbar
          herausschmecken wirst.
        </p>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image_tomato}
              text="Wieso Du uns Lieben Wirst"
              label="Tomaten"
            />
          </ul>
        </div>
        <p>
          Die <span className="apple_span">apple</span> Tomatensauce wird
          ausnahmslos aus sonnengereiften und aromatischen Tomaten hergestellt
          und erhält durch unsere besondere Kräutermischung, die absolut frei
          von Zusatzstoffen und Allergenen ist, ihren unvergleichlich leckeren
          Geschmack.
        </p>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image_kase}
              text="Wieso Du uns Lieben Wirst"
              label="Kase"
            />
          </ul>
        </div>
        <p>
          Die <span className="apple_span">apple</span> Käsemischung besteht aus
          bestem Gouda und Mozzarella, den wir lediglich von Markenherstellern
          beziehen, die ganz auf Farb- und Konservierungsstoffe verzichten. Da
          der Käse quasi die "Krönung" einer jeden Pizza ist und ihr den
          abschließenden Geschmack verleiht, verzichten wir bewusst auf
          Analogkäse, um die sehr gute Qualität unserer Pizza zu wahren.
        </p>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image_belag}
              text="Wieso Du uns Lieben Wirst"
              label="Belag"
            />
          </ul>
        </div>
        <p>
          Ebenso wie uns die Qualität und der Geschmack der{" "}
          <span className="apple_span">apple</span>{" "}
          <span className="pizza_span">pizza </span> Basis wichtig sind, ist für
          uns auch der <span className="apple_span">apple </span>{" "}
          <span className="pizza_span">pizza </span>
          Belag von großer Bedeutung. Daher setzen wir stets auf frische Ware.
          Da jedoch nicht jedes Gemüse saisonal frisch verfügbar ist, verwenden
          wir in diesen Fällen von namhaften Herstellern produzierte Waren, die
          schockgefrostet sind und in denen daher sowohl der Geschmack, als auch
          wichtige Vitamine und andere wertvolle Inhaltsstoffe erhalten bleiben.
          Denn deine Gesundheit ist uns wichtig! Bei den speziellen Produkten,
          wie beispielsweise Artischocken, Schafskäse oder getrockneten Tomaten,
          handelt es sich um hochwertige und edle Feinkostware, die wir eigens
          nur mit den besten Ölen und Gewürzen einlegen. Denn dein
          Geschmackserlebnis ist für uns vordergründig! Auch bei unseren
          Fleischprodukten, wie Salami mit besonders geringem Fettanteil oder
          echter Schinken (kein Schinkenimitat!), handelt es sich um hochwertige
          Waren, die wir nur von ausgewählten und prämierten Betrieben beziehen.
          Denn auf unsere <span className="apple_span">apple </span>{" "}
          <span className="pizza_span">pizza </span> kommt nur das Beste!
        </p>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image_apple}
              text="Wieso Du uns Lieben Wirst"
              label="Unsere logo deine Gesundheit"
            />
          </ul>
        </div>
        <p>
          Bei <span className="apple_span">apple </span>{" "}
          <span className="pizza_span">pizza </span> steht der Apfel als Symbol
          für Frische und Gesundheit. Mit mehr als 30 Vitaminen und
          Spurenelementen in und direkt unter der Schale gibt er unserem Körper
          vieles von dem, was wir täglich brauchen und beugt vielen Krankheiten
          vor. Der Apfel ist eine Vitaminbombe! Wer den Apfel schält, schält
          auch die Vitamine ab. Der Apfel reguliert die Verdauung, stabilisiert
          die Darmflora und damit das Immunsystem, fördert einen ruhigen Schlaf,
          mindert Nervosität und Reizbarkeit, senkt den Cholesterinspiegel,
          entgiftet und verhindert das Entstehen von Krebszellen. Mit seinen
          Fruchtsäuren und Ballaststoffen reinigt er die Zähne. Der Apfel ist
          die Zahnbürste der Natur. 85% Wasser, Trauben- und Fruchtzucker
          erfrischen und sorgen für schnelle Energie. Der Apfel ist gesund und
          macht mit nur 60 Kilokalorien nicht dick. Deshalb bekommst du bei uns
          zu jeder Bestellung einen Apfel dazu, deine Gesundheit ist unser
          höchstes Gebot.
        </p>
      </div>
    </div>
  );
}

export default Services;
