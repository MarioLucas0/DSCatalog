# DS Catalog

![Badge em Desenvolvimento](https://img.shields.io/static/v1?label=STATUS&message=PROJETO%20EM%20ANDAMENTO&color=GREEN&style=for-the-badge)

# Sobre o projeto


DS Catalog é uma aplicação Full Stack web e mobile construída durante o Bootcamp  **Spring React**, ministrado pela [DevSuperior](https://devsuperior.com/).

O software consiste em uma aplicação de catálogo de produtos, onde há três tipos de permissões, a do usuário não autenticado, que pode apenas visualizar os produtos, a do usuário com perfil operador, que pode também adicionar categorias ou produtos e a do usuário administrador, que além das outras permissões, também pode gerenciar os outros usuários da aplicação.

Neste projeto também foram trabalhados tópicos como testes com Junit, integração com storage de imagens na AWS, além de CI/CD e implantação com Docker e AWS. 

## Layout web

![Web 1](https://raw.githubusercontent.com/RangelMoreira/dscatalog/main/assets/home-frontend.png)

![Web 2](https://raw.githubusercontent.com/RangelMoreira/dscatalog/main/assets/catalogo-frontend.png)

![Web 3](https://raw.githubusercontent.com/RangelMoreira/dscatalog/main/assets/produtos-frontend.png)

![Web 4](https://raw.githubusercontent.com/RangelMoreira/dscatalog/main/assets/produtos-edicao-frontend.png)

![Web 5](https://raw.githubusercontent.com/RangelMoreira/dscatalog/main/assets/formulario-usuarios-frontend.png)

## Modelo conceitual

[![Modelo Conceitual](https://raw.githubusercontent.com/RangelMoreira/dscatalog/main/assets/modelo-conceitual.png)](https://raw.githubusercontent.com/RangelMoreira/dsdeliver-sds2/main/assets/modelo-conceitual.png)

# Tecnologias utilizadas

## Back end

- Java
- Spring Boot
- JPA / Hibernate
- Maven
- OAuth/JWT
- Junit

## Front end

- HTML / CSS / Sass/ Bootstrap/ JS / TypeScript
- ReactJS
- Axios
- React Hook Forms
- React Select

## Implantação em produção

- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql
- Upload de imagens: Amazon S3

# Como executar o projeto

## Back end

Pré-requisitos: Java 11

```
# clonar repositório
git clone https://github.com/RangelMoreira/dscatalog.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web

Pré-requisitos: npm / yarn

```
# clonar repositório
git clone https://github.com/RangelMoreira/dscatalog.git

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```



