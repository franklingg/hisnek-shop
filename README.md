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

## Design

O design/telas (UX/UI) da aplicação foi feito com o Figma, e pode ser [acessado publicamente](https://www.figma.com/file/sHOuorY3mv4vX4NFLgbK6x/Hisn%C3%ABk-Shop?type=design&node-id=0%3A1&mode=design&t=ggr1IOrpxhYFBhsY-1).

## Execução
### Requisitos
Para executar o sistema, é necessário ter o [Node](https://nodejs.org/en) instalado na sua máquina e um emulador (ou dispositivo físico) Android/iOS [configurado e pronto para executar uma aplicação mobile](https://reactnative.dev/docs/environment-setup). Com este repositório clonado na sua máquina, execute:

> `yarn` ou `npm install`

Crie um arquivo `.env` seguindo o modelo em `.env.example`, nele você verá dois valores:
  - `IP_ADDRESS` (opcional): Seu indereço IPv4, que pode ser conferido usando o comando `ipconfig` em um terminal.
  - `SERVER_PORT`: Porta no qual o servidor Express local rodará (5000 sendo recomendada).

O endereço IP é necessário pois ao rodarmos aplicações mobile localmente, o "localhost" é, na visão do app, o seu próprio terminal, por isso não conseguimos acessar nele serviços disponíveis no computador. Caso você prefira não usar o `IP_ADDRESS`, é necessário rodar o comando `adb reverse tcp:SERVER_PORT tcp:SERVER_PORT` (onde você deve trocar SERVER_PORT pelo valor que optou), dessa forma, você "expõe" a porta do seu dispositivo ao seu computador. Por fim, execute:

> `yarn all` ou `npm run all`

Quando o wizard do Metro aparecer, escolha dependendo do sistema mobile que você deseja rodar a aplicação

> `a` ou `i`

Para fins de exemplificação, existe um único usuário cadastrado:
- Usuário: admin
- Senha: adminadmin
