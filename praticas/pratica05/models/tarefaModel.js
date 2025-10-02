// models/tarefaModel.js

// Array que armazena as tarefas
const tarefas = [];

// Listar todas as tarefas
function listar() {
  return tarefas;
}

// Buscar tarefa pelo id
function buscarPeloId(tarefaId) {
  return tarefas.find(t => t.id === tarefaId) || null;
}

// Criar nova tarefa
function criar(tarefa) {
  const novaTarefa = {
    id: Math.random().toString(36).substr(2, 4),
    ...tarefa,
  };
  tarefas.push(novaTarefa);
  return novaTarefa;
}

// Atualizar tarefa
function atualizar(tarefa) {
  const index = tarefas.findIndex(t => t.id === tarefa.id);
  if (index === -1) return null;

  tarefas[index] = { ...tarefas[index], ...tarefa };
  return tarefas[index];
}

// Remover tarefa
function remover(tarefaId) {
  const index = tarefas.findIndex(t => t.id === tarefaId);
  if (index === -1) return null;

  const [removida] = tarefas.splice(index, 1);
  return removida;
}

// Exportar funções
module.exports = {
  listar,
  buscarPeloId,
  criar,
  atualizar,
  remover,
};
