import { api } from "./Apis.js";
import { Card } from "../components/main/PostCard.js";
import { CardSelected } from "./InfoCardSelected.js";

const filter = () => {
  setTimeout(() => {
    const $Card = document.getElementById("content-card");
    function setCountriesNames(CountriesNames) {
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
      .getElementById("SelectContinents")
      .addEventListener("change", async (e) => {
        const $continent = e.target.options[e.target.selectedIndex].text;
        $Card.innerHTML = "";
        if ($continent != "Filter by Region") {
          const CountriesNames = await api.getRegionsNames($continent);
          setCountriesNames(CountriesNames);
          return;
        }
        const CountriesNames = await api.getCountriesNames();
        setCountriesNames(CountriesNames);
      });
  }, 300);
};
export { filter };
