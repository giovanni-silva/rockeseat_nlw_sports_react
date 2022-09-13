import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    { id: 1, name: "Anúncio 1" },
    { id: 2, name: "Anúncio 2" },
    { id: 3, name: "Anúncio 3" },
    { id: 4, name: "Anúncio 4" },
    { id: 5, name: "Anúncio 5" },
  ]);
});

// localhost:3333/ads
// request serve para buscar informações que estão vindo requisição
// reponse serve para eu devolver uma resposta

// podemos fazer a requisição e validar se está passando ou não pelo Insomnia ou Postman ou Hoppscotch

app.listen(3333);
