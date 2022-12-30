# Service 2
  Este é um serviço que contém o jwt que dá permissão para consumir o CRUD do serviço 1, e disponibilizar o CRUD via rest.

# Ferramentas usadas:
  - nodejs
  - typescript
  - nestjs
  - dotenv
  - typescript
  - grpc-tools
  
 # Executar API: 
    Após feito o clone, como mostrado no readme principal, vá a pasta do "client-api".
    
    comandos:
     yarn
     yarn start
     
 ## Rotas da api
  - GET em empresa/:id deve retornar a empresa, caso encontrada.
  - DELETE em empresa/:id deve remover a empresa, caso encontrada.
  - PATCH em empresa/:id deve fazer o update da empresa;
    data = {
      "nome": "empresa-teste",
      "cnpj": "123"
    }
  - POST em empresa/ faz o registro da empresa;
    data = {
      "nome": "empresa-teste",
      "cnpj": "123"
    }
  
  
