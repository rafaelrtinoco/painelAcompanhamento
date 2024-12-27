const mongoose = require('mongoose');

const AnnotationDataSchema = new mongoose.Schema({
  filial: String,
  operadora: String,
  solicitante: String,
  numeroChamado: String, 
  dataAbertura: {
    type: Date,
    default: Date.now
  },  
  servico: String, 
  
});

module.exports = mongoose.model('annotations', AnnotationDataSchema)