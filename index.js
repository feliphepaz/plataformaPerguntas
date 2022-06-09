const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/:nome", (req, res) => {
  const nome = req.params.nome;
  const msgErro = false;
  const frutas = ["Banana", "Maçã", "Pêra"];
  res.render("index", {
    nome,
    idade: 22,
    msgErro,
    frutas,
  });
});

app.listen("8000");
