---
type:
tags:
  - 42Ecole
  - Algoritmo
  - ecole42/commoncore/soLong
  - ecole42/commoncore/milestone2
  - public
aliases:
status: Draft
relatedTo:
  - "[[../MOCs/Ft_SoLong]]"
---

## Resume

---

## O Que É Flood Fill ?

O **flood fill** é uma técnica de busca que verifica e preenche áreas conectadas de uma matriz ou mapa, frequentemente usada para validação e preenchimento de regiões em gráficos 2D.

O flood fill é usado em: 

- Programas de pintura, como o Microsoft Paint
- Jogos, como Go e Campo Minado
- Softwares de edição de imagens

## Para Que Serve?

Essa técnica é muito usada para fazer validações em matrizes, uma vez que a partir de um ponto inicial (no casso do [So Long](<../MOCs/Ft_SoLong.md>) o P) o algoritmo vai de casa cardinal em casa cardinal verificando as regras de negócio.

![Pasted image 20250120135049](<../Attachments/Pasted image 20250120135049.png>)

![flood](<../Attachments/Pasted image 20250123115119.png>)

- [DFS](https://www.youtube.com/watch?v=gohEAP1Jmcg)
- [BFS](https://www.youtube.com/watch?v=JWP9EI88Yoo)

## Como Usar ?

- a função precisa ser feita por recursão
- o caso base serão as bordas do mapa ou uma cor diferente
- Precisa-se chamar a função para as 4 direções da matriz.

### References and Footnotes

https://www.youtube.com/watch?v=VuiXOc81UDM

https://favtutor.com/blogs/flood-fill-algorithm
