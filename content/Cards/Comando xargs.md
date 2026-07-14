---
aliases:
status: Doing
type: Card
tags:
  - linux
  - public
---

 

- **Leitura da entrada:** O xargs lê a entrada padrão, que pode ser o resultado de outro comando (por exemplo, um `find`) ou um arquivo.
- **Construção da linha de comando:** Para cada item da entrada, o xargs constrói uma nova linha de comando, substituindo um marcador (geralmente `{}`) pelo item atual.
- **Execução do comando:** A linha de comando construída é então executada.
- `xargs -0 ` => **Separador nulo:** Em vez de usar espaços em branco como separadores, o `-0` utiliza o caractere nulo (código ASCII 0) para separar os itens da entrada. Isso é especialmente útil quando você está lidando com arquivos ou dados que podem conter espaços em branco.
