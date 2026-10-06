# Devfinder

[English](README.md) · **Português**

> Digite um usuário do GitHub e veja o perfil público dessa pessoa num card, no tema escuro ou claro.

**Demo no ar:** [dev-finder-woad.vercel.app](https://dev-finder-woad.vercel.app)

![Devfinder no tema escuro mostrando o card de perfil da conta octocat do GitHub](docs/screenshots/profile-dark.png)

## Sobre

O Devfinder é uma aplicação React de página única que busca um usuário na API REST pública do GitHub (`GET /users/{username}`) e monta a resposta num card de perfil. Não tem backend: o próprio navegador chama a API, sem token e sem nada para configurar. Foi escrito em março de 2023 com React, TypeScript e styled-components.

## Funcionalidades

- **Busca por usuário** — digite o nome de usuário e clique em **Search**. Em telas estreitas o botão some e quem faz a busca é o ícone da lupa.
- **Card de perfil** — avatar, nome, data de entrada no GitHub, `@usuário`, bio, número de repositórios públicos, seguidores e seguindo, além de localização, Twitter, site e empresa.
- **Campos vazios** — quando a API devolve `null` para localização, Twitter, site ou empresa, o card mostra "Not Available" no lugar.
- **Tema escuro e claro** — a troca fica no cabeçalho; a escolha é salva no `localStorage` e continua valendo depois de recarregar a página.
- **Aviso de erro** — quando a busca falha, um toast "User not found" aparece por três segundos.
- **Layout responsivo** — abaixo de 500 px de largura os números e os links do card ficam numa coluna só.

## Telas

| Tema claro | Usuário inexistente |
| --- | --- |
| ![O mesmo card de perfil no tema claro](docs/screenshots/profile-light.png) | ![Toast "User not found" depois de buscar um usuário que não existe](docs/screenshots/user-not-found.png) |

No celular (390 px de largura):

<img src="docs/screenshots/profile-mobile.png" alt="Card de perfil empilhado numa coluna numa tela de 390 px de largura" width="300">

## Tecnologias

- **Frontend:** React 18, TypeScript 4, Vite 4
- **Estilo:** styled-components 5 (theme provider para os temas escuro e claro)
- **Bibliotecas:** axios (cliente da API do GitHub), react-toastify (aviso de erro), phosphor-react (ícones)
- **Lint:** ESLint 8 com `@rocketseat/eslint-config`

## Como rodar

### Pré-requisitos

- Node.js e npm (testado com Node.js 24)

### Instalação

```bash
git clone https://github.com/giovaniocan/devFinder.git
cd devFinder
npm install
npm run dev
```

Abra http://localhost:5173.

Para gerar o build de produção e servir localmente:

```bash
npm run build
npm run preview
```

A aplicação chama a API do GitHub sem token, então vale o limite do GitHub para requisições não autenticadas. Quando ele estoura, as buscas falham e mostram o mesmo toast "User not found" até o limite zerar.
