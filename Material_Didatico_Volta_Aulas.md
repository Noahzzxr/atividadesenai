# 🎓 Material Didático: Volta às Aulas – Desenvolvimento de Sistemas

**Unidade:** SENAI Morvan Figueiredo  
**Curso:** Técnico em Desenvolvimento de Sistemas  
**Eixo Temático:** Revisão Front-end e Introdução a Banco de Dados  

---

## 1. Abertura e Contextualização

Prezados alunos, sejam muito bem-vindos ao início de mais um semestre letivo na unidade SENAI Morvan Figueiredo! É com grande satisfação que retomamos nossa jornada de aprendizado no curso de Desenvolvimento de Sistemas.

Neste primeiro momento, faremos uma **retomada dos conceitos fundamentais** abordados no semestre anterior. O domínio dessas tecnologias é pré-requisito essencial para o avanço da nossa matriz curricular. Revisitaremos:

- **HTML, CSS e JavaScript**: A tríade estrutural, visual e comportamental do desenvolvimento web.
- **Ambiente de Desenvolvimento**: O uso eficaz do Visual Studio Code.
- **Controle de Versão**: Estruturação e versionamento de código com Git.
- **Publicação de Projetos**: Deploy seguro de aplicações através do GitHub e GitHub Pages.

**Justificativa Pedagógica:** A consolidação dessa base técnica garantirá que todos possuam o domínio prático do fluxo completo de desenvolvimento e publicação web antes de avançarmos em conceitos mais robustos.

A partir desse nivelamento e clareza de fluxo, iniciaremos nosso novo foco de estudos: **Banco de Dados e Persistência de Dados**. Vocês compreenderão como sistemas no mundo real armazenam, processam e manipulam informações de forma contínua e escalável.

---

## 2. Atividade 1 – Revisão Técnica e Publicação Web

**Título:** Desenvolvimento e Publicação de Landing Page – Tema "Minhas Férias"  
**Entrega:** Link do repositório e link do site publicado (via Google Classroom)

**Objetivo:** Consolidar os fundamentos técnicos das tecnologias base da web (HTML/CSS/JS) e vivenciar a simulação de um fluxo real de desenvolvimento colaborativo, versionamento e publicação em nuvem.

**Descrição do Desafio:** Vocês deverão desenvolver, do zero, uma página web simples, estilizada e interativa, com o tema “Minhas Férias”. Essa página representará uma landing page ou diário relatando suas experiências ou os projetos desenvolvidos durante o recesso.

### Requisitos Obrigatórios:

**a) Estrutura de Diretórios:**
Seu projeto deve seguir estritamente a arquitetura de pastas apresentada abaixo:
```text
meu-projeto/
├── index.html
├── js/
│   └── script.js
├── css/
│   └── style.css
└── README.md
```

**b) Requisitos Técnicos:**
- **HTML:** Utilização de semântica correta (`<header>`, `<main>`, `<section>`, `<footer>`).
- **CSS:** Estilização com boas práticas e construção de layouts responsivos utilizando **Flexbox** ou **CSS Grid**.
- **JavaScript:** Implementação de ao menos uma funcionalidade interativa (por exemplo: botão de modo escuro/claro, alerta personalizado ou manipulação simples do DOM).

**c) Procedimento de Publicação (GitHub Pages):**
1. Com seu código pronto no VS Code, crie um repositório no seu GitHub e envie as alterações iniciais (`git init`, `git add .`, `git commit`, `git push`).
2. Confirme que o código está consolidado na **branch principal** (normalmente `main` ou `master`).
3. No painel de controle do repositório no GitHub, acesse a aba **Settings** e encontre a seção **Pages** no menu lateral.
4. Em *Source* (ou *Build and deployment*), selecione a sua branch principal e a pasta *root*, em seguida, clique em *Save*.
5. Aguarde até dois minutos, atualize a página, e o GitHub fornecerá o link da sua aplicação publicada. Valide o acesso em seu navegador.

**d) Critérios de Entrega (Google Classroom):**
- O link exato do repositório no GitHub.
- O link da aplicação publicada e funcional fornecido pelo GitHub Pages.

---

## 3. Atividade 2 – JavaScript e Introdução à Persistência

**Objetivo:** Reforçar a lógica em JavaScript e, gradativamente, introduzir o conceito de persistência de dados no lado do cliente (front-end).

**Descrição do Desafio:** Criaremos agora um formulário de captura de dados. A grande novidade é que os dados deverão ser armazenados na memória do navegador e lá permanecerão, mesmo caso a plataforma seja fechada ou recarregada.

### Entendendo a Persistência Front-end: `localStorage`
O `localStorage` faz parte da Web Storage API, oferecendo uma forma nativa de armazenar dados na sessão do usuário em um padrão **chave–valor**. Suas maiores características incluem:
- **Persistência no navegador:** A informação é guardada na máquina do próprio usuário, sobrevivendo a recarregamentos de página.
- **Independência de backend:** É manipulado integralmente via JavaScript, eliminando a dependência imediata de um servidor de retaguarda.

> ⚠️ **Observação Pedagógica Fundamental:** Embora fantástico e ágil para armazenar configurações de interface ou rascunhos em cache, ressalta-se que o `localStorage` **não substitui de forma alguma bancos de dados reais**. Em sistemas comerciais, este modelo não é adequado para lidar com dados escaláveis, seguros e multi-usuários. Todo banco relacional e estruturado (que será nosso próximo grande passo) oferece garantias de integridade e processamento que o storage local do browser não acompanha.

### Requisitos Funcionais do Desafio:
Sua página deverá conter um formulário simples, dotado obrigatoriamente de:
1. **Um campo de texto:** (ex.: Nome do aluno ou Serviço desejado).
2. **Um campo de e-mail ou número:** (ex.: Contato principal ou Idade do cadastrado).
3. **Um botão de submissão:** Para acionar o envio e disparo dos eventos.
4. **Área de Exibição Dinâmica:** Uma lista, bloco ou tabela que capture os dados diretamente da memória e os evidencie na interface de modo agradável.

---

## 4. Exemplo Prático Orientado

Abaixo, um material de referência integral e simplificado simulando um cadastro de contatos e a respectiva persistência na memória do navegador utilizando o `localStorage`.

(O código-fonte correspondente a esse exemplo já está disponível nos arquivos `index.html`, `style.css` e `script.js` salvos na raiz da sua pasta de trabalho!)

---

## 5. Finalidade Pedagógica e Próximos Passos

Para encerrarmos nossa abertura letiva, cabe compreendermos a razão de estruturarmos o conhecimento neste formato. Estas duas atividades e o exemplo referencial não estão aqui por acaso.

Revisá-las traz uma premissa pragmática para **consolidar a base técnica do seu desenvolvimento front-end moderno**. É indispensável para sua formação como Desenvolvedor de Sistemas que você possua firmeza na execução limpa, no empacotamento mental e no *deploy* real de sua aplicação. 

Ao mesmo tempo, ao dominarem o armazenamento por `localStorage`, somos convidados a conceber a arquitetura da manipulação de informações. Este passo prepara integralmente a percepção de vocês para iniciar a **transição e concepção ao ambiente de Bancos de Dados formais**. Ali desdobraremos a abstração, abordaremos consistência da informação, segurança sob autenticação, chaves estrangeiras, consultas estruturadas (SQL) e todo o suporte de manutenção (CRUD) que regem as aplicações coorporativas de grande escala.

Frente aos nossos novos desafios e a esta nivelamento essencial, vosso foco e dedicação são indispensáveis.

Desejo a todos um semestre técnico impecável, repleto de desafios contundentes, inovação e linhas de códigos produtivas.  
**Mãos à obra!**
