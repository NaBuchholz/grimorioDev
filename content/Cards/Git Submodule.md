---
type:
tags:
  - Study
  - public
aliases:
  - Submodule
status: Done
relatedTo:
  - "[[./Git]]"
---

## O Que São Submódulos?

Submódulos são repositórios Git incluídos dentro de outro repositório Git. Eles permitem manter código externo como parte do seu projeto, mas mantendo seu histórico e gerenciamento separados.

## Adicionando Um Submódulo

Para adicionar um submódulo ao seu projeto:

```bash
git submodule add [URL] [caminho]
```

Exemplo:

```bash
git submodule add https://github.com/usuario/biblioteca.git libs/biblioteca
```

### Especificando Uma Branch

Para adicionar um submódulo e definir uma branch específica:

```bash
git submodule add -b [nome_da_branch] [URL] [caminho]
```

Exemplo:

```bash
git submodule add -b develop https://github.com/usuario/biblioteca.git libs/biblioteca
```

## O Arquivo .gitmodules

O comando `git submodule add` cria ou atualiza automaticamente o arquivo `.gitmodules` no diretório raiz do seu projeto. Este arquivo rastreia os submódulos e suas configurações:

```
[submodule "libs/biblioteca"]
    path = libs/biblioteca
    url = https://github.com/usuario/biblioteca.git
    branch = develop  # Opcional, presente apenas se você especificar uma branch
```

## Clonando Um Projeto Com Submódulos

### Método 1: Clone Recursivo

```bash
git clone --recursive [URL-do-projeto]
```

### Método 2: Clone Normal + Inicialização

```bash
git clone [URL-do-projeto]
cd [projeto]
git submodule init
git submodule update
```

### Método 3: Comando Combinado

```bash
git clone [URL-do-projeto]
cd [projeto]
git submodule update --init
```

## Tratando Submódulos Aninhados

Para inicializar e atualizar submódulos, incluindo submódulos aninhados (submódulos dentro de submódulos):

```bash
git submodule update --init --recursive
```

## Atualizando Submódulos

### Atualizar Um Submódulo Específico

```bash
cd [caminho-do-submódulo]
git pull origin [branch]
cd ..
git add [caminho-do-submódulo]
git commit -m "Atualizado submódulo para a última versão"
```

### Atualizar Todos Os Submódulos Para as Últimas Versões

```bash
git submodule update --remote
git add .
git commit -m "Atualizados todos os submódulos para as últimas versões"
```

## Verificando O Status Dos Submódulos

```bash
git submodule status
```

## Removendo Um Submódulo

1. Remova o submódulo do arquivo .gitmodules:
	
	```bash
    git config -f .gitmodules --remove-section submodule.[caminho-do-submódulo]
    ```
	
2. Salve as alterações no .gitmodules:
	
	```bash
    git add .gitmodules
    ```
	
3. Remova a seção do submódulo da configuração do Git:
	
	```bash
    git config --remove-section submodule.[caminho-do-submódulo]
    ```
	
4. Remova o submódulo do staging:
	
	```bash
    git rm --cached [caminho-do-submódulo]
    ```
	
5. Comite as alterações:
	
	```bash
    git commit -m "Removido submódulo [nome-do-submódulo]"
    ```
	
6. Apague os arquivos do submódulo:
	
	```bash
    rm -rf [caminho-do-submódulo]
    rm -rf .git/modules/[caminho-do-submódulo]
    ```
	

## Boas Práticas

1. **Especifique versões estáveis**: Vincule submódulos a commits específicos ou tags para evitar problemas com atualizações não testadas.
2. **Documente dependências**: Mantenha uma lista clara de submódulos e suas funções no projeto.
3. **Use submódulos com moderação**: Submódulos adicionam complexidade - use apenas quando necessário.
4. **Considere alternativas**: Para projetos mais simples, dependências de pacotes (npm, pip, etc.) podem ser mais adequadas que submódulos.
	

## Solução De Problemas Comuns

### Submódulos Vazios

Se um submódulo aparecer como um diretório vazio:

```bash
git submodule update --init --recursive
```

### Problemas De Detached HEAD

Se seu submódulo estiver em estado "detached HEAD":

```bash
cd [caminho-do-submódulo]
git checkout [branch-desejada]
```

### Erros Ao Clonar Submódulos

Se você encontrar erros de permissão ao clonar submódulos, verifique:

- Suas credenciais de acesso ao repositório
- Se o URL do submódulo está correto no arquivo .gitmodules
