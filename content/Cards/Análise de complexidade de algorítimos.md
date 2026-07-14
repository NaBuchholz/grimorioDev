---
type: study
tags:
  - Algoritmo
  - programação/bigO
  - matemática
  - ecole42/commoncore/pushSwap
  - public
aliases:
  - complexidade algoritmica
status: Doing
relatedTo:
  - "[Push Swap](<../03-Projects/Push Swap.md>)"
---

## O Que É Análise De Complexidade De Algorítimos ?

Análise de complexidade de algorítimos é um método de verificação de desempenho proporcional ao tempo de execução de um algorismo, de medida objetiva.

>[^1]A análise de algoritmo fornece uma medida objetiva de desempenho proporcional ao tempo de execução do algoritmo.[^2]Normalmente, o algoritmo terá um desempenho diferente com base no processador, disco, memória e outros parâmetros de hardware.

## Tipos De Buscas

### Busca Linear

- As buscas crescem de forma linear a busca.
	- `T(n) = O(n)`

### Busca Binária

- Funções que crescem em taxa logaritimica, levando em consideção o tamanho da lista percorrida.

### Comparação

| Linear                                                      | Binária                                               |
| ----------------------------------------------------------- | ----------------------------------------------------- |
| ![linear](<../_attachments/Análise de complexidade de algorítimos/20260208_20260208_Pasted-image-20241216103239.png>) | ![](<../_attachments/Análise de complexidade de algorítimos/20260208_20260208_Pasted-image-20241216103326.png>) |

  ![](<../_attachments/Análise de complexidade de algorítimos/20260208_20260208_Pasted-image-20241216104024.png>) 

## Big O Notation

- [^3]Notação especial para medir a complexidade algoritmica.
- Não é a única medida mas a mais conhecida.

>[^4]A notação do O é sobre um “limite por cima”; a omega, “limite por baixo”; e a theta é a combinação de ambos. ‘Small’ Notations representam afirmações mais rígidas sobre a complexidade do que ‘Big’ Notations.

- Também é usado para determinar o espaço consumido pelo algoritmo.
![big O notation graph | 300](<../_attachments/Análise de complexidade de algorítimos/20260208_20260208_HTj2Ri2kXpmYdnLVJB4pGk7fnv_XpYwNWTtGGo4vCu9F2vYm6LeFST-q_fRYkcmRN9vrMtsh4-WK0Tx-F_fOaKHYAGrKkELBfitbe0qeJlmnZ7Rir7ikW9YFc_QqjXY_McJrNyX7-1.webp>)

### Complexidade

#### Constante

- Constante , pois o numero de operações não muda, mesmo quando o input varia.
- No final o tempo sempre é O(1).

>todo algoritmo com número de operações constante tem tempo de execução O(1) .

```go
package main

func main(){

}

func constante(n int) int {
	return n * (n + 1) / 2
	// Uma multiplicação , uma divisião e uma adição
	// Complexidade = O(3)
}
```

#### Linear

>[^5]Toda **complexidade diferente da constante** se dá em relação ao **número de itens que a sua função recebe**.

- `O(n)`

```go
package main

import ("fmt")

func linear(n int) int{
	total := 0
	for i := 1; i <= n; i++ {
		total++
	}
	return total
}

func main() {
	fmt.Println(linear(10))
} 
```

#### Logarítmca O(log n)

## Algoritmos De Organização | Sorting Algorithms

![](<../_attachments/Análise de complexidade de algorítimos/20260208_20260208_Screenshot-from-2024-12-16-14-24-56.png>)

## References and Footnotes

[^1]: https://www.inf.ufrgs.br/~prestes/Slides/aula1.pdf
[^2]: https://www.iugu.com/blog/analise-complexidade-algoritmos#:~:text=Normalmente%2C%20o%20algoritmo%20ter%C3%A1%20um%20desempenho%20diferente%20com%20base%20no%20processador%2C%20disco%2C%20mem%C3%B3ria%20e%20outros%20par%C3%A2metros%20de%20hardware.
[^3]: https://www.bigocheatsheet.com/
[^4]: https://www.iugu.com/blog/analise-complexidade-algoritmos#:~:text=A%20nota%C3%A7%C3%A3o%20do%20O%20%C3%A9%20sobre%20um%20%E2%80%9Climite%20por%20cima%E2%80%9D%3B%20a%20omega%2C%20%E2%80%9Climite%20por%20baixo%E2%80%9D%3B%20e%20a%20theta%20%C3%A9%20a%20combina%C3%A7%C3%A3o%20de%20ambos.%20%E2%80%98Small%E2%80%99%20Notations%20representam%20afirma%C3%A7%C3%B5es%20mais%20r%C3%ADgidas%20sobre%20a%20complexidade%20do%20que%20%E2%80%98Big%E2%80%99%20Notations.
[^5]: https://www.iugu.com/blog/analise-complexidade-algoritmos#:~:text=Toda%20complexidade%20diferente%20da%20constante%20se%20d%C3%A1%20em%20rela%C3%A7%C3%A3o%20ao%20n%C3%BAmero%20de%20itens%20que%20a%20sua%20fun%C3%A7%C3%A3o%20recebe.
