const bd = require("../conection");
const express = require("express");
const app = express.Router();


app.get("/", function(req, res){
    const select = "select * from cursos";
    bd.query(select, function(err, results){
        if(err){
            console.log(err);
        }else{
            res.send(results);
        }
    });
});

app.get("/:id", function(req, res){
    const select = "select * from cursos where curso = ?";
    bd.query(select, [req.params.id], function(err, results){
        if(err){
            console.log(err);
        }else{
            res.send(results);
        }
    });
});

app.delete("/del/:id", function(req, res){
    const del = "delete from cursos where id_curso = ?";
    bd.query(del, [req.params.id], function(err, results){
        if(err){
            console.log(err);
        }else{
            res.send("Registro apagado com sucesso!");
        }
    });
});

app.post("/insert", function(req, res){
    const insert = "insert INTO cursos SET nome_curso=?, data_inicio=?, duracao_curso=?, descricao_curso=?";
    const body = req.body;
    bd.query(insert, [body.nome_curso, body.data_inicio, body.duracao_curso, body.descricao_curso], function(err, results){
        if(err){
            console.log(err);
        }else{
            res.send("Curso cadastrado com sucesso!");
        }
    });
});

app.put("/insert/:id", function(req, res){
    const update = "update cursos SET nome_cursos=?, data_inicio=?, duracao_curso=?, descricao_curso=? WHERE id_curso=?";
    const body = req.body;
    bd.query(update, [body.nome_curso, body.data_inicio, body.duracao_curso, body.descricao_curso, req.params.id], function(err, results){
        if(err){    
            console.log(err);
        }else{
            res.send("Curso atualizado com sucesso!");
        }
    });
});

module.exports = app;