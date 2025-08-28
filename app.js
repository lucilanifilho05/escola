const express = require("express");
const app = express();
const alunosRoutes = require('./routes/alunos');
const cursosRoutes = require('./routes/cursos');

const cors = require("cors");  // Importa o pacote cors
const body = require("body-parser");

app.use(cors());

app.use(body.json());

//USar as rotes de alunos
app.use('/alunos', alunosRoutes);

//Usar as rotas de cursos
app.use('/cursos', cursosRoutes);

app.listen(8080, function(){
    console.log("Servidor rodando na porta 8080!");
});