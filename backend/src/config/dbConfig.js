const mongoose = require('mongoose');

// String de conexão com o MongoDB Atlas (substitua com suas credenciais)
const dbConfig = 'mongodb+srv://tirafaelr:8cNFs2q2cA9l8TAH@cluster0.9z241.mongodb.net/form?retryWrites=true&w=majority&appName=Cluster0';


// Função para conectar ao MongoDB
const connection = mongoose.connect(dbConfig);

module.exports = connection;