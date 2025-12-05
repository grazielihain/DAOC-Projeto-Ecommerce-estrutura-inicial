# StoreTchê – Sistema de Carrinho com React

Projeto desenvolvido em **React** utilizando **Context API** para gerenciamento de estado global e **JSON Server** como API fake para simular um backend.  
A aplicação simula uma loja com produtos típicos do contexto gaúcho, controle de estoque, carrinho de compras e cadastro de produtos.

---

## Tecnologias Utilizadas

- React (Vite)
- React Router DOM
- Context API
- JSON Server
- Tailwind CSS
- JavaScript 

---

## Estrutura do Projeto

├─ public/
|  ├─ assets/
|     └─ churrasco.png     # Imagem utilizada quando o produto não possui imagem cadastrada
├─ src/
|  ├─ components/
│     ├─CardProdutos.jsx    # Card individual de produto usado na listagem
│     ├─Footer.jsx    # Rodapé da aplicação
│     └─Header.jsx    # Cabeçalho com navegação e badge do carrinho
|  ├─ context/
│     └─ CarrinhoContext.jsx    # Context API para gerenciamento global do carrinho
│  ├─ hooks/
│     └─ useFetch.js    # Hook personalizado para consumo da API (GET, POST)
│  ├─ pages/
│     ├─ Cadastro.jsx    # Página de cadastro de novos produtos (validações e imagem padrão)
│     ├─ Carrinho.jsx    # Página do carrinho de compras (lista, quantidades, subtotal/total)
│     ├─ Home.jsx    # Página inicial com listagem e filtros de produtos
│     ├─ NotFound.jsx   #Página de erro 404
│     └─ ProdutosDetalhes.jsx    # Página de detalhes do produto e controle de estoque
│  ├─ services/
│     └─ api.js    # Configuração da URL base da API (JSON Server)
|  ├─ App.jsx    # Configuração das rotas e estrutura principal
|  ├─ index.css   # Estilos globais (Tailwind)
|  └─ main.jsx   #  Ponto de entrada da aplicação React
├─ db.json  #  API (JSON Server)
└─ Readme.md   #  Documentação geral do projeto

---

## Páginas da Aplicação

- **Home** – Lista de produtos com filtros por categoria  
- **Detalhes do Produto** – Informações detalhadas e controle de estoque  
- **Carrinho** – Gerenciamento dos itens adicionados  
- **Cadastro de Produto** – Inclusão de novos produtos no sistema  

---

## Funcionalidades

- Listagem de produtos consumidos da API
- Filtro por categorias:
  - Traje Peão
  - Traje Prenda
  - Acessórios Prenda
- Controle de estoque em tempo real
- Carrinho de compras com:
  - Aumentar e diminuir quantidades
  - Cálculo automático de subtotal e total
  - Remoção de itens
- Cadastro de novos produtos
- Imagem padrão automática quando o usuário não informa imagem
- Validação para não permitir compra sem estoque

---

## Consumo da API (JSON Server)

A API é simulada utilizando **JSON Server**.

### Endpoints utilizados

- `GET /produtos` – Lista todos os produtos  
- `GET /produtos?id={id}` – Busca produto por ID  
- `POST /produtos` – Cadastra novo produto  

---

## Como Rodar o Projeto

1 Clonar o repositório
    git clone https://github.com/grazielihain/DAOC-Projeto-Ecommerce-estrutura-inicial

2 Instalar as dependências

    npm install

3 Rodar o JSON Server

    npx json-server --watch db.json --port 3001

4️ Rodar o projeto React

    npm run dev

Obs.: Imagem Padrão
Caso o usuário não informe uma imagem no cadastro do produto, o sistema utiliza automaticamente uma imagem padrão localizada na pasta:

    public/assets/churrasco.png

---

## Autoria
Projeto desenvolvido por Grazieli Hainzenreder Fernandes

Disciplina: Desenvolvimento de Aplicações Orientada a Componentes
Professor: Juliano Ramos Matos

