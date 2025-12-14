---
type: study
tags:
  - 42Ecole
  - ecole42/commoncore/milestone1
  - public
aliases:
status: Done
relatedTo:
  - "[Born 2 Be Root](<../MOCs/Born 2 Be Root.md>)"
---

## Resume

---

## O Que É APPArmor ?

APPArmor é uma aplicação(módulo) de segurança do [[Linux]], que protege de ameaças tanto internas quanto externas.

> [AppArmor é um sistema de _Controle de Acesso Mandatório_ (MAC - Mandatory Access Control) construído sobre a interface LSM (_Linux Security Modules_) do Linux. Na prática, o kernel consulta o AppArmor antes de cada chamada do sistema para saber se o processo está autorizado a fazer a operação dada. Através desse mecanismo, o AppArmor confina programas a um conjunto limitado de recursos.](https://debian-handbook.info/browse/pt-BR/stable/sect.apparmor.html#:~:text=AppArmor%20%C3%A9%20um,limitado%20de%20recursos.)

## Comandos

```bash
aa-status
```

> [Individual users and system administrators might however want to manage the application profiles which define what each application is allowed to do by editing the files in `/etc/apparmor.d/`.](https://apparmor.net/#:~:text=Individual%20users%20and%20system%20administrators%20might%20however%20want%20to%20manage%20the%20application%20profiles%20which%20define%20what%20each%20application%20is%20allowed%20to%20do%20by%20editing%20the%20files%20in%20/etc/apparmor.d/.)

## References and Footnotes
