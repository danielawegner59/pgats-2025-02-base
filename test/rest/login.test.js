const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');

describe('Validação de Login e Token', () => {
  it('Deve retornar token válido ao logar com credenciais corretas', async () => {
    const resposta = await request(app)
      .post('/api/users/login')
      .send({ email: 'alice@email.com', password: '123456' });
    expect(resposta.status).to.equal(200);
    expect(resposta.body).to.have.property('token');
    expect(resposta.body.token).to.be.a('string');
  });

  it('Deve retornar erro ao logar com credenciais inválidas', async () => {
    const resposta = await request(app)
      .post('/api/users/login')
      .send({ email: 'alice@email.com', password: 'senhaerrada' });
    expect(resposta.status).to.equal(401);
    expect(resposta.body).to.have.property('error');
  });

  it('Deve retornar erro ao acessar rota protegida sem token', async () => {
    const resposta = await request(app)
      .get('/api/users/users');
    expect(resposta.status).to.equal(401);
    expect(resposta.body).to.have.property('error');
  });
});
