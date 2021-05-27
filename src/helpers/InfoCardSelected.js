import { api } from "./Apis.js";

let Card = "";
const CardSelected = () => {
  
  setTimeout(() => {
    const $ContentCard = document.getElementsByClassName("card");
    for (const card of $ContentCard) {
      card.addEventListener("click", (e) => infoCard(e.target));
    }
  }, 200);
};

async function infoCard(params) {
  
  let $infoCountry = [];
  if (params.parentElement.parentElement.querySelector("a") == null) {
    
    let $params = params.parentElement.parentElement.parentElement;
    $infoCountry = await api.getCountryName(
      $params.querySelector("h2").textContent
    );
    BuildCard($infoCountry[0]);
  } else {
    let $params = params.parentElement.parentElement;
    $infoCountry = await api.getCountryName(
      $params.querySelector("h2").textContent
    );
    BuildCard($infoCountry[0]);
  }
}
function BuildCard({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) {
  let $languagesNames = languages.map(({ name }) => {
    return name;
  });
  let $borders = "";
  borders.forEach((border) => {
    $borders += `<span>${border}</span>`;
  });

  Card = `<div class = "cardSelected">
    <img src="${flag}" loading="lazy" alt="Country" width="100%">
    <div class="cardSelected-content_text">
    <h2>${name}</h2> 
    <p>Native Name: <span>${nativeName}</span></p>
    <p>Population: <span>${population}</span></p>   
    <p>Region: <span>${region}</span></p>   
    <p>Sub Region: <span>${subregion}</span></p>  
    <p>Capital: <span>${capital}</span></p>  
    <p>Top Level Domain: <span>${topLevelDomain}</span></p>  
    <p>Currencies: <span>${currencies[0].name}</span></p>  
    <p>Languages: <span>${$languagesNames.toString()}</span></p> 
    <p>Borders: <span>${$borders}</span></p> 
    </div>
    </div>          
  `;
}
export { CardSelected, Card };
