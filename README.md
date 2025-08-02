# ✅ Task Manager - Gerenciador de Tarefas

Uma API RESTful desenvolvida em Node.js com Express para gerenciamento de tarefas. Possui autenticação de usuários via JWT, validação com Joi e persistência de dados em PostgreSQL.

---
## Caracteristicas

- Cadastro e login de usuários com senha criptografada
- Autenticação via token JWT
- CRUD de tarefas por usuário
- Validação de dados com Joi
- Proteção para que apenas o dono da task possa alterá-la ou excluí-la
- Organização do projeto seguindo o padrão MSCR (Middlewares, Services, Controllers, Repositories)

---
## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)  
- [Joi](https://joi.dev/) para validação de dados  
- [dotenv](https://www.npmjs.com/package/dotenv) para variáveis de ambiente
- [bcrypt](https://www.npmjs.com/package/bcrypt) para criptografia de senha
- [jsonwebtoken (JWT)](https://www.npmjs.com/package/jsonwebtoken) para autenticação
- [Nodemon](https://nodemon.io/) (dev)

---
## 🧠 Funcionalidades

- ✅ Criar uma nova tarefa
- ✅ Listar todas as tarefas (com filtro por status)
- ✅ Buscar tarefa por ID
- ✅ Atualizar dados de uma tarefa
- ✅ Deletar uma tarefa
- ✅ Cadastrar usuário
- ✅ Login

---
## 📁 Estrutura do Projeto

```bash
src/
├── config/
│   └── db.js
├── controllers/
│   └── taskController.js
│   └── taskController.js
│   └── userController.js
├── services/
│   └── taskService.js
│   └── authService.js
│   └── userService.js
├── schemas/
│   └── authSchema.js
│   └── taskSchema.js
│   └── userSchema.js
├── routes/
│   └── authRoutes.js
│   └── taskRoutes.js
│   └── userRoutes.js
├── middlewares/
│   └── authMiddleware.js
│   └── validateSchema.js
├── repositories/
│   └── taskRepository.js
│   └── userRepository.js
├── utils/
│   └── ApiError.js
├── index.js

```
## 📦 Instalação e Execução

```bash
git clone https://github.com/jessicalira1001/task-manager-nodejs.git
cd task-manager-nodejs
npm install
```

### Crie um arquivo .env com os seguintes dados:

```env

PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario_postgres
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
JWT_SECRET=sua_senha_segura
```
### Inicie a aplicação:

```bash

npm run dev
```
---
## 🔐 Rotas protegidas

Para acessar as rotas de tarefas, é necessário enviar o token JWT no cabeçalho:
```makefile

Authorization: Bearer <token>
```
---
## 📄 Exemplo de requisições no Insomnia
### 1. Criar Usuário
- Método: POST
- URL: http://localhost:3000/usuarios
- Body (JSON):
```json
{
  "nome": "Jéssica Lira",
  "email": "jessica@email.com",
  "senha": "senhaSegura123"
}
```
---
### 2. Fazer Login
- Método: POST
- URL: http://localhost:3000/auth/login
- Body (JSON):
```json
{
  "email": "jessica@email.com",
  "senha": "senhaSegura123"
}
```
---
### 3. Criar Tarefa
- Método: POST
- URL: http://localhost:3000/tasks
- Headers:
  - Authorization: Bearer <token>
- Body (JSON):
```json
{
  "descricao": "Comprar leite",
  "dataVencimento": "2025-08-10"
}
```
---
### 4. Listar Tarefas
- Método: GET
- URL: http://localhost:3000/tasks
- Headers:
  - Authorization: Bearer <token>

---
## 📌 Próximos passos
 - Documentação com Swagger
 - Deploy da API
 - Testes automatizados

---

## 👩‍💻 Desenvolvedora
Feito por Jéssica Lira 👩‍💻

[LinkedIn](https://www.linkedin.com/in/jessicaliradev/) | [GitHub](https://github.com/jessicalira1001)
