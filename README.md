# Hisnëk Shop

Esta aplicação tem o objetivo de oferecer uma solução mobile simples de uma loja online de produtos diversos, utilizando React Native, GraphQL e AWS Amplify.
Como requisitos funcionais obrigatórios, estão:
  - Listar todos os produtos cadastrados
  - Verificar os detalhes de um produto específico
  - Adicionar produtos a um carrinho e visualizá-lo.

## Arquitetura
### Tecnologias
A solução foi pensada de forma que a aplicação mobile se conecte a um backend que forneça os dados necessários à aplicação (neste caso, produtos) através de uma API GraphQL. Para tal, utilizam-se duas frentes:
  1. Um Backend local, utilizando ExpressJS, que serve um conjunto de produtos mockados
  2. Utilizando a API AWS Amplify GraphQL, aproveitando-se da integração com a autenticação e o Storage.

Além disso, a AWS também é utilizada para autenticação de usuários, fornecendo mecanismos de confirmação de e-mail, recuperação de senha, etc que seriam necessários em uma aplicação de maior porte e que são facilmente configuráveis.

![Arquitetura HS](https://github.com/franklingg/hisnek-test/assets/61962950/f664bac1-7d2b-4c9c-9286-978354102c89)

### Modelagem
Especificamente para o frontend, foi pensada uma modelagem utilizando a arquitetura MVVM (Model-View-ViewModel) que faz alusão ao modelo estado-da-arte MVC mas o adapta para sistemas onde não existe um Controller e o aspecto visual é mais relevante (como é o caso de uma aplicação Frontend, especialmente mobile). Nesse modelo, destacamos as 4 Views (Login, Explorar, Produto e Carrinho) e os 3 Models (Usuário, Produto e ItemCarrinho) e como estes se relacionam na interação das telas.
![Arquitetura HS (2)](https://github.com/franklingg/hisnek-test/assets/61962950/6943febb-d9df-4d61-98c6-edfdd549401e)
![Arquitetura HS (3)](https://github.com/franklingg/hisnek-test/assets/61962950/847f3c0f-bece-4fb6-b4e9-d2dacd902e30)

adb reverse tcp:5000 tcp:5000
ipconfig ipv4
