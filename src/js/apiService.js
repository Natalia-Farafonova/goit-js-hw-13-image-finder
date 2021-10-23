const KEY = '15412050-b20d1b69abcf0f10d11e2c309';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12';

export default fetchQuery;

function fetchQuery(query, pageNumber) {
    return fetch(`${BASE_URL}&key=${KEY}`)
        .then(response => response.json());
}

console.log(fetchQuery());