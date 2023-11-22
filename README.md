# Projeto de Delivery

Este é um projeto de delivery desenvolvido utilizando React, TypeScript, Chakra UI, React Router DOM e técnicas de manipulação do DOM. O objetivo do projeto é criar uma interface responsiva para um aplicativo de entrega de comida, oferecendo recursos como redimensionamento de imagens, animações de hover, filtros de preço e tipo de comida, e uma barra lateral.

## Funcionalidades

- Interface de usuário responsiva que se adapta ao tamanho da tela.
- Componentização completa do projeto, dividindo as funcionalidades em componentes reutilizáveis.
- Utilização do React Router DOM para navegação entre as páginas.
- Manipulação do DOM para redimensionamento de imagens e animações de hover.
- Implementação de filtros de preço e tipo de comida para facilitar a busca por itens.
- Inclusão de uma barra lateral para acesso rápido às opções principais do aplicativo.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- React: uma biblioteca JavaScript para criar interfaces de usuário.
- TypeScript: um superset de JavaScript que adiciona tipagem estática opcional ao código.
- Chakra UI: uma biblioteca de componentes para React que facilita a criação de interfaces bonitas e responsivas.
- React Router DOM: uma biblioteca de roteamento para React que permite a navegação entre as páginas do aplicativo.
- Manipulação de DOM: técnicas para manipular o Document Object Model (DOM) para redimensionar imagens e aplicar animações de hover.

## Testes Automatizados

O projeto foi feito seguido de testes, sendo eles testes unitários, de integração de testes E2E:

- Jest: Utilizado para realizar testes automatizados no projeto. O Jest é um framework de teste JavaScript que se destaca pela simplicidade e eficácia. Ele facilita a escrita e execução de testes unitários, integração e snapshots.
- React Testing Library: Empregado para testar componentes React. Esta biblioteca se concentra em testar a aplicação da perspectiva do usuário, incentivando práticas que simulam a interação do usuário com a aplicação.

## Estrutura do Projeto

A estrutura do projeto segue uma organização de componentes reutilizáveis. Abaixo está um exemplo da estrutura de diretórios do projeto:

```
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Category/
│   │   ├── Food/
│   │   ├── HeadlineCards/
│   │   ├── Hero/
│   │   ├── NavBar/
│   │   └── index.tsx
│   ├── data/
│   ├── app.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

- A pasta `src/assets` contém os recursos do projeto, como imagens, ícones e arquivos de mídia.
- A pasta `src/components` contém os componentes reutilizáveis utilizados no projeto, como `Category`, `Food`, `HeadlineCards`, `Hero` e `NavBar`.
- A pasta `src/data` contém os dados estáticos do aplicativo, como informações sobre as categorias de comida e os itens disponíveis.
- O arquivo `src/app.tsx` é o ponto de entrada do aplicativo React.
- O arquivo `src/main.tsx` renderiza o aplicativo na página HTML.
- O arquivo `src/vite-env.d.ts` contém as declarações de tipo para o ambiente Vite.

## Como executar o projeto

Para executar o projeto localmente, siga as instruções abaixo:

1. Certifique-se de ter o Node.js e o npm instalados em seu ambiente de desenvolvimento.
2. Clone o repositório do projeto.
3. Abra um terminal na pasta raiz do projeto.
4. Execute o comando `yarn` para instalar as dependências do projeto.
5. Execute o comando `yarn dev` para iniciar o servidor de desenvolvimento.
6. Abra o navegador e acesse `http://127.0.0.1:5173/` para visualizar o aplicativo.

## Considerações Finais

Este projeto de delivery é uma aplicação responsiva e componentizada, desenvolvida com as tecnologias React, TypeScript, Chakra UI e React Router DOM. Através de redimensionamento de imagens, animações de hover e filtros de preço e tipo de comida, o aplicativo oferece uma experiência agradável ao usuário. Sinta-se à vontade para explorar e customizar o projeto de acordo com suas necessidades!

---
