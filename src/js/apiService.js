
const API_KEY = '15412050-b20d1b69abcf0f10d11e2c309';

export default fetchQuery;

function fetchQuery(query, pageNumber) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=6&key=${API_KEY}`,
  ).then(response => response.json());
}





