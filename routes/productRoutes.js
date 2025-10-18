const express = require('express');
const router = express.Router();
const { cadastrarProduto } = require('../controllers/productController');
const autenticacaoToken = require('../middleware/autenticacaoToken');

router.post('/', autenticacaoToken, cadastrarProduto);

module.exports = router;
