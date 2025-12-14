---
aliases: 
type:
alias:
  - "#Programação/Git"
tags:
  - Programação/Git
  - Versionamento
  - Terminal
  - Bash
  - Programação/Alura
  - public
child: Manual de comandos de Git.
status: Done
---

- [[lucca/cards/Manuel de Comandos Git e Terminal]]
  [[lucca/cards/Git]] é uma ferramenta de versionamento de projetos

<iframe src="https://training.github.com/downloads/pt_BR/github-git-cheat-sheet" width="100%" height="500px" />

## Rebase Vs Merge

<iframe src="https://medium.datadriveninvestor.com/git-rebase-vs-merge-cc5199edd77c" width="100%" height="500px" />

## Conflitos Básicos De Merge E Como Resolve-los

^[https://www.atlassian.com/br/git/tutorials/using-branches/merge-conflicts]

1. Leia o erro
2. `git status` para verificar o que há de errado caso o erro não seja tão descritivo.
   - `git log --merge`  lista de commits com conflitos entre as ramificações
   - `git diff` para encontrar diferenças entre os estados de repositórios/arquivos
   - `git reset --mixed` <mark class="hltr-red">desfazer mudanças no diretório de trabalho e na área de staging.</mark>
3. Examine o arquivo com conflito. `cat` seria melhor para arquivos pequenos e analisar o arquivo no editor de texto para arquivos muito grandes
4. Decida qual alteração vai ficar e exclua as linhas da outra
5. `git add <arquivo>`
6. Crie um commit com as alterações certas `git commit -m "merged and resolved the conflict in <arquivo>`

<iframe src="https://www.atlassian.com/br/git/tutorials/using-branches/merge-conflicts" width="100%" height="500px" />

## Tags E Releases

#Programação/Alura

- Tags marcam um ponto imodificável (fixo) no repositório

## Recuperando Trabalho Perdido

- **<mark class="hltr-red">git reflog</mark>** -> visualizar todas as alterações, se você comitou, você consegue recuperar um `git cherry-pick`!
  ![[lucca/cards/Manuel de Comandos Git e Terminal#^d565a9]]

## Juntando Commits

git rebase com o parâmetro -i de interativo, para selecionar quais commits rebasear, com o HEAD para informar que é a partir de agora `git rebase -i HEAD~3` ou `git rebase -i <commit imediatamente anterior aqueles que quer rebasear>`

## Fluxos De Trabalho Git

### Git Flow

#Programação/Alura

- O estado do código representado pela branch main deve ser o mesmo que estará em produção
- Deve haver uma branch de desenvolvimento (comumente chamado de develop), onde todas as funcionalidades e correções devem ser muito bem testadas antes de ir para produção (main)
- Cada funcionalidade deve ser feita em uma branch separada, e que é comum que esta branch tenha feature/ como prefixo
- Bugs normalmente são corrigidos em branches separadas, com o prefixo hotfix/
- Branches específicas para cada release são criadas para realizar os testes e correções de bugs específicos

### Trunk-based Development

Desenvolvimento necessário para CI/CD pois os testes são feitos depois de cada commit na main(trunk)

<img src="http://qszhuan.github.io/assets/images/trunk_based_development.png" />

## Git Hooks

pesquisar melhor mais para frente!!!! envolve testes e shell script

https://githooks.com

## Aprenda Jogando

https://www.twilio.com/quest
