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

# Executar API: 
    Após feito o clone, como mostrado no readme principal, vá a pasta do "server-api".
    
    comandos:
     yarn
     yarn start
     
### proto do grpc:
  syntax = "proto3";

package empresas;

message Empresa {<br /> 
   string id = 1;<br /> 
   string nome = 2;<br /> 
   string cnpj = 3;<br /> 
   string createdAt = 4;<br /> 
   string updatedAt = 5;<br /> 
}<br /> 

message EmpresaUpdate {<br /> 
  string id = 1;<br /> 
  string nome = 2;<br /> 
  string cnpj = 3;<br /> 
  string jwt = 4;<br /> 
}

message NewEmpresa {<br /> 
   string nome = 1;<br /> 
   string cnpj = 2;<br /> 
   string jwt = 3;<br /> 
}


message EmpresaReq {<br /> 
   string id = 1;<br /> 
   string jwt = 3;<br /> 
}

message Void {}

service EmpresaService {<br /> 
    rpc CreateEmpresa(NewEmpresa) returns (Empresa) {};<br /> 
    rpc GetEmpresa (EmpresaReq) returns (Empresa) {};<br /> 
    rpc RemoveEmpresa (EmpresaReq) returns (Empresa) {};<br /> 
    rpc UpdateEmpresa (EmpresaUpdate) returns (Void) {};<br /> 
}<br /> 
