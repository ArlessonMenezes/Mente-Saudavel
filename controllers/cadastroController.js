const express = require('express');
const router = express.Router();
const Paciente = require('../models/Paciente');
const bcrypt = require('bcryptjs');

router.get('/cadastro', (rq, res) => {
    res.render('cadastro');
})

router.post('/cadastro/save', (req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(senha);
    let endereco = req.body.endereco;
    let cidade = req.body.cidade;
    let estado = req.body.estado;
    let cpf = req.body.cpf;

    Paciente.create({
        nome: nome,
        email: email,
        senha: hash,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        cpf: cpf
    }).then(() => {
        res.redirect('/')
    })
})



module.exports = router;