# API de Blogs

## 📗 About

O **Blogs Api** é uma aplicação RESTful para a manipulação e consultas de posts, permitindo operações de CRUD e autenticação via JWT.

## 🪚 Tools

- <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>     </a> 
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>   </a>
- <a href="https://expressjs.com" target="_blank" rel="noreferrer"> 
   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>   </a> 
- <a href="https://mochajs.org" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg" alt="mocha" width="40" height="40"/> 
  </a> 
- <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> 
  </a> 
- <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/>       </a>

## 📋 Entity-Relationship Diagram

*DER* utilizado para construção das tabelas através do ORM (Sequelize).

![DER](./public/der.png)

## 🚀 How to run locally

```bash
  # Clone the project
  $ git@github.com:ElimarLucena/API-Blogs.git
```
```bash
  # Enter directory
  $ cd API-Blogs
```
```bash
  # Install the dependencies
  $ npm install
```
## 🏃‍♀️ Running in docker
<details>
    <summary><strong>🐋 Before Starting</strong></summary>
    
  -  você vai precisar ter instalado em sua máquina o **docker** e **docker-compose**.
    
  -  Lembre-se de parar o **mysql** se estiver usando localmente na porta padrão (3306).
    
  - Instale as dependências com **npm install**. (Instale dentro do container)
  
  - O git dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.
</details>

Run **node** and **database** services with command
```bash
  # run services
  $ docker-compose up -d --build
```
```bash
  # access to the interactive terminal of the container created by compose
  $ docker exec -it blogs_api_node bash
```

## Author
- LinkedIn - [Elimar](https://www.linkedin.com/in/elimar-lucena-de-oliveira/)
