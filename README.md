# 📚 API de Gerenciamento Escolar – SESI/SENAI

Esta API foi desenvolvida em sala de aula pelos alunos do curso de Desenvolvimento de Sistemas do Novo Ensino Médio da Escola SESI/SENAI.

O objetivo principal deste projeto é ensinar na prática como construir uma API RESTful utilizando Node.js, Express e MySQL, conectando o mundo da programação com os conceitos de Banco de Dados Relacional.

# 🎯 Objetivos Pedagógicos

Compreender a relação entre banco de dados e aplicações web.

Exercitar o uso do modelo relacional (tabelas, chaves primárias e estrangeiras).

Aprender a criar rotas REST (GET, POST, PUT, DELETE).

Desenvolver autonomia para que cada aluno consiga criar sua própria API adaptada ao seu banco de dados.

# 🚀 Tecnologias Utilizadas

* Node.js

* Express

* MySQL2

* Cors

* Body-Parser

# 📂 Estrutura do Projeto
```
/projeto
 ├── app.js              # Arquivo principal que inicializa o servidor
 ├── conection.js        # Configuração da conexão com o banco de dados MySQL
 ├── routes/
 │    ├── alunos.js      # Rotas CRUD da tabela alunos
 │    └── cursos.js      # Rotas CRUD da tabela cursos
 ```

# ⚙️ Configuração do Projeto
## 1. Clonar o repositório
```
git clone https://github.com/seu-usuario/sua-api.git
cd sua-api
```

## 2. Instalar dependências
```
npm install
```


## 3. Configurar o banco de dados

No arquivo conection.js, substitua pelos dados do seu banco MySQL:

```
const mysql = require("mysql2");
const conection = mysql.createConnection(
    {
        host:"localhost",   // Endereço do servidor MySQL
        user:"root",        // Usuário do banco
        password:"123456",  // Senha do banco
        database:"escola"   // Nome do banco de dados
    }
);
module.exports = conection;
```


# 🔑 Importante:
Os alunos podem criar suas próprias tabelas e apenas substituir os nomes de colunas e tabelas nas rotas (alunos.js e cursos.js) para adaptar ao seu projeto.

## 4. Rodar o servidor
```
node app.js
```

Servidor disponível em:
👉 http://localhost:8080

📌 Rotas Disponíveis
### 🔹 Alunos (/alunos)

* GET /alunos → Lista todos os alunos.

* GET /alunos/:id → Busca um aluno pelo ID.

* POST /alunos/insert → Insere um novo aluno.

* PUT /alunos/insert/:id → Atualiza dados de um aluno.

* DELETE /alunos/del/:id → Remove um aluno.

### 🔹 Cursos (/cursos)

* GET /cursos → Lista todos os cursos.

* GET /cursos/:id → Busca um curso pelo ID.

* POST /cursos/insert → Insere um novo curso.

* PUT /cursos/insert/:id → Atualiza dados de um curso.

* DELETE /cursos/del/:id → Remove um curso.

# 🧑‍💻 Como adaptar para outros projetos?

Os alunos podem criar suas próprias APIs seguindo este modelo:

1. Criar uma nova tabela no banco de dados.

2. Copiar uma das rotas de exemplo (alunos.js ou cursos.js).

3. Alterar os nomes de:

* Tabela → (alunos ou cursos) para o nome da sua nova tabela.

* Colunas → (nome_aluno, data_matricula etc.) para os atributos do seu banco.

4. Registrar a nova rota no arquivo app.js:

```
const minhaRota = require('./routes/minhaTabela');
app.use('/minhaTabela', minhaRota);
```

# 👨‍🏫 Créditos

Este projeto foi construído em conjunto com os alunos do curso de Desenvolvimento de Sistemas do Novo Ensino Médio – Escola SESI/SENAI, como parte das atividades práticas de programação e banco de dados.

* Professor orientador: Lucilani Filho

* Instituição: SENAI

* Turma: Desenvolvimento de Sistemas – Novo Ensino Médio

# 📜 Licença

Este projeto pode ser usado livremente para fins educacionais e de aprendizado.