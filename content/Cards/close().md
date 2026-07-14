---
type: study
tags:
  - ecole42/commoncore/milestone1
  - Programming
  - C
  - public
aliases:
status: Done
relatedTo:
  - "[[../03-Projects/Get Next Line]]"
  - "[[./read()]]"
  - "[[./open()]]"
---

## Resume

---

## O Que É close() ?

A função `close()` é uma chamada do sistema que libera recursos associados a um descritor de arquivo específico [1].

## Sintaxe

```c
int close(int fildes);
```

O parâmetro `fildes` é o número do descritor de arquivo a ser fechado [1].

## Funcionamento

- Quando você chama `close()`, ela libera o descritor de arquivo especificado [1].
- Isso significa que o descritor de arquivo não existe mais como referência ao arquivo após a chamada bem-sucedida de `close()` [1].
- Todas as operações de saída pendentes em memória são gravadas no disco antes de fechar o arquivo [2].
- As estruturas de controle internas do sistema operacional são liberadas [2].

## Pontos Importantes

- É recomendável usar `fclose()` em vez de `close()` quando trabalhar com arquivos abertos usando `fopen()` [1].
- Ao fechar todos os descritores associados a um arquivo, o espaço ocupado pelo arquivo é liberado se o link count for zero [1].
- Em sockets, `close()` causa a destruição do socket [1].

## Exemplo De Uso

```c
#include <unistd.h>

int fd = open("example.txt", O_RDONLY);
if (fd != -1) {
    // Uso do descritor de arquivo...
    close(fd); // Fechando o descritor de arquivo
}
```

## Considerações Finais

- É crucial fechar os descritores de arquivo quando eles não forem mais necessários para evitar vazamentos de recursos.
- Tentar operar um descritor de arquivo fechado resulta em comportamento indefinido [5].
- Em programas que terminam normalmente, os descritores de arquivo são fechados automaticamente pelo sistema operacional [2].

### References and Footnotes

[1] https://pubs.opengroup.org/onlinepubs/009604499/functions/close.html

[2] https://www.br-c.org/doku.php?id=close

[3] https://pubs.opengroup.org/onlinepubs/9699919799/functions/close.html

[4] https://linux.die.net/man/2/close

[5] https://www.geeksforgeeks.org/fclose-function-in-c/

[6] https://www.tutorialspoint.com/c_standard_library/c_function_fclose.htm

[7] https://man7.org/linux/man-pages/man2/close.2.html

[8] https://stackoverflow.com/questions/70801534/close-file-in-c

[9] https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/posix-close?view=msvc-170

[10] https://linux.die.net/man/3/close
