//fazendoa requisição do express
const express = require('express');
const routes = require('./routes');
const cors = require('cors')

//colocando ele no app
const app = express();

require('./config/dbConfig');

//definindo que irá ler um json
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000);
