const bd = require("../conection");
const express = require("express");
const app = express.Router();


app.get("/", function(req, res){
    const select = "select * from alunos";
    bd.query(select, function(err, results){
        if(err){
            console.log(err);
        }else{
            res.send(results);
        }
    });
});

app.get("/:id", function(req, res){
    const select = "select * from alunos where id_aluno = ?";
    bd.query(select, [req.params.id], function(err, results){
        if(err){
            console.log(err);
        }else{
            res.send(results);
        }
    });
});

app.delete("/del/:id", function(req, res){
    const del = "delete from alunos where id_aluno = ?";
    bd.query(del, [req.params.id], function(err, results){
        if(err){
            console.log(err);
        }else{
            res.send("Registro apagado com sucesso!");
        }
    });
});

app.post("/insert", function(req, res){
    const insert = "insert INTO alunos SET nome_aluno=?, data_nascimento=?, telefone_aluno=?, email_aluno=?, data_matricula=?";
    const body = req.body;
    bd.query(insert, [body.nome_aluno, body.data_nascimento, body.telefone_aluno, body.email_aluno, body.data_matricula], function(err, results){
        if(err){
            console.log(err);
        }else{
            res.send("Curso cadastrado com sucesso!");
        }
    });
});

app.put("/insert/:id", function(req, res){
    const update = "update alunos SET nome_aluno=?, data_nascimento=?, telefone_aluno=?, email_aluno=?, data_matricula=? WHERE id_aluno=?";
    const body = req.body;
    bd.query(update, [body.nome_aluno, body.data_nascimento, body.telefone_aluno, body.email_aluno, body.data_matricula, req.params.id], function(err, results){
        if(err){    
            console.log(err);
        }else{
            res.send("Curso atualizado com sucesso!");
        }
    });
});

module.exports = app;