# KaBuM-case

Olá, este é um projeto, em um monorepo, feito em nodeJS, Typescript, Typeorm com o uso do mySQL em um container docker, onde roda tanto o database quanto o servidor node. O Front-end é composto apenas por ReactJS com Typescript.

Passos para executar este projeto:

# requisitos: 
1. NodeJS instalado na máquina
2. Docker instalado na máquina
3. Yarn instalado na máquina

## Frontend

1. Na pasta raiz do projeto, acesse o frontend `cd frontEnd` depois rode `yarn`
2. inicialize o frontend com o comando `yarn dev`

## Backend

1. Na pasta raiz do projeto, acesse o backend `cd backEnd` depois rode `yarn`
2. Crie o arquivo .env (comparado ao .env.example), substitua-o pelo .env de um valor aleatório à chave APP_SECRET para ser o hash do jwt da aplicação.
3. Inicialize os containers do docker-compose com o comando `docker-compose up -d`

Aguarde o docker inicializar o banco de dados e rodar as migrações e a aplicação estara rodando na porta indicada pelo vite 5173.


### Troubleshoting: 

#1 Caso que o servidor node é exitted.

caso o path para a execução do entrypoint.sh esteja em CLRF, será necessário trocar para LF para rodar. Faça essa mudança,
logo em seguida execute na pasta raíz do backend `docker-compose down` e em seguida `docker-compose up -d`
