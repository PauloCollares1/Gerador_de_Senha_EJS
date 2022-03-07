const bodyParser = require('body-parser');
const rotas = require('./rotas.js');
const express = require('express');
const http = require('http');
const cors = require('cors');
require('dotenv').config();


// ---- Settings ---- //
const app = express();
const server = http.Server(app);


// ---- Configurando EJS ---- //
app.use(bodyParser.urlencoded({extended:true}));
app.engine('ejs', require('ejs').renderFile); 
app.set('view engine', 'ejs');
app.set('Views', 'Views');
app.use(cors());



// ---- Setando as rotas ---- //
app.use('/', rotas.rota)

// ---- Conectando o servidor ---- //
server.listen(process.env.PORT || 5000, () => {console.log("Iniciando sistema de geração de senhas..")})