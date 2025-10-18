const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');

describe('Cadastro de Produto', () => {
  let token;

  before(async () => {
    // Realiza login para obter o token
    const respostaLogin = await request(app)
      .post('/api/users/login')
      .send({ email: 'alice@email.com', password: '123456' });
    token = respostaLogin.body.token;
  });

  it('Deve cadastrar produto com proprietário após login', async () => {
    const produto = {
      proprietario: 'Alice',
      id: 1,
      descricao: 'Produto de teste',
      preco: 99.99
    };
    const resposta = await request(app)
      .post('/api/produtos')
      .set('Authorization', `Bearer ${token}`)
      .send(produto);
    expect(resposta.status).to.equal(201);
    expect(resposta.body).to.include(produto);
  });

  it('Deve retornar erro ao cadastrar produto sem token', async () => {
    const produto = {
      proprietario: 'Alice',
      id: 2,
      descricao: 'Produto sem token',
      preco: 49.99
    };
    const resposta = await request(app)
      .post('/api/produtos')
      .send(produto);
    expect(resposta.status).to.equal(401);
    expect(resposta.body).to.have.property('error');
  });
});
