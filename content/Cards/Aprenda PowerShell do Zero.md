---
type:
tags:
  - Study
  - public
aliases:
status: Doing
relatedTo: []
---

## Resume

---

## CmdLet

- Pequena funcionalidade relacionada a um recurso/recursos => `Get-command -comandtype cmdlet`
- São escritos em .Net (para a nossa alegria , SQN) e são mais rápidos na execução.
- Padrão de Verbo-Substantivo => Get-XXX, Set-YYYY, New-XXXXX, Remove-YYYYY
- Diferente das funções , que são escritas em ps1 e podem ser definidas pelo usuário ou em módulos.
- `Where-Object` => o filtro do POSH , como o [[grep]] do [[linux]]
	- `Get-Process | Where-Object {$_.CPU -gt 100}` 
- Módulos normalmente tem a extensão `psm1`

## Scripts

- Variáveis => nomenclatura com o cifrão na frente`$`

## References and Footnotes
