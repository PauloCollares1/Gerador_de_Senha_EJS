const functions = require('./functions.js');
const express = require('express');
rota = express.Router();



// ---- Minhas rotas ---- //
rota.get('/', (req, res) => {

    let myVar = functions.resultado;
    res.render('index.ejs', {myVar_html:myVar});
});

rota.post('/gerador', (req, res) => {
    
    const nome = req.body.nome_html
    const tamanho = req.body.tamanho_html
    const minuscula = req.body.minuscula_html
    const maiuscula = req.body.maiuscula_html
    const simbolo = req.body.simbolos_html
    const numeros = req.body.numeros_html

    functions.embaralha(nome, tamanho, minuscula, maiuscula, simbolo, numeros)

        
    
    res.redirect('/');
})



module.exports = { rota }