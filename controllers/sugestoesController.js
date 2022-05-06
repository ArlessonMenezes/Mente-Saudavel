const express = require('express');
const router = express.Router();
const Sugestoes = require('../models/Sujestao');

router.get('/sugestoes', (req, res) => {
    res.render('sugestoes')
})

router.post('/criar-sugestao', (req, res) => {
    const titulo = req.body.titulo
    const descricao = req.body.descricao

    if (titulo === undefined || titulo === null || titulo === '') {
        res.send("<script>alert('Campo titulo inválido'); window.location.href = '/sugestoes'; </script>"); 
    }

    if (descricao === undefined || descricao === null || descricao === '') {
        res.send("<script>alert('Campo descrição inválido'); window.location.href = '/sugestoes'; </script>"); 
    }

    Sugestoes.create({
        titulo,
        descricao,
    }).then(() => {
        res.send("<script>alert('Sugestão enviada'); window.location.href = '/admin'; </script>"); 
    }).catch(() => {
        res.send("<script>alert('Erro ao enviar sugestão'); window.location.href = '/sugestoes'; </script>"); 
    })
})

module.exports = router;