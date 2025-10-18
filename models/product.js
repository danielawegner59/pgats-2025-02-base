
const produtos = [];

function adicionarProduto(produto) {
  produtos.push(produto);
  return produto;
}

module.exports = {
  produtos,
  adicionarProduto
};
