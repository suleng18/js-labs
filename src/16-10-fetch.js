const url = 'http://localhost';
const init = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Xuan Long' }),
};

// ----------------------------------------------------------------//
const promise = fetch(url, init);
fetch();

let postApi = 'https://jsonplaceholder.typicode.com/posts';
fetch(postApi)
  .then((response) => response.json())
  .then((post) => console.log(post))
  .catch((error) => console.log(error));

// ----------------------------------------------------------------//
