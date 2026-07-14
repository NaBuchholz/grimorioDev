---
type: study
tags:
  - Study
  - 42School
  - 42sp
  - Programação/DevOps
  - DevOps42
  - public
aliases:
status: Doing
relatedTo:
  - "[Git](<./Git.md>)"
  - '[[🚀 DevOps Club 42SP - "Um Pipeline Por Vez"|DevOps 42]]'
  - '[[🚀 DevOps Club 42SP - "Um Pipeline Por Vez"]]'
---

## 📘 Sessão 1 – DevOps Dojo: Git & As Três Maneiras

### 🎯 Objetivo Geral

Vivenciar na prática os princípios de DevOps através de colaboração com Git, focando em versionamento, comunicação e aprendizado contínuo — sem necessidade de automação neste primeiro momento.

---

### 📚 As Três Maneiras Do DevOps

Baseado no livro *The DevOps Handbook* — Capítulo 1: *The Three Ways*

#### 1. **Fluxo (Flow)**

Melhorar o fluxo do trabalho — da ideia até a entrega de valor.

- Entregas frequentes e pequenas.
- Redução de retrabalho e gargalos.

**Nesta sessão:** usamos Git para criar um fluxo de contribuições pequenas, organizadas por branch.

---

#### 2. **Feedback Rápido**

Criar ciclos de feedback constantes em todas as direções.

- Saber logo se algo quebrou.
- Comunicação clara entre times.

**Nesta sessão:** cada commit e merge traz retorno imediato sobre o que mudou e se houve conflito.

---

#### 3. **Aprendizado Contínuo E Experimentação**

Criar uma cultura de melhoria contínua.

- Aprender com erros.
- Compartilhar conhecimento.
- Experimentar com segurança.

**Nesta sessão:** formato dojo permite rodízio de participantes, observação ativa, e resolução de erros em grupo.

---

### 🧪 Atividade 1: Jogo Das Branches — “DevOps, Por Onde começamos?”

#### 📦 Descrição

Cada pessoa cria uma branch e adiciona uma ideia de atividade para o futuro do clube no arquivo `ideias.md`.

#### 🧭 Etapas

1. Clonar o repositório inicial.
2. Criar uma branch com seu nome: `git checkout -b seu-nome`
3. Editar `ideias.md` e adicionar sua sugestão.
4. Adicionar, commitar, e fazer pull da main.
5. Resolver conflitos, se houver.
6. Fazer merge da sua branch na main.

---

### 📚 Atividade 2: Repositório Oficial — Base De Conhecimento

#### 📦 Descrição

Apresentar o repositório oficial do DevOps Club e convidar todes a contribuir com:

- Resumos de sessões
- Conteúdos aprendidos
- Links e dicas úteis
- Documentações de futuras atividades

#### 📁 Estrutura Sugerida

```
devopsclub42/
├── README.md
├── ideias.md
├── encontros/
│   └── 2025-07-22.md
├── conteudos/
│   └── devops_3_maneiras.md
└── desafios/
    └── jogo-das-branches.md
```

---

### ✅ Checklist De Comandos Git

```bash
# Clonar repositório
git clone <URL-do-repo>

# Verificar estado atual
git status

# Criar e entrar em nova branch
git checkout -b meu-nome

# Adicionar arquivo editado
git add ideias.md

# Commitar alteração
git commit -m "Adiciona sugestão de atividade - [Seu Nome]"

# Atualizar branch com últimas mudanças
git pull origin main

# Resolver conflitos se existirem (editar arquivos e salvar)

# Marcar conflitos como resolvidos
git add .

# Finalizar merge (se necessário)
git commit -m "Resolve conflitos com main"

# Subir mudanças
git push origin meu-nome

# Fazer merge (pode ser local ou via PR no GitHub)
git checkout main
git merge meu-nome
git push origin main
```

---

### 🐛 Possíveis Erros Comuns E Como Resolver

| Erro                                                         | Causa                                              | Como Resolver                                                                                              |
| ------------------------------------------------------------ | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `fatal: not a git repository`                                | Você não está dentro da pasta do repositório       | Rode `ls` e `cd` até a pasta correta                                                                       |
| `error: Your local changes... would be overwritten by merge` | Alterações locais não commitadas                   | Faça `git add . && git commit` ou `git stash` antes do `pull`                                              |
| Conflito ao fazer `pull`                                     | Outra pessoa já modificou a mesma parte do arquivo | Editar manualmente o arquivo, apagar os símbolos `<<<<<<<`, `=======`, `>>>>>>>`, salvar, `add` e `commit` |
| `Permission denied (publickey)`                              | Chave SSH não configurada corretamente             | Use HTTPS para clonar (`https://...`) ou configure sua chave SSH                                           |
| `nothing to commit`                                          | Você esqueceu de salvar ou adicionar as mudanças   | Verifique com `git status`, salve o arquivo e refaça `git add`                                             |

O _Manual de DevOps_ (em inglês, **The DevOps Handbook**) foi escrito por um grupo de autores muito influente no movimento DevOps. São eles:

#### ✍️ **Autores Do _The DevOps Handbook_:**

1. **Gene Kim**
	
	- Pesquisador e autor influente no mundo DevOps.
	- Também escreveu _The Phoenix Project_ e _The Unicorn Project_.
	- Um dos principais defensores da cultura DevOps.
		
2. **Jez Humble**
	
	- Coautor de _Continuous Delivery_ (referência absoluta na área).
	- Trabalhou na ThoughtWorks e no Google.
	- Especialista em CI/CD e entrega de software confiável.
		
3. **Patrick Debois**
	
	- Criador do termo "DevOps" (sim, literalmente).
	- Trabalhou para governos, empresas e comunidades, promovendo integração entre devs e ops.
		
4. **John Willis**
	
	- Trabalhou na Chef e na Docker.
	- Especialista em automação de infraestrutura e cultura organizacional.

### Metodo PBC

- Inspirado em metodologias peer-to-peer, KISS e problem-based learning:

#### 🧪 **P – Prática**

Fazemos primeiro, em grupo, no estilo dojo. Aprendemos fazendo, não só ouvindo.

#### 🐞 **B – Bug**

Erros vão aparecer — e são bem-vindos. É onde a mágica (e o aprendizado real) acontece.

#### 💡 **C – Conceito**

Depois damos nome aos bois: conectamos a prática aos conceitos de DevOps com clareza.

### References and Footnotes
