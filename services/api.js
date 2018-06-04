export function getCocktailName() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1';
  return fetch(url)
    .then(response => response.json());
}