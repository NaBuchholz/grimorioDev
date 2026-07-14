---
type:
tags:
  - Study
  - public
aliases:
status: Draft
relatedTo: []
---

## Resume

---

## O Que É GitHub Actions ?

GitHub Actions is a flexible way to automate nearly every aspect of your team's software workflow. You can automate testing, continuously deploy, review code, manage issues and pull requests, and much more.

### Atributos Básicos

|     Atributo     |    O que ele é?    |
|       ---        |     ---            |
|  name   | Para nomear o workflow    |
|    on  | quando executar o workflow |
| permission | da permissão para operar no repositório |
| runs-on | runner para o job |

```yml
name: Post welcome comment
on:
  pull_request:
    types: [opened]
permissions:
  pull-requests: write
jobs:
  build:
    name: Post welcome comment
    runs-on: ubuntu-latest
```

#### Jobs

**What is a _job_?**: A job is a set of steps in a workflow that execute on the same runner (a runner is a server that runs your workflows when triggered). Workflows have jobs, and jobs have steps. Steps are executed in order and are dependent on each other. To read more about jobs, see "[Jobs](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#jobs)".

Your workflow contains one or more **jobs** which can run in sequential order or in parallel. Each job will run inside its own virtual machine **runner**, or inside a container, and has one or more **steps** that either run a script that you define or run an **action**, which is a reusable extension that can simplify your workflow.[Read more](https://docs.github.com/en/actions/get-started/understand-github-actions#understanding-the-workflow-file:~:text=Your%20workflow%20contains,simplify%20your%20workflow)

- You can configure a job's dependencies with other jobs; by default, jobs have no dependencies and run in parallel.
- You can also use a **matrix** to run the same job multiple times, each with a different combination of variables—like operating systems or language versions.

![](<../_attachments/GitHub Actions/20260208_20260208_overview-actions-simple.webp>)

#### Actions

As actions são um conjunto de jobs que é reutilizavel dentro de um workflow.

- Cada workflow cria variáveis de ambiente automáticas em cada execução [Automatic token authentication](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)

![](<../_attachments/GitHub Actions/20260208_20260208_Pasted-image-20251026075915.png>)

## References and Footnotes

https://docs.github.com/pt/actions

https://www.youtube.com/watch?v=Xwpi0ITkL3U

https://docs.github.com/en/actions/get-started/understand-github-actions#understanding-the-workflow-file
