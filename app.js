const express = require('express'); 
const bodyParser = require('body-parser');
const routerPortfolio = require('./rest-api/rotas/portfolio');
const routerAgenda = require('./rest-api/rotas/agenda');

//const router = express.Router();

const api = express();
const port = 3000;

api.use("/portfolio", routerPortfolio)
api.use("/agenda", routerAgenda)

api.listen(port);
console.log('API Online');