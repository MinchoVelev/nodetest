const axios = require('axios');

const url = 'https://finance.yahoo.com/quote/SAP/key-statistics/';
axios.interceptors.request.use(request => {
  console.log('Request Headers:', request.headers);
  return request;
}, error => {
  console.error('Error with request:', error);
  return Promise.reject(error);
});

axios.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching the page:', error);
  });
