# Exemplo de Rotas Públicas e Privadas com Next.js

Este projeto demonstra um sistema básico de rotas públicas e privadas usando React.js e Next.js 13. Ele serve como um ponto de partida para entender como proteger rotas que exigem autenticação em suas aplicações Next.js.

## Funcionalidades

* **Rotas Públicas:** Páginas acessíveis a todos os usuários, como login, cadastro, produtos e sobre nós.
* **Rotas Privadas:** Páginas que exigem autenticação para serem acessadas, como o perfil do usuário.
* **Autenticação Simulada:** Um sistema de autenticação simples e simulado, ideal para fins de demonstração.
* **Middleware:** Utilização do middleware para proteger rotas privadas e redirecionar usuários não autenticados.
* **Layouts:** Utilização de layouts para criar estruturas de página consistentes para rotas públicas e privadas.

## Pré-requisitos

* Node.js (versão 22 ou superior)
* npm ou yarn

## Estrutura do Projeto

* `src/app/`: Diretório principal.
    * `(private)/`: Rotas privadas que exigem autenticação.
        * `layout.tsx`: Layout compartilhado para rotas privadas.
        * `(perfil)/`: Rotas relacionadas ao perfil do usuário.
    * `(public)/`: Rotas públicas acessíveis a todos os usuários.
        * `cadastre-se/`: Rota de cadastro.
        * `login/`: Rota de login.
        * `produtos/`: Rota de produtos.
        * `sobre-nos/`: Rota sobre nós.
        * `layout.tsx`: Layout compartilhado para rotas públicas.
    * `middleware.ts`: Middleware para proteger rotas privadas e redirecionar usuários não autenticados.

## Explicação do Código

* **Middleware (`middleware.ts`):** O middleware verifica se o usuário está autenticado. Se não estiver, redireciona para a página de login ao tentar acessar rotas em `(private)`.
* **Layouts (`layout.tsx`):** Os layouts em `(private)` e `(public)` definem a estrutura comum das páginas em cada grupo de rotas.
* **Rotas:** As rotas em `(private)` e `(public)` são definidas por diretórios, com `page.tsx` (ou `.jsx`) dentro de cada um, contendo o conteúdo da página.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.