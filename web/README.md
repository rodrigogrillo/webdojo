# WebDojo - Testes Automatizados com Cypress

## 📌 Visão Geral

Este projeto contém os **testes automatizados end-to-end (E2E)** da
aplicação **WebDojo**, desenvolvidos utilizando **Cypress**.

O objetivo destes testes é validar os principais fluxos da aplicação
garantindo:

-   estabilidade das funcionalidades
-   regressão automatizada
-   execução em diferentes resoluções de tela

A aplicação **WebDojo** está localizada **no mesmo repositório**,
portanto é necessário executá-la antes de rodar os testes.

------------------------------------------------------------------------

# 🚀 Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

-   Node.js (versão 16+ recomendada)
-   npm ou yarn
-   Cypress

Instalar dependências:

``` bash
npm install
```

------------------------------------------------------------------------

# ▶️ Executando a aplicação WebDojo

A aplicação precisa estar rodando localmente para que os testes Cypress
possam acessá-la.

``` bash
npm run dev
```

Script utilizado:

``` json
"dev": "serve -s dist -p 3000"
```

A aplicação ficará disponível em:

    http://localhost:3000

------------------------------------------------------------------------

# 🧪 Executando os Testes Automatizados

## Executar todos os testes (modo headless)

``` bash
npm run test
```

Comando executado:

``` bash
npx cypress run --config viewportWidth=1440,viewportHeight=900
```

------------------------------------------------------------------------

## Executar testes com interface do Cypress

``` bash
npm run test:ui
```

Abre o Cypress Test Runner.

------------------------------------------------------------------------

## Executar apenas os testes de Login

``` bash
npm run test:login
```

Executa:

    cypress/e2e/login.cy.js

------------------------------------------------------------------------

## Executar teste de Login em resolução Mobile

``` bash
npm run test:login:mobile
```

Configuração utilizada:

    viewportWidth=414
    viewportHeight=896

Simula dispositivos como **iPhone XR / iPhone 11**.

------------------------------------------------------------------------

# 📂 Estrutura do Projeto Cypress

    cypress
     ├── e2e
     │
     ├── fixtures
     │   ├── cep.json
     │   ├── consultancy.json
     │   └── document.pdf
     │
     └── support
         ├── actions
         │   └── consultancy.actions.js
         │
         ├── commands.js
         ├── e2e.js
         └── utils.js

------------------------------------------------------------------------

## 📁 cypress/e2e

Contém os **arquivos de testes automatizados**.

Exemplo:

    login.cy.js

Cada arquivo representa cenários de teste de uma funcionalidade.

------------------------------------------------------------------------

## 📁 cypress/fixtures

Armazena **dados mockados utilizados nos testes**.

  Arquivo            Descrição
  ------------------ -------------------------------------------
  cep.json           Dados de CEP utilizados em formulários
  consultancy.json   Dados utilizados em testes de consultoria
  document.pdf       Arquivo usado em testes de upload

Uso em testes:

``` javascript
cy.fixture('arquivo')
```

------------------------------------------------------------------------

## 📁 cypress/support

Contém configurações globais e reutilização de código.

### actions/

Contém **ações de negócio reutilizáveis**.

Exemplo:

    consultancy.actions.js

Aqui ficam funções como:

-   criar consultoria
-   preencher formulários
-   validar resultados

------------------------------------------------------------------------

### commands.js

Define **comandos customizados do Cypress**.

Exemplo:

``` javascript
Cypress.Commands.add('login', (user, password) => {
  // lógica de login
})
```

Uso:

``` javascript
cy.login()
```

------------------------------------------------------------------------

### e2e.js

Arquivo carregado automaticamente antes dos testes.

Utilizado para:

-   configurações globais
-   importação de comandos
-   setup inicial

------------------------------------------------------------------------

### utils.js

Contém **funções utilitárias reutilizáveis**.

Exemplos:

-   geração de dados aleatórios
-   formatação de dados
-   helpers para validações

------------------------------------------------------------------------

# 📱 Resoluções utilizadas nos testes

  Tipo      Resolução
  --------- ------------
  Desktop   1440 x 900
  Mobile    414 x 896

------------------------------------------------------------------------

# ✅ Boas práticas utilizadas

-   Separação entre **dados (fixtures)** e **lógica de testes**
-   Reutilização com **actions e custom commands**
-   Estrutura organizada de testes
-   Execução em **desktop e mobile**

------------------------------------------------------------------------

# 📌 Melhorias futuras

-   Integração com CI/CD
-   Relatórios de execução de testes
-   Screenshots automáticos em falhas
-   Testes de API
-   Integração com ferramentas como **Allure** ou **Mochawesome**
