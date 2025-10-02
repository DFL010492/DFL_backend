const request = require("supertest");
const app = require("../app");

describe("Testando API de Tarefas", () => {
  it("GET /tarefas deve retornar lista vazia", async () => {
    const res = await request(app).get("/tarefas");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("GET /tarefas/1 deve retornar 404", async () => {
    const res = await request(app).get("/tarefas/1");
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ msg: "Tarefa não encontrada" });
  });

  it("GET /tarefas/2 deve retornar objeto vazio", async () => {
    const res = await request(app).get("/tarefas/2");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({});
  });

  it("POST /tarefas deve retornar 201 e id fixo", async () => {
    const res = await request(app).post("/tarefas").send({ titulo: "Nova" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ id: "1a2b" });
  });

  it("PUT /tarefas/1 deve retornar 404", async () => {
    const res = await request(app)
      .put("/tarefas/1")
      .send({ titulo: "Atualizado" });
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ msg: "Tarefa não encontrada" });
  });

  it("PUT /tarefas/2 deve retornar id fixo", async () => {
    const res = await request(app)
      .put("/tarefas/2")
      .send({ titulo: "Atualizado" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ id: "1a2b" });
  });

  it("DELETE /tarefas/1 deve retornar 404", async () => {
    const res = await request(app).delete("/tarefas/1");
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ msg: "Tarefa não encontrada" });
  });

  it("DELETE /tarefas/2 deve retornar 204 sem body", async () => {
    const res = await request(app).delete("/tarefas/2");
    expect(res.statusCode).toBe(204);
    expect(res.body).toEqual({});
  });
});
