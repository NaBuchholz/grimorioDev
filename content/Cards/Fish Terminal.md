---
type: study
tags:
  - Study
  - public
aliases:
  - terminal fish
status: Done
relatedTo:
---

## Resume

---

## O Que É Fish Terminal ?

Fish Terminal é  

## Guia De Aliases E Funções Do Fish Shell

### Aliases Git

|Alias|Comando|Descrição|
|---|---|---|
|`g`|`git`|Atalho para o comando git|
|`ga`|`git add`|Adiciona arquivos ao stage|
|`gaa`|`git add --all`|Adiciona todos os arquivos ao stage|
|`gb`|`git branch`|Lista ou manipula branches|
|`gc`|`git commit -v`|Commit com modo verbose (mostra diff)|
|`gcm`|`git commit -m`|Commit com mensagem|
|`gca`|`git commit -v --amend`|Altera o último commit|
|`gco`|`git checkout`|Muda de branch ou restaura arquivos|
|`gd`|`git diff`|Mostra mudanças entre commits/arquivos|
|`gf`|`git fetch`|Baixa objetos e refs do repositório remoto|
|`gl`|`git pull`|Puxa e integra mudanças de um repositório remoto|
|`gp`|`git push`|Envia commits para um repositório remoto|
|`gs`|`git status`|Mostra o status do repositório|
|`glog`|`git log --oneline --decorate --graph`|Log compacto com gráfico de commits|
|`gloga`|`git log --oneline --decorate --graph --all`|Log compacto com gráfico de todos os commits|

### Aliases Padrão 42

|Alias|Comando|Descrição|
|---|---|---|
|`gccw`|`gcc -Wall -Wextra -Werror`|Compila com flags de aviso da Norma 42|
|`normall`|`find . -type f \( -name "*.c" -o -name "*.h" \) -exec norminette {} \;`|Executa norminette em todos arquivos .c e .h|

### Funções Git Avançadas

| Função           | Descrição                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------ |
| `gac "mensagem"` | Adiciona todos os arquivos e faz commit com a mensagem fornecida                           |
| `gpush`          | Faz push para o branch atual no repositório origin                                         |
| `gpull`          | Faz pull do branch atual do repositório origin                                             |
| `gacp`           | **Combo**: Adiciona todos os arquivos, faz commit com a mensagem e dá push na branch atual |

### Configurações Adicionais

- A mensagem de boas-vindas do Fish está desativada

## References and Footnotes
