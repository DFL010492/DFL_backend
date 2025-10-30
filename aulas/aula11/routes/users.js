const express = require('express');
const router = express.Router();
const { gerarToken } = require("../middlewares/auth")


router.post('/login', function(req, res, next) {
  const { username, password } =req.body;

  // simular uma autenticação
  if (username === "jose@iesb.br" && password === "abcd1234"){
    const payload = {
      iss:"Minha API",
      email:username,
      nome:"Jose",
      perfil:"admin"
    }
    try{
    return res.json({token: gerarToken(payload)})
    } catch(err){
      return res.status(500).json({msg: err.message})}
  }

  return res.status(401).json({msg: "Credenciais invalidas"})
});

module.exports = router;
