const express = require('express');
const router = express.Router();
const Paciente = require('../models/Paciente');
const bcrypt = require('bcryptjs');


router.get('/', (rq, res) => {
    res.render('login');
});

router.get('/admin', (req, res) => {
    res.render('admin', { usuario: req.session.user.nome });
})

//Login
router.post('/authenticate', (req, res) => {
    let email = req.body.lemail;
    let senha = req.body.lsenha;
    
    Paciente.findOne({ where: { email: email } }).then(user => {
        if(user != undefined) {
            let correct = bcrypt.compareSync(senha, user.senha)

            if(correct) {
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    nome: user.nome
                }
                
                res.render('admin', { usuario: req.session.user.nome }); //Lembrar de enviar para a pagina de escolha;
            } else {
                res.send("<script>alert('Senha inválida'); window.location.href = '/'; </script>"); 
            }

        } else {
            res.send("<script>alert('E-mail inválido'); window.location.href = '/'; </script>"); 
        }
    });
});

//Logout
router.get('/logout', (req, res) => {
    req.session.user = undefined;
    res.redirect('/');
})

module.exports = router;