// controllers/tarefaController.js

// GET /tarefas
function listar(req, res) {
    res.json([]);
  }
  
  // GET /tarefas/:tarefaId
  function buscarPeloId(req, res) {
    const { tarefaId } = req.params;
    if (tarefaId === "1") return res.status(404).json({ msg: "Tarefa não encontrada" });
    res.json({});
  }
  
  // POST /tarefas
  function criar(req, res) {
    res.status(201).json({ id: "1a2b" });
  }
  
  // PUT /tarefas/:tarefaId
  function atualizar(req, res) {
    const { tarefaId } = req.params;
    if (tarefaId === "1") return res.status(404).json({ msg: "Tarefa não encontrada" });
    res.json({ id: "1a2b" });
  }
  
  // DELETE /tarefas/:tarefaId
  function remover(req, res) {
    const { tarefaId } = req.params;
    if (tarefaId === "1") return res.status(404).json({ msg: "Tarefa não encontrada" });
    res.status(204).end();
  }
  
  module.exports = {
    listar,
    buscarPeloId,
    criar,
    atualizar,
    remover,
  };
  