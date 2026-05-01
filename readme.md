# 🔍 GitHub Dev Finder

Uma aplicação web moderna e responsiva que utiliza a API oficial do GitHub para buscar e exibir informações detalhadas de perfis de desenvolvedores.

---

## 🌐 Live Demo
https://jefersonpimentel.github.io/buscador-perfil-github/


## 🚀 Demonstração

O projeto permite que o usuário digite um username e visualize em tempo real:
- Foto de Perfil (Avatar)
- Nome e Bio do desenvolvedor
- Estatísticas (Seguidores e Repositórios públicos)
- Link direto para o perfil completo no GitHub

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias fundamentais da web:

- **HTML5**: Estrutura semântica.
- **CSS3**: Estilização moderna e design responsivo (Mobile First).
- **JavaScript (ES6+)**: Manipulação de DOM, consumo de API assíncrona (`fetch`, `async/await`) e tratamento de erros.

## 📱 Funcionalidades e Diferenciais

- **Responsividade Total**: Layout adaptado para Celulares, Tablets e Desktops.
- **Feedback Visual (UX)**: Carregamento durante a requisição à API.
- **Tratamento de Erros**: Mensagens personalizadas na tela para campos vazios ou usuários não encontrados.
- **Segurança**: Uso de `rel="noopener noreferrer"` em links externos e tratamento de strings com `textContent`.

## 🎨 Design

O design foi inspirado no **Dark Mode oficial do GitHub**, utilizando a paleta de cores:
- Fundo: `#0d1117`
- Cartão: `#161b22`
- Sucesso (Verde): `#238636`
- Erro (Vermelho): `#f85149`

