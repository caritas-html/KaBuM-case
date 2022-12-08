# KaBuM-case

Olá, este é um projeto, em um monorepo, feito em nodeJS, Typescript, Typeorm com o uso do mySQL em um container docker. O Front-end é composto apenas por ReactJS com Typescript.

Passos para executar este projeto:

# requisitos: 
1. NodeJS instalado na máquina
2. Docker instalado na máquina

## Frontend

1. Na pasta raiz do projeto, acesse o frontend `cd frontEnd` depois rode `npm install`
2. inicialize o frontend com o comando `npm run dev`

## Backend

1. Na pasta raiz do projeto, acesse o backend `cd backEnd`
2. Inicialize os containers do docker-compose com o comando `docker-compose up -d`

Aguarde o docker inicializar o banco de dados e rodar as migrações e a aplicação estara rodando na porta indicada pelo vite 5173.
