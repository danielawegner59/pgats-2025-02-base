const jwt = require('jsonwebtoken');
const SEGREDO = 'supersecret'; // Use variável de ambiente em produção

function autenticacaoToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token ausente ou inválido' });
  }

  jwt.verify(token, SEGREDO, (err, usuario) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido ou expirado' });
    }
    req.usuario = usuario;
    next();
  });
}

module.exports = autenticacaoToken;
