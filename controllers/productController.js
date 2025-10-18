const { adicionarProduto } = require('../models/product');

function cadastrarProduto(req, res) {
  const { proprietario, id, descricao, preco } = req.body;
  if (!proprietario || !id || !descricao || !preco) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }
  const produto = { proprietario, id, descricao, preco };
  adicionarProduto(produto);
  res.status(201).json(produto);
}

module.exports = { cadastrarProduto };
