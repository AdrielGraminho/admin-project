# admin-project 

Este projeto tem como objetivo servir como anotação das horas trabalhadas por desenvolvedores em seus respectivos projetos.
Para executá-lo é necessário o maven instalado, docker e docker-compose.

# Passos para execução: 
-No diretório "/project" execute: "mvn clean package install"

-No diretório "/auth" execute: "mvn clean package install"

-Descompacte o arquivo "data"

-Verifique se os arquivos .jar foram gerados en seus respectivos projetos, caso tenham sido, poderá prosseguir.

-No diretório "infra-as-code", execute "docker-compose up -d"

-Acesse "http://localhost:3000/"

# Para utilizar a interface estarão disponíveis 3 usuários para logar: 
ADMIN

Programador 1

Programador 2

A senha para qualquer deles é 1234

O usuário admin poderá apenas ver as horas trabalhadas de todos os desenvolvedores. Os programadores poderão ver suas horas, editar  e salvar novas.

O serviço auth tem como objetivo funcionar como proxy e autenticar os usuários.

# Para mais informações sobre a API peincipal, acesse: 
http://localhost:8080/swagger-ui.html#/project-controller

Embora não seja usual, adicionei os arquivos do banco a esse diretório, para garantir que todos os testes sejam realizados da melhor forma possível, eles estão em "/db".

