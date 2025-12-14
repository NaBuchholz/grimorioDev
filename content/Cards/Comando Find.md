---
aliases:
status:
type: Card
title: Comando Find
description: Doing
tags:
  - linux
  - public
---

- Pode ser usado para fazer a deleção seletiva com maior flexibilidade.

 ` find . -mindepth 1 ! -name "arquivo_importante.txt" -delete ` 

- `-mindepth 1`: Busca apenas nos arquivos e diretórios do diretório atual, não entrando em subdiretórios.
