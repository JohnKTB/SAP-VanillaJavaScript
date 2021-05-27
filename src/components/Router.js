import { Header } from "./header/Header.js";
import { Main } from "./main/Main.js";
import { CardSelected, Card } from "../helpers/InfoCardSelected.js";
import { filter } from "../helpers/FilterContinents.js";
import { SearchCountryName } from "../helpers/FilterNameCountry.js";
import { $DarkMode } from "../helpers/DarkMode.js";
import { BtnBack } from "./main/BtnBack.js";
import { ResetStyles } from "../helpers/ResetStyles.js";

const Router = async () => {
  const $root = document.getElementById("root");
  let { hash } = location;
  $DarkMode();
  ResetStyles();
  if (!hash || hash === "#/") {
    $root.innerHTML = "";
    $root.appendChild(Header());
    $root.appendChild(await Main());
    //Para que vuelva a reconocer el
    //"document.getElementsByClassName("card")" y vuelva a ejecutar
    //todo el filter()
    //Lo colocamos aqui porque solo queremos que se activen en este
    //scope, o sea en esta ruta
    SearchCountryName();
    filter();
    CardSelected();
  } else if (hash.includes("#/country")) {
    $root.innerHTML = "";
    $root.appendChild(Header());
    $root.appendChild(BtnBack());
    $root.appendChild(await Main());
    document.getElementById("SelectContinents").remove();
    document.getElementById("content_inputSeatch").remove();
    const $ContentCard = document.getElementById("content-card");
    $ContentCard.appendChild(BtnBack());
    $ContentCard.innerHTML = Card;
  }
};

export { Router };
