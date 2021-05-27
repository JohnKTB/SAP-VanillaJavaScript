import { api } from "./Apis.js";
import { Card } from "../components/main/PostCard.js";
import { CardSelected } from "./InfoCardSelected.js";

const SearchCountryName = () => {
  setTimeout(() => {
    const $Card = document.getElementById("content-card");
    function setCountriesNames(CountriesNames) {
      $Card.innerHTML = "";
      CountriesNames.forEach(({ flag, name, numericCode, population, region }) => {
        $Card.insertAdjacentHTML(
          "beforeend",
          Card(flag, name, numericCode, population, region)
        );
      });
      //Para que vuelva a reconocer el
      //"document.getElementsByClassName("card")"
      CardSelected();
    }
    document
      .getElementById("InputSearchCountry")
      .addEventListener("keyup", async (e) => {
        if (e.target.value.length != 0) {
          let CountriesNames = await api.getCountryName(e.target.value.trim());
          setCountriesNames(CountriesNames);
          return;
        }
        const CountriesNames = await api.getCountriesNames();
        setCountriesNames(CountriesNames);
      });
  }, 300);
};
export { SearchCountryName };
