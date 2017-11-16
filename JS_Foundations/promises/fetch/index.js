// HTTP Methods: GET, POST, HEAD, PATCH, DELETE
// Fetch takes the url and an object specifying the kind of request you are making

const root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

fetch(root, {method: 'GET'})
  .then(response => {
    // console.log(response);
    return response.json();
  })
  .then(json => console.log(json));

// here we are returning the response with the first then which allows us to chain .then togethers
