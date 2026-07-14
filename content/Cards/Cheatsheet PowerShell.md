---
type: guide
tags:
  - Study
  - public
aliases:
status: Draft
relatedTo: []
---

## Resume

---

### Navegação E Sistemas De Arquivos

Get-Location # pwd - diretório atual

Set-Location C:\path # cd - mudar diretório

Push-Location # Salva localização na pilha

Pop-Location # Volta para localização salva

#### Listagem

Get-ChildItem # ls - listar arquivos

Get-ChildItem -Recurse # Recursivo

Get-ChildItem -Force # Incluir arquivos ocultos

Get-ChildItem *.txt # Filtrar por extensão

#### Manipulação De Arquivos

New-Item file.txt -ItemType File

New-Item mydir -ItemType Directory

Copy-Item source.txt dest.txt

Move-Item file.txt newpath\
Remove-Item file.txt

Rename-Item old.txt new.txt

#### Conteúdo De Arquivos

Get-Content file.txt # cat - ler arquivo

Get-Content file.txt -Tail 10 # Últimas 10 linhas

Set-Content file.txt "texto" # Escrever (sobrescreve)

Add-Content file.txt "texto" # Adicionar ao final

### Operadores De Comparação

-eq # Igual
-ne # Diferente
-gt # Maior que
-ge # Maior ou igual
-lt # Menor que
-le # Menor ou igual
-like # Padrão com wildcards
-match # Regex
-contains # Contém
-in # Está em
-and # E lógico
-or # OU lógico
-not # Negação

### Processos E Serviços

#### Processos

Get-Process # Listar processos

Get-Process -Name notepad # Processo específico

Stop-Process -Name notepad # Matar processo

Stop-Process -Id 1234 # Matar por ID

Start-Process notepad.exe # Iniciar processo

#### Serviços

Get-Service # Listar serviços

Get-Service -Name wuauserv # Serviço específico

Start-Service -Name wuauserv # Iniciar serviço

Stop-Service -Name wuauserv # Parar serviço

Restart-Service -Name wuauserv # Reiniciar serviço

## References and Footnotes
