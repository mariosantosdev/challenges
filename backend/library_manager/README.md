<br />
<p align="center">
    <img src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" alt="Logo" width="200">

  <h3 align="center">Biblioteca by <a href="https://github.com/Lorenalgm">Lorena</a></h3>
 <br />
  <p align="center">
     Sistema de gerenciamento de biblioteca
       <br />
    <br />
    <a href="https://github.com/devchallenge-io/biblioteca-backend">Desafio</a>
    ·
    <a href="https://www.devchallenge.com.br/">DevChallenge</a>
  </p>
</p>

## Índice

- [Devchallenge](#devchallenge)
- [Como Usar](#como-usar)
- [Desafio](#desafio)
  - [Requisitos:](#requisitos)
    - [Rotas da aplicação:](#rotas-da-aplicação)
- [Techs:](#techs)
- [Comunidade DevChallenge](#comunidade-devchallenge)

# Devchallenge

<a href="https://devchallenge.now.sh/"> DevChallenge</a> permite que você evolua suas skills como programador! Participe da nossa <a href="https://discord.gg/yvYXhGj">comunidade</a> o/

# Como Usar

Para usar este projeto, instale em seu computador o node, npm, docker, makefile e se possível o nvm (Para não ter problema de compatibilidade).

Agora iremos configurar o projeto para ser usado:

1. `git clone https://github.com/mariosantosdev/challenges.git` - para clonar o repositório
2. `cd challenges` - para entrar na pasta do repositório
3. `npm i` _ou_ `yarn` - para instalar as dependencias
4. `make up` - para configurar as imagens do docker
5. `npm run start` _ou_ `yarn start` - para inicializar o servidor

# Desafio

Este desafio foi feito a partir deste [repositorio](https://github.com/devchallenge-io/biblioteca-backend)

## Requisitos:

### Rotas da aplicação:

<b>[POST] </b> /obras : A rota deverá receber titulo, editora, foto, e autores dentro do corpo da requisição. Ao cadastrar um novo projeto, ele deverá ser armazenado dentro de um objeto no seguinte formato: { id: 1, titulo: 'Harry Potter', editora: 'Rocco',foto: 'https://i.imgur.com/UH3IPXw.jpg', autores: ["JK Rowling", "..."]};<br><br>
<b>[GET] </b> /obras/ : A rota deverá listar todas as obras cadastradas<br><br>
<b>[PUT] </b> /obras/:id: : A rota deverá atualizar as informações de titulo, editora, foto e autores da obra com o id presente nos parâmetros da rota<br><br>
<b>[DELETE] </b> /obras/:id: : A rota deverá deletar a obra com o id presente nos parâmetros da rota<br>

# Techs:

- Express
- Cors
- Prisma.io
- PostgreSQL
- Docker

# Comunidade DevChallenge

Site: https://www.devchallenge.com.br/ <br>
Discord: https://discord.gg/yvYXhGj <br>
Linkedin: https://www.linkedin.com/company/devchallenge/<br>
Twitter: https://twitter.com/dev_challenge<br>
Instagram: https://www.instagram.com/devchallenge/<br>
