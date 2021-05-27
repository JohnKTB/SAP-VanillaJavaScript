class Api {
  constructor() {
    this.url = "https://restcountries.eu/";
  }
  async getCountriesNames() {
    const data = await fetch(`${this.url}rest/v2/all`);
    const response = await data.json();
    return response;
  }
  async getRegionsNames(continentName) {
    const data = await fetch(`${this.url}rest/v2/region/${continentName}`);
    const response = await data.json();
    return response;
  }
  async getCountryName(countryName) {
    try {
      const data = await fetch(`${this.url}rest/v2/name/${countryName}`);
      const response = await data.json();
      return response;
    } catch (error) {
      console.log("");
    }
  }
}

const api = new Api();

export { api };
