# ✅ Task Manager - Gerenciador de Tarefas

Projeto back-end de gerenciamento de tarefas desenvolvido com Node.js e Express, seguindo o padrão MSCR (Model-Service-Controller-Repository). Permite criar, listar, buscar, atualizar e deletar tarefas.

---

## 🚀 Demonstração

*Este projeto é um back-end. Para testar, utilize ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/).*

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

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [pg](https://www.npmjs.com/package/pg)  
- [Joi](https://joi.dev/) para validação de dados  
- [dotenv](https://www.npmjs.com/package/dotenv) para variáveis de ambiente
- [bcrypt](https://www.npmjs.com/package/bcrypt) para criptografia de senha
- [jsonwebtoken (JWT)](https://www.npmjs.com/package/jsonwebtoken) para autenticação

---

## 📁 Estrutura do Projeto

```bash
src/
├── config/
│   └── senhaJWT.js
├── controllers/
│   └── taskController.js
│   └── taskController.js
│   └── userController.js
├── services/
│   └── taskService.js
│   └── authService.js
│   └── userService.js
├── models/
│   └── db.js
├── routes/
│   └── taskRouter.js
├── middlewares/
│   └── authMiddleware.js
├── database/
│   └── connection.js
├── utils/
│   └── ApiError.js
├── index.js

