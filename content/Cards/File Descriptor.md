---
type: study
tags:
  - ecole42/commoncore/milestone1
  - programming/so
  - programming/unix
  - public
aliases:
  - fd
status: Done
relatedTo:
  - "[[../03-Projects/Get Next Line]]"
---

## Resume

---

## O Que É File Descriptor ?

#flashcards/gnl

[^1]File Descriptor é ==uma variável do tipo int que identifica um arquivo ou outro recurso que tenha um input e output, aberto no sistema através de um processo de indexação de processos a partir de índices que mostram as condições de inicialização de determinado arquivo.==

> [^2]Quando um programa abre um arquivo, o sistema operacional atribui um número inteiro que serve como um ponteiro para esse arquivo, permitindo que o programa interaja com ele de maneira eficiente.

>[!tip] Int fd 
>File descriptors are small integers, typically ranging from 0 to 255.

![como o so lida com um file descriptor](<../_attachments/File Descriptor/20260208_20260208_como-o-so-lida-com-um-file-descriptor.jpg>)

> [^3]Além dos arquivos em si, o FD também considera informações sobre diretórios, partições, caracteres, muitas vezes chamados de “arquivos especiais”, canais específicos e nomeados, dispositivos de bloco e soquetes de domínio.

## File Descriptor Em C

Nos sistemas [[./Unix]] as três primeiras entradas do da tabela do file descriptor são automaticamente adicionadas. 

- 0 => para ***stdin*** (Standard Input) , quando lemos inputs vindos do terminal.
- 1 => para ***stdout*** (Standard Output), para quando estamos escrevendo para o terminal (ex.: com write).
- 2 => para ***stderr*** (Standard Error), quando escrevemos um erro no terminal, util para redirecionamento de logs e monitoramento de erros.

As funções que oferecem abstrações para lidar com o fd em c são:

- `open()` =>para abrir um recurso
- `read()`=> para ler um recurso
- `close()` => para fechar um recurso

## File Descriptor Em Linux

>[^3]Especialmente nas distro Linux, o **file descriptor** tem o seu acesso através do `/proc/PID/fd/`. O PID, neste caso, deve ser substituído pelo identificador do processo.

## Tipos De File Descriptors

- de arquivos regulares => para acessar aquivos do sistema
- de sockets => comunicação em rede
- de pipes => comunicação entre processos.
Sim, existem limites na quantidade de file descriptors (FDs) que um processo pode ter abertas em Linux. Aqui estão os principais pontos sobre isso:

## Limites De FDs

1. Cada processo tem seu próprio limite de FDs abertos.
2. Há dois tipos de limites:
   - Limite suave (soft limit): valor máximo que um processo pode alcançar temporariamente.
   - Limite duro (hard limit): valor máximo que um processo jamais poderá ultrapassar.

3. Os limites podem ser definidos de várias maneiras:
   - Globalmente no kernel (`fs.file-max`)
   - Por usuário no `/etc/security/limits.conf`
   - Por processo individualmente

### Verificação De Limites

Para verificar os limites atuais de um processo:

```bash
cat /proc/<PID>/limits | grep files
```

Ou para o limite atual do usuário:

```bash
ulimit -n
```

### Aumentando Os Limites

Existem várias formas de aumentar os limites:

1. Para o usuário atual:
   ```bash
   ulimit -n <número>
   ```

2. Para um processo específico:
   ```bash
   prlimit --pid=<PID> --nofile=<número>
   ```

3. Susturdamente para um usuário:
   Adicionar à `/etc/security/limits.conf`:
   ```
   <usuario> soft nofile <valor>
   <usuario> hard nofile <valor>
   ```

4. Globalmente no kernel:
   ```bash
   sysctl fs.file-max=<valor>
   ```

   Adicionar ao `/etc/sysctl.conf` para persistência.

### Melhores Práticas

1. Aumente os limites apenas quando necessário para o funcionamento adequado do sistema.
2. Monitore o uso de FDs para evitar ultrapassar os limites.
3. Considere otimizar o código para abrir menos FDs quando possível.
4. Para aplicações que requerem muitos FDs, considere usar ferramentas como `epoll` em vez de `select`.

Em resumo, embora haja limites, eles podem ser ajustados conforme necessário para atender às necessidades específicas de cada sistema ou aplicação.

Citations:

[1] https://www.baeldung.com/linux/limit-file-descriptors

[2] https://unix.stackexchange.com/questions/84227/limits-on-the-number-of-file-descriptors

[3] https://stackoverflow.com/questions/3734932/max-open-files-for-working-process

[4] https://medium.com/@b0ld8/unlock-open-file-limit-bc3b0733a5f4

[5] https://docs.oracle.com/cd/E19476-01/821-0505/file-descriptor-requirements.html

[6] https://www.cyberciti.biz/faq/viewing-open-file-limit-for-linux-process/

[7] https://serverfault.com/questions/915927/does-the-maximum-amount-of-open-descriptors-in-a-server-include-its-children

[8] https://help.fanruan.com/finebi-en/doc-view-5784.html

[9] https://www.tecmint.com/increase-set-open-file-limits-in-linux/

[10] https://serverfault.com/questions/396872/why-or-how-does-the-number-of-open-file-descriptors-in-use-by-root-exceed-ulim

### References and Footnotes

[^1]: https://42-cursus.gitbook.io/guide/useful-tools/file-descriptors-fd
[^2]: https://lbodev.com.br/glossario/o-que-e-file-descriptor/
[^3]: https://linuxsolutions.com.br/o-que-e-um-file-descriptor-fd-e-ao-que-ele-se-refere/
