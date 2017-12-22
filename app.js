const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//grabs data and sends back a promise
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));  // we use the ... to spread the data so that we do not wind up with a nested array.
