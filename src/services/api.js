const axios = require('axios');

const api = axios.create({
  baseUrl: 'https://rickandmortyapi.com/api'
});

module.exports = api;
