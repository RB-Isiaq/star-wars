export const getMovies = async function () {
  const response = await fetch("https://swapi.dev/api/films");
  const data = await response.json();

  return data.results;
};
