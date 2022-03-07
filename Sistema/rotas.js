const functions = require('./functions.js');
const express = require('express');
rota = express.Router();



// ---- Minhas rotas ---- //
rota.get('/teste', (req, res) => {

    res.send("Teste rota /teste");
});

rota.get('/home', (req, res) => {

    res.render('index.ejs');
});



module.exports = { rota }