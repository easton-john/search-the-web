export function getNews(name) {
  /* eslint-disable-next-line */
  const apiKey = process.env.VUE_APP_API_KEY;

  const url = 'https://newsapi.org/v2/everything?q=' + name + '&sortBy=popularity' +
  '&apiKey=4308364d8b5e4a049b03bfc916c8d985';
  return fetch(url)
    .then(response => response.json());
}