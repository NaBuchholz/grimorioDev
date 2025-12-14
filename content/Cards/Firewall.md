---
type: study
tags:
  - 42Ecole
  - ecole42/commoncore/milestone1
  - programming/so
  - Programação/Infra
  - public
aliases:
status: Doing
relatedTo:
  - "[[../MOCs/Born 2 Be Root]]"
---

## Resume

---

## O Que É Firewall ?

> Um **firewall** é um sistema de segurança usado para monitorar e controlar o tráfego de rede com base em regras de segurança predefinidas.Ele age como uma barreira entre uma rede confiável (como a de uma empresa ou a sua rede doméstica) e redes não confiáveis (como a internet), protegendo os dispositivos conectados de acessos não autorizados ou maliciosos.

### Funções Principais De Um Firewall

1. **Filtrar tráfego**: Permitir ou bloquear o tráfego de dados com base em critérios como endereço IP, portas, protocolos ou conteúdos específicos.
2. **Prevenir invasões**: Identificar e bloquear tentativas de invasão ou ataques, como **DDoS** ou exploração de vulnerabilidades.
3. **Monitorar atividades**: Registrar informações sobre o tráfego de rede, permitindo análises de segurança e auditorias.
4. **Estabelecer regras de acesso**: Controlar quais dispositivos ou aplicativos têm permissão para acessar ou ser acessados em redes específicas.

### Tipos De Firewalls

1. **Firewall de hardware**: Dispositivos físicos que ficam entre a rede interna e a internet. São comuns em roteadores empresariais.
2. **Firewall de software**: Aplicativos instalados em servidores, computadores ou dispositivos móveis para monitorar e proteger o tráfego.
3. **Firewall baseado em nuvem**: Serviços de segurança gerenciados que oferecem proteção para redes e aplicativos na nuvem.
4. **Firewall de próxima geração (NGFW)**: Combina recursos tradicionais com inteligência adicional, como inspeção profunda de pacotes (DPI) e proteção contra ameaças avançadas.

## Uncomplicated Firewall (ufw)

>[^1]The Uncomplicated Firewall (ufw) is a frontend for iptables and is particularly well-suited for host-based firewalls. ufw provides a framework for managing netfilter, as well as a command-line interface for manipulating the firewall. ufw aims to provide an easy to use interface for people unfamiliar with firewall concepts, while at the same time simplifies complicated iptables commands to help an administrator who knows what he or she is doing. ufw is an upstream for other distributions and graphical frontends.

### Comandos Básicos

- Caso não esteja instalado
```bash
sudo apt-get install ufw
```

- Para habilitar e desabilitar
```bash
sudo ufw enable
```

```bash
sudo ufw disable
```

- Verificando o status
```bash
sudo ufw status
```

- Abrir e fechar portas
```bash
sudo ufw allow [porta/protocolo]
```
```bash
sudo ufw allow/deny [Porta_inicial:Porta_final]/protocolo
```

>[!warning] HTTP/HTTPS
>O HTTP exige que a porta 80 esteja disponível, enquanto o HTTPS utiliza a porta 443.
>Podemos permitir com o comando `sudo ufw allow http`

- Definir que um IP possa conectar apenas com uma porta específica:

```bash
sudo ufw allow from [ENDEREÇOIP] to any port [PORTA]
```

[[Protocolos de Rede]]

- A porta 22 é a porta padrão para [SSH](<./Secure Shell - SSH.md>)

## References and Footnotes

[^1]: https://wiki.ubuntu.com/UncomplicatedFirewall#:~:text=The%20Uncomplicated%20Firewall,and%20graphical%20frontends.
