---
aliases:
tags:
  - Estudo
  - Programação/Docker
  - Programação/DevOps
  - public
type: study
status: Doing
createdBy: Nyx
lenguage: pt-Br
---

## Introdução Ao Docker

[^1] Através de tutoriais básicos e para iniciantes em Docker podemos aprender os fundamentos sobre conteinerização e como rodar aplicações em ambientes isolados. Mas nesse caso em específico também é importante a prática com laboratórios desde o início do aprendizado.[^2]

 - O que é?
	 Um software de virtualização que funciona através de empacotar a aplicação com todas as configurações necessárias (containers) que pode ser distribuído e compartilhado com muita facilidade.
	 
 - Que problema resolve?
	 Padroniza e automatiza o desenvolvimento local, evitando erros de instalação de dependências e otimizando o tempo do desenvolvedor
	 
 - Por que não uma VM?
	 O docker usa a camada de aplicação do S.O e o [[Kernel]] do Host, diferente de uma VM que tem seu próprio. Fazendo com que o tamanho das imagens de Docker sejam muito menores. Mas a compatibilidade é limitada , já que o docker precisa do [[Kernel]] do Host.
	 ![diferenças docker e vms](<../Attachments/Pasted image 20250215102951.png>)

### Imagens Vs Containers?

Imagens são os pacotes que juntam os requisitos necessários para rodar a aplicação, incluindo as configurações de ambiente, empacotados e enviados ao hub ou gerenciador de artefatos.

Já os container são as instâncias que fazemos das imagens, elas rodando.

- Imagens são versionadas também, através das tags.

### Docker Registry

- Lugar para guardar e distribuir imagens docker
	- Docker Hub

## Comandos Docker Com [[Prisma]]

- `docker compose up` , `docker compose down`
- `sudo systemctl restart docker ` -> restarta tudo
- `docker exec -it meu_container bash` ???
- `sudo chown -R usuarioPC prisma`
- `npm run migrate` -> short , ta no package
- generate
- buid sempre vem com infos novas
  

## Comandos

Se você quer remover completamente tudo relacionado ao Docker em um único comando no fish shell, aqui está uma solução completa:

```fish
docker stop (docker ps -q); \
docker rm (docker ps -a -q); \
docker volume rm (docker volume ls -q); \
docker network rm (docker network ls -q); \
docker rmi -f (docker images -q); \
docker system prune -a -f --volumes
```

Este comando:

1. Para todos os containers em execução
2. Remove todos os containers (parados e em execução)
3. Remove todos os volumes
4. Remove todas as redes (exceto as redes padrão)
5. Remove todas as imagens forçadamente
6. Executa uma limpeza completa do sistema, incluindo cache de construção, imagens pendentes, redes não utilizadas e volumes não utilizados

Tenha cuidado ao executar isto em ambiente de produção, pois ele realmente remove TUDO do seu ambiente Docker e não há volta atrás (a menos que você tenha backups).

### Gestão De Contêineres

```bash
# Listar contêineres em execução
docker ps

# Listar todos os contêineres (incluindo parados)
docker ps -a

# Iniciar um contêiner
docker start <nome-do-container>

# Parar um contêiner
docker stop <nome-do-container>

# Reiniciar um contêiner
docker restart <nome-do-container>

# Remover um contêiner
docker rm <nome-do-container>

# Forçar remoção de um contêiner em execução
docker rm -f <nome-do-container>

# Remove os containers, deleta os volumes e apaga networks relacuonadas não mais utilizadas
docker compose down --volumes --remove-orphans
```

### Docker Compose

```bash
# Iniciar todos os serviços definidos no docker-compose.yml
docker compose up -d

# Parar todos os serviços
docker compose down

# Reiniciar serviços
docker compose restart

# Reconstruir serviços
docker compose up -d --build

# Listar serviços em execução
docker compose ps

# Iniciar um serviço específico
docker compose up -d <nome-do-servico>

# Parar um serviço específico
docker compose stop <nome-do-servico>

# Reiniciar um serviço específico
docker compose restart <nome-do-servico>
```

## Comandos Exec (Execução Em Contêineres)

```bash
# Executar comando em um contêiner em execução (modo interativo)
docker exec -it <nome-do-container> <comando>

# Exemplo: abrir shell bash no contêiner
docker exec -it <nome-do-container> /bin/sh

# Executar comando sem modo interativo
docker exec <nome-do-container> <comando>

# Recarregar configuração do Caddy
docker exec caddy-gateway caddy reload --config /etc/caddy/Caddyfile

# Verificar configuração do Caddy sem aplicá-la
docker exec caddy-gateway caddy validate --config /etc/caddy/Caddyfile

# Executar curl dentro do contêiner
docker exec caddy-gateway curl -I http://docmost:3000

# Verificar configuração de rede no contêiner
docker exec docmost-0.20 netstat -tulpn

# Investigar problemas de rede entre contêineres
docker exec caddy-gateway ping docmost
```

## Comandos De Logs

```bash
# Ver logs de um contêiner
docker logs <nome-do-container>

# Ver últimas N linhas de logs
docker logs --tail 50 <nome-do-container>

# Ver logs continuamente (follow)
docker logs -f <nome-do-container>

# Ver logs com timestamp
docker logs -t <nome-do-container>

# Combinação de opções
docker logs -f --tail 100 -t <nome-do-container>

# Filtrar logs por palavra-chave
docker logs <nome-do-container> | grep "error"

# Formatar logs JSON com jq
docker logs caddy-gateway | jq

# Extrair campos específicos com jq
docker logs caddy-gateway | jq '.msg'

# Formatar logs JSON coloridos e mais legíveis
docker logs caddy-gateway | jq -r '. | "\u001b[33m[\(.ts)]\u001b[0m \u001b[31m[\(.msg)]\u001b[0m"'
```

## Comandos De Rede Docker

```bash
# Listar redes Docker
docker network ls

# Inspecionar uma rede
docker network inspect internal

# Conectar um contêiner a uma rede
docker network connect <nome-da-rede> <nome-do-container>

# Desconectar um contêiner de uma rede
docker network disconnect <nome-da-rede> <nome-do-container>

# Criar uma nova rede
docker network create <nome-da-rede>
```

## Comandos Específicos Para Caddy

```bash
# Recarregar configuração do Caddy
docker exec caddy-gateway caddy reload --config /etc/caddy/Caddyfile

# Validar configuração do Caddy
docker exec caddy-gateway caddy validate --config /etc/caddy/Caddyfile

# Formatar automaticamente o Caddyfile
docker exec caddy-gateway caddy fmt --overwrite /etc/caddy/Caddyfile

# Usar a API de administração do Caddy
docker exec -i caddy-gateway curl -X POST "http://localhost:2019/load" -H "Content-Type: text/caddyfile" --data-binary @- < ./Caddyfile

# Ver status do Caddy
docker exec caddy-gateway caddy status
```

## Scripts Úteis Para Monitoramento

### Script Para Monitorar Logs Formatados

```bash
#!/bin/bash
# salve como monitor-caddy-logs.sh
docker logs -f caddy-gateway | jq -r '. | "\u001b[33m[" + (.ts | tostring) + "]\u001b[0m \u001b[36m[Status: " + (.status | tostring) + "]\u001b[0m \u001b[31m[Erro: " + .msg + "]\u001b[0m"'
```

### Verificar Conectividade Entre Contêineres

```bash
#!/bin/bash
# salve como check-docker-network.sh
echo "Verificando conexão do Caddy para DocMost..."
docker exec caddy-gateway ping -c 3 docmost
docker exec caddy-gateway curl -I docmost:3000
echo "Verificando configuração de rede do DocMost..."
docker exec docmost-0.20 netstat -tulpn | grep 3000
```

## Resolução De Problemas

### Verificar Se a Porta Está Aberta no Contêiner

```bash
docker exec docmost-0.20 netstat -tulpn
```

### Verificar Rotas De Rede Dentro Do Contêiner

```bash
docker exec caddy-gateway ip route
```

### Reiniciar Apenas a Rede De Um Contêiner

```bash
docker restart caddy-gateway
```

### Verificar Logs Do Sistema Docker

```bash
sudo journalctl -u docker
```

## Refences and Footnotes

[^1]: [Tutorial da Nana](https://www.youtube.com/watch?v=pg19Z8LL06w)
[^2]: [Site para Prática Play With Docker](https://training.play-with-docker.com/)
