---
aliases:
status: Done
type: Card
title: "Bubble Sort "
description:
tags:
  - EstruturaDeDados
  - Programming
  - Algoritmo
  - public
---

- Algoritmo de ordenacao que recebe uma lista com elementos potencialmente ordenaveis e produz uma lista ordenada
- n'ao produz uma nava lista, altera a entrada.
- nao e eficiente pois n'ao consegue saber como parar por conta propria.
- Repeticao sempre compara com posicao seguinte, por isso ate size - 1
- Uma maneira de otimizar : verificar se na passagem houve alguma troca

```c
void bubble_sort(int *numbers)
{
  int troca = 1;
  while(troca)
  {
    troca = 0;
    for(i = 0; i < n-1; i++)
    {
      if(v[i] > v[i+1])
      {
          int aux = v[i];
          v[i] = v[i+1];
          v[i+1] = aux;
          troca = 1;
      }
  }
}
```

```c
void bubble_sort(int *numbers)
{
  int troca = 1;
  while(troca)
  {
    troca = 0;
    for(i = 0; i < n; i++)
    {
      if(v[i] > v[i+1])
      {
          int aux = v[i];
          v[i] = v[i+1];
          v[i+1] = aux;
          troca = 1;
      }
  }
    n--;
}
```

## Forma Recursiva Do Bubble

```c
void bubble(int *v, int n)
{
  if(n < 2) return;
  for(i = 0; i < n - 1; i++)
  {
     if(v[i] > v[i+1])
      {
          int aux = v[i];
          v[i] = v[i+1];
          v[i+1] = aux;
      }
  }
  bubble(v,n-1);
}
```

[Curso de Programação C | Algoritmo de Ordenação BUBBLE SORT iterativo e recursivo | aula 331](Weblinks/Curso%20de%20Programa%C3%A7%C3%A3o%20C%20%20Algoritmo%20de%20Ordena%C3%A7%C3%A3o%20BUBBLE%20SORT%20iterativo%20e%20recursiv.md)
