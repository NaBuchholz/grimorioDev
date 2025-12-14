---
type: study
tags:
  - ecole42/commoncore/libft
  - public
aliases:
status: Done
relatedTo:
  - "[Libft](<../MOCs/Libft.md>)"
---

## Resume

---

## O Que É Bzero ?

#flashcards/libft 

bzero é um função para limpar a memória, colocando um 0 nas primeiras n posições do ponteiro recebido.

?

```c
void    *ft_bzero(void *s, size_t n)
{
	unsigned char *temp;
	
	temp = (unsigned char *)s;
	while (n-- > 0)
		*(temp++) = '\0';
}
```
<!--SR:!2024-10-28,4,270-->

## References and Footnotes
