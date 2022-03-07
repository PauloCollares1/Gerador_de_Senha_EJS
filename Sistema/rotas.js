const functions = require('./functions.js');
const express = require('express');
rota = express.Router();



// ---- Minhas rotas ---- //
rota.get('/teste', (req, res) => {

    res.send("Teste rota /teste");
});

rota.get('/', (req, res) => {

    res.render('index.ejs');

    
});

rota.post('/', (req, res) => {

    const teste = req.body.sistema_html
    const teste2 = req.body.tamanho_html
    console.log(teste, teste2);

    res.render('index.ejs');
})



module.exports = { rota }