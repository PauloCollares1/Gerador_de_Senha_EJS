const functions = require('./functions.js');
const express = require('express');
rota = express.Router();


// ---- Minhas rotas ---- //
rota.get('/', (req, res) => {

    let myVar = functions.lista;
    res.render('index.ejs', {myVar_html:myVar});
});

rota.get('/resetarlista', (req, res) => {
    
    console.log("ja rodou o deletar!");
    for(let i = 0; i <= functions.lista.length; i++){
        functions.lista.pop();
        functions.lista.pop();
    }
    res.redirect('/');
})

rota.get('/baixar', async(req, res) => {
    
    const file = `./Senha Gerada.txt`;
    console.log(file)
    await res.download(file)
})

rota.post('/gerador', (req, res) => {

    const nome = req.body.nome_html
    const tamanho = req.body.tamanho_html
    const numeros = req.body.numeros_html
    const simbolo = req.body.simbolos_html
    const minuscula = req.body.minuscula_html
    const maiuscula = req.body.maiuscula_html

    functions.embaralha(nome, tamanho, minuscula, maiuscula, simbolo, numeros);
    res.redirect('/');
})


module.exports = { rota }