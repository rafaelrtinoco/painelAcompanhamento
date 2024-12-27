const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const SlaController = require('./controllers/SlaController');
const ContentController = require('./controllers/ContentController');

//rota annotatinos 
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete)

//rota sla
routes.get('/sla', SlaController.read)
routes.post('/sla/:id', SlaController.update)

//rota alteracao conteudo
routes.post('/altera/:id', ContentController.update)

module.exports = routes; 