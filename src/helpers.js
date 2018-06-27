String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const ENDPOINT = "https://restcountries.eu/rest/v2/region";

export const getCountries = async region => {
  const response = await fetch(`${ENDPOINT}/${region}`);
  const result = await response.json();
  return result;
};
