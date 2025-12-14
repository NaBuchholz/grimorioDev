---
type:
tags:
  - Study
  - Programação/DevOps
  - DevOps
  - AutomateAllTheThings
  - Ansible
  - AWS
  - public
aliases:
status: Doing
relatedTo:
  - "[Infraestrutura como Código IaaS](<./Infraestrutura como Código IaaS.md>)"
---

## Resume

---

## O Que É Ansible?

> [!PDF|importan] [DVP 2025.3 - Apostila - Infraestrutura como Código, p.22](<../Attachments/DVP 2025.3 - Apostila - Infraestrutura como Código.pdf#page=22&selection=34,0,82,21&color=importan>)
>
> > O Ansible é frequentemente descrito como um "canivete suíço" devido à sua versatilidade. Embora possa ser usado para provisionar infraestrutura, seu ponto forte e caso de uso mais comum é o gerenciamento de configuração. Isso inclui tarefas como instalar e atualizar softwares, gerenciar usuários e permissões, configurar serviços como servidores web e bancos de dados, e aplicar patches de segurança em frotas de servidores.
>
> Indempotênte por padrão

- Se utiliza de "Playbooks" => Scripts de automacão.
- Agentless => Sem nenhuma instalacao do lado do servidor gerenciado pois usa protocolos de comunicacão padrão.
	- ** SSH => Linux/Unix
	- WinRM => Windows.

> [!PDF|note] [DVP 2025.3 - Apostila - Infraestrutura como Código, p.23](<../Attachments/DVP 2025.3 - Apostila - Infraestrutura como Código.pdf#page=23&selection=65,0,104,11&color=note>)
>
> > O processo é simples: a partir de uma máquina de controle (onde o Ansible está instalado), o Ansible se conecta via SSH ou WinRM ao nó de destino, transfere pequenos programas temporários chamados "módulos", executa-os para realizar a tarefa desejada e, em seguida, os remove. Todo o trabalho é orquestrado a partir da máquina de controle, sem deixar resíduos ou processos em execução nos nós gerenciados

## Componentes Chave

- **Control Node** => máquina alvo aonde cmds e playbooks são executados
- **Managed Nodes** => máquinas aonde esta o Ansible
- **Inventory** => arquivo .INI ou .YAML que lista Control Nodes

> [!PDF|info] [DVP 2025.3 - Apostila - Infraestrutura como Código, p.24](<../Attachments/DVP 2025.3 - Apostila - Infraestrutura como Código.pdf#page=24&selection=50,42,58,49&color=info>)
>
> > Os hosts podem ser organizados em grupos lógicos (ex: [webservers], [databases]) para facilitar a execução de tarefas em subconjuntos da sua infraestrutura.

- **Modules** => Blocos de construcão de automacão, eles executam uma tarefa específica e é possível criar seus próprios.
- **Playbooks** => .YAML que lista ordenadamente Modules a serem executados; receita da automacão.
- **Roles** => Organizar e reorganizar Playbooks

> [!PDF|info] [DVP 2025.3 - Apostila - Infraestrutura como Código, p.25](<../Attachments/DVP 2025.3 - Apostila - Infraestrutura como Código.pdf#page=25&selection=17,72,20,41&color=info>)
>
> > Um role encapsula tarefas, variáveis, templates e outros arquivos em uma estrutura de diretórios padronizada, tornando o código mais modular, legível e compartilhável entre diferentes projetos.

>[!Danger] Python é um diferencial importante
>Exige Conhecimento de ambientes criados em [Python](<./Python.md>)  

- **Comandos Ad-Hoc** => comandos rápidos diretos de linha de comando, que são úteis para verificacão de status, reiniciar ou coletar informacões.

## References and Footnotes
