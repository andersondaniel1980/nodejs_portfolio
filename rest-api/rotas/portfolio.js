const express = require('express');
const router = express.Router();

const respostaClass = require('../model/RespostaClass');

router.get('/', (req, res, next) => res.json({
   msg: 'PORTFOLIO'
}));

router.get('/a', function(req, res){
res.send('a')
});

router.get('/teste', function(req, res, next){
    let resposta = new respostaClass();
    resposta.msg = 'Ok',
    resposta.erro = false,
    resposta.dados = "{aaa:bbbb }"
    return res.json(resposta);
});

module.exports = router;