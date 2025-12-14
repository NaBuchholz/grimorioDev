---
type: study
tags:
  - ecole42/commoncore/milestone1
  - programming/so
  - C
  - public
aliases:
status: Done
relatedTo:
  - "[[./open()]]"
  - "[[../MOCs/Get Next Line]]"
---

## O Que É Fopen ?

Fopen é uma função da biblioteca padrão de #C que lida com a abertura de um arquivo ou recurso I/O no sistema.

A função fopen() em linguagem C é uma das principais funções para manipulação de arquivos. 

## Funcionalidade Básica

fopen() é usada para abrir um arquivo em modo de leitura ou escrita. Se o arquivo não existir, ela o cria.

### Sintaxe

```c
FILE *fopen(const char *filename, const char *mode);
```

Onde:

- filename é o nome do arquivo a ser aberto
- mode especifica como o arquivo será acessado (leitura, escrita, leitura/escrita)

### Modos De Abertura Comuns

1. "r" - Leitura apenas
2. "w" - Escrita apenas (sobrescreve o arquivo se já existe)
3. "a" - Apender ao final do arquivo
4. "r+" ou "w+" - Leitura e escrita
5. "a+" - Leitura,apender e atualizar

#### Pontos Importantes

1. Retorna um ponteiro para FILE se bem-sucedida, NULL caso contrário.
2. Permite abrir arquivos binários usando "rb", "wb", etc.
3. Oferece buffering automático para melhor desempenho.
4. É uma função mais amigável que open() para a maioria dos casos de uso.

## Exemplo Básico

```c
#include <stdio.h>

int main() {
    FILE *arquivo = fopen("exemplo.txt", "w");
    
    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo.\n");
        return 1;
    }
    
    // Operações com o arquivo...
    
    fclose(arquivo);
    return 0;
}
```

### Melhores Práticas

1. Sempre verificar se fopen() retornou um ponteiro válido.
2. Fechar o arquivo quando terminar de usá-lo com fclose().
3. Tratar possíveis erros ao abrir e fechar arquivos.

#### References and Footnotes

[1] https://www.geeksforgeeks.org/c-fopen-function-with-examples/

[2] https://www.tutorialspoint.com/c_standard_library/c_function_fopen.htm

[3] https://www.ibm.com/docs/en/zos/2.4.0?topic=functions-fopen-open-file

[4] https://stackoverflow.com/questions/5130375/how-exactly-does-fopen-fclose-work

[5] https://www.ibm.com/docs/en/i/7.3?topic=functions-fopen-open-files

[6] https://www.quora.com/What-is-fopen-in-C

[7] https://www.javatpoint.com/fopen-function-in-c

[8] https://pubs.opengroup.org/onlinepubs/007904975/functions/fopen.html

[9] https://www.skillvertex.com/blog/c-fopen-function-with-examples/
