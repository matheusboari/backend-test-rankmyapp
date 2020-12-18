const { Router } = require('express');

const Personagens = require('./app/controllers/Personagens');

const routes = Router();

routes.get('/personagens', Personagens.index);

module.exports = routes;
