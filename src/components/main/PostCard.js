const Card = (flag, name, numericCode, population, region) => {
  return `<div class = "card">
  <a href="#/country/${numericCode}">
  <img src="${flag}" loading="lazy" alt="Country" width="100%">
  <h2>${name}</h2> 
  <p>Population: <span>${population}</span></p>   
  <p>Region: <span>${region}</span></p>   
  </a>
  </div>          
`;
};

export { Card };
