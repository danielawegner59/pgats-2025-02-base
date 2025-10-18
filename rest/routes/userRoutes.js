const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const autenticacaoToken = require('../../middleware/autenticacaoToken');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/users', autenticacaoToken, userController.getUsers);

module.exports = router;
