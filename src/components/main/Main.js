import { Card } from "./PostCard.js";
import { Select } from "./Select.js";
import { InputSearchCountry } from './InputSearchCountry.js';
import { api } from "../../helpers/Apis.js";
import '../../helpers/DarkMode.js';

const Main = async () => {
  const $main = document.createElement("main");
  $main.appendChild(InputSearchCountry());
  $main.appendChild(Select());
  const $div = document.createElement("div");
  $div.id = ('content-card');
  const CountriesNames = await api.getCountriesNames();
  CountriesNames.forEach(({ flag, name, numericCode, population, region }) => {
    $div.insertAdjacentHTML("beforeend", Card(flag, name, numericCode, population, region));
  });
  $main.appendChild($div);
  return $main;
};

export { Main };
