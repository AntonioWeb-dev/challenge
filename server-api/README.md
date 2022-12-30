# Service 1

  Este é um serviço onde contém todo o CRUD de empresas, e onde deve ser consolidada as regras de negócio.
  
  # Ferramentas usadas:
  
   - nodejs
   - typescript
   - grpc
   - dotenv
   - uuid
   - typescript
   - grpc-tools
   - prisma

## Arquitetura

```
project
│   README.md
│   proto-gen.sh
│   proto  
└───src
    │
    │ config
      └─── envoriomentVars.ts
      └─── module-alias.ts
    │ infra
       └─── grpc
       └─── prisma
    │ modules
       └─── empresa
              └─── domain
              └─── infra
              └─── repository
              └─── useCase
    │ shared
    │ index.ts
```
    
Arquitetura foi estruturada de tal forma para obter uma melhor modularização em cima da regra de negócio, deixando o produto 
mais independente de freameworks e ambientes externos.
