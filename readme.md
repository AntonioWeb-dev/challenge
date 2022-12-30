# Projeto backend

  Este é um projeto para demostrar a comunicação entre serviços via grpc, ultilizando uma api rest para realizar o CRUD.

# Objetivo

  ### Aplicação 1
    Deverá disponibilizar um CRUD de tabela ‘empresa’ com pelo menos as colunas ‘nome’ e ‘cnpj’
    Deverá manter os dados em um banco de dados relacional
    Opcional: Deverá ser escalável horizontalmente
    Apenas a aplicação 2 deverá ter permissão de consumir os serviços fornecidos pela aplicação 1
 
  ### Aplicação 2
    Deverá ser capaz de consultar a aplicação 1 e disponibilizar via API Rest o CRUD de empresa
    
  # Ferramentas usadas:
  
   - nodejs
   - nestj
   - typescript
   - grpc
   - docker-compose
   - postgresql
   - jwt
   - prisma

  # Executar projeto:
    Caso a API ainda esteja no ar você pode acessar por esse link: http://198.199.88.44
    
    Deploy feito em uma droplet basic 1gb RAM
  
  <h4>Caso você queira testar localmente, faça o passo a passo:</h4>
  
    git clone git@github.com:AntonioWeb-dev/challenge.git
    cd challenge
    docker-compose up --build -d(para inicializar o postgres)
    agora as instruções para inicializar os serviços estão em seus respectivos diretorios


