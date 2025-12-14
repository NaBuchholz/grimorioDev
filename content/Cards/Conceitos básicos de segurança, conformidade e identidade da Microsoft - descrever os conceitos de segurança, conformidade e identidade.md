---
aliases:
type:
tags:
  - Programação
  - CiberSecurity
  - public
status: Done
---

## Descrever O Modelo De Responsabilidade Compartilhada

O _modelo de responsabilidade compartilhada_ identifica quais tarefas de segurança são tratadas pelo provedor de nuvem e quais tarefas de segurança são tratadas por você, o cliente. As responsabilidades variam dependendo de onde a carga de trabalho está hospedada

-   **Datacenters locais**. Em um datacenter local, você tem a responsabilidade de tudo, desde a segurança física até a criptografia de dados confidenciais.
-   **IaaS (Infraestrutura como Serviço)**. De todos os serviços de nuvem, a IaaS requer o máximo de gerenciamento pelo cliente de nuvem. Com a IaaS, você está usando a infraestrutura de computação do provedor de nuvem. O cliente de nuvem não é responsável pelos componentes físicos, como computadores e rede, ou pela segurança física do datacenter. No entanto, o cliente de nuvem ainda é responsável pelos componentes de software, como sistemas operacionais, controles de rede, aplicativos e proteção de dados.
-   **PaaS (Plataforma como Serviço)**. O PaaS fornece um ambiente para criação, teste e implantação de aplicativos de software. A meta da PaaS é ajudar você a criar um aplicativo rapidamente sem a necessidade de gerenciar a infraestrutura subjacente. Com o PaaS, o provedor de nuvem gerencia o hardware e os sistemas operacionais, e o cliente é responsável por aplicativos e dados.
-   **SaaS (Software como Serviço)**. O SaaS é hospedado e gerenciado pelo provedor de nuvem para o cliente. Normalmente, ele é licenciado por meio de uma assinatura mensal ou anual. O** Microsoft 365**, o Skype e o Dynamics CRM Online são todos exemplos de softwares SaaS. O SaaS requer a menor quantidade de gerenciamento pelo cliente de nuvem. O provedor de nuvem é responsável por gerenciar tudo, exceto dados, dispositivos, contas e identidades.

![500](<../Attachments/Pasted image 20230319094353.png>)

- Torna as responsabilidades claras e objetivas

### Descrever a Defesa Em Profundidade

- Camadas de segurança
	-   Segurança **física**, como limitar o acesso a um datacenter para apenas o pessoal autorizado.
	-   Controles de segurança de **identidade e acesso**, como autenticação multifator ou acesso baseado em condição para controlar o acesso à infraestrutura e controle de alterações.
	-   A segurança de **perímetro** de sua rede corporativa inclui a proteção contra DDoS (ataque de negação de serviço distribuído) para filtrar ataques em grande escala antes que eles possam causar uma negação de serviço para os usuários.
	-   Segurança de **rede**, como segmentação de rede e controles de acesso à rede, para limitar a comunicação entre os recursos.
	-   A segurança da camada **Computação**, como a proteção do acesso a máquinas virtuais, local ou na nuvem, fechando determinadas portas.
	-   A segurança da camada **Aplicativo** garante que os aplicativos estejam seguros e livres de vulnerabilidades de segurança.
	-   A segurança da camada **Dados**, incluindo controles para gerenciar o acesso aos dados de negócios e clientes e à criptografia para proteger os dados.

	>![500](<../Attachments/Pasted image 20230319095909.png>)

#### Confidencialidade, Integridade, Disponibilidade (CIA )

-  CIA (confidentiality, integrity e availability)
	![300](<../Attachments/Pasted image 20230319100114.png>)

-   A **Confidencialidade** se refere à necessidade de manter os dados confidenciais, como informações do cliente, senhas ou dados financeiros. Você pode criptografar os dados para mantê-los confidenciais, mas também precisa manter as chaves de criptografia confidenciais. Confidencialidade é a parte mais visível da segurança. Podemos ver claramente a necessidade de dados confidenciais, chaves, senhas e outros segredos que devem ser mantidos confidenciais.
-   A **Integridade** se refere à manutenção de dados ou mensagens corretas. Ao enviar uma mensagem de email, você deve ter certeza de que a mensagem recebida é igual à mensagem enviada. Ao armazenar dados em um banco de dados, você deve ter certeza de que os dados recuperados são os mesmos que os dados armazenados. A criptografia de dados mantém a confidencialidade, mas você deve ser capaz de descriptografar os dados de forma que eles se mantenham tal como eram antes de serem criptografados.** Integridade trata-se da confiança de que os dados não foram adulterados ou alterados.**
-   **Disponibilidade** refere-se a tornar os dados disponíveis para aqueles que precisam deles, quando eles precisam. É importante para a organização manter os dados do cliente seguros, mas ao mesmo tempo eles também devem estar disponíveis para os funcionários que lidam com os clientes. Embora possa ser mais seguro armazenar os dados em um formato criptografado, os funcionários precisam acessar dados descriptografados.

### Explorar O Modelo De Confiança Zero

O modelo de confiança zero opera no princípio de “**não confiar em ninguém e verificar tudo”**.

#### Princípios De Orientação De Confiança Zero

O modelo de confiança zero tem três princípios que orientam e sustentam como a segurança deve ser implementada. São eles: verificação explícita, acesso com privilégio mínimo e pressuposição de violação.

-   **Verificação explícita**. Sempre autentique e autorize com base nos pontos de dados disponíveis, incluindo a identidade do usuário, o local, o dispositivo, o serviço ou a carga de trabalho, a classificação de dados e as anomalias.
-   **Acesso com privilégio mínimo**. Limite o acesso do usuário com acesso just-in-time e just-enough (JIT/JEA), políticas adaptáveis baseadas em risco e proteção de dados para proteger os dados e a produtividade.
-   **Pressuposição de violação**. Segmento de acesso por rede, usuário, dispositivos e aplicativo. Use a criptografia para proteger dados e use a análise para obter visibilidade, detectar ameaças e melhorar sua segurança.

##### Seis Pilares Fundamentais

No modelo de confiança zero, todos os elementos funcionam em conjunto para fornecer segurança de ponta a ponta. Esses seis elementos são os pilares fundamentais do modelo de confiança zero:

-   As **identidades** podem ser usuários, serviços ou dispositivos. Quando uma identidade tenta acessar um recurso, ela deve ser verificada com autenticação forte e seguir os princípios de acesso com privilégios mínimos.
-   Os **dispositivos** criam uma grande superfície de ataque como fluxos de dados de dispositivos para cargas de trabalho locais e para a nuvem. O monitoramento de dispositivos para integridade e conformidade é um aspecto importante da segurança.
-   Os **aplicativos** são a maneira como os dados são consumidos. Isso inclui a descoberta de todos os aplicativos que estão sendo usados, o que às vezes é chamado de TI sombra, pois nem todos os aplicativos são gerenciados centralmente. Esse pilar também inclui o gerenciamento de permissões e o acesso.
-   Os **dados** devem ser classificados, rotulados e criptografados com base em seus atributos. Os esforços de segurança são basicamente sobre a proteção de dados, garantindo que eles permaneçam seguros quando saem de dispositivos, aplicativos, infraestrutura e redes que a organização controla.
-   A **infraestrutura**, seja local ou baseada na nuvem, representa um vetor de ameaça. Para melhorar a segurança, você avalia a versão, a configuração e o acesso JIT e usa a telemetria para detectar ataques e anomalias. Isso permite que você bloqueie ou sinalize automaticamente comportamentos arriscados e tome ações de proteção.
-   As **redes** devem ser segmentadas, incluindo a micro segmentação na rede mais profunda. Além disso, a proteção contra ameaças em tempo real, criptografia de ponta a ponta, monitoramento e análise devem ser empregadas.
![400](<../Attachments/Pasted image 20230319101418.png>)

### Descrever Criptografia E Hash

Uma maneira de mitigar ameaças comuns de segurança cibernética é criptografar dados confidenciais ou valiosos. Criptografia é o processo de tornar dados ilegíveis e inutilizáveis para visualizadores não autorizados. Para usar ou ler os dados criptografados, eles precisam ser descriptografados, o que exige o uso de uma chave secreta.

Há dois tipos de criptografia de nível superior: simétrica e assimétrica. A criptografia simétrica usa a mesma chave para criptografar e descriptografar os dados. A criptografia assimétrica usa um par de chaves públicas e de chaves privadas. Qualquer chave pode criptografar dados, mas uma única chave não pode ser usada para descriptografar dados criptografados.

![250](<../Attachments/Pasted image 20230319102621.png>)

#### Criptografia Para Dados Em Repouso

Se um invasor obtiver um disco rígido com os dados criptografados e não tiver acesso às chaves de criptografia, ele terá grande dificuldade para ler os dados.

#### Criptografia TLS Para Dados Em Trânsito

A criptografia dos dados em trânsito protege-os de observadores externos e fornece um mecanismo para transmitir os dados, limitando o risco de exposição.

#### Criptografia Para Dados Em Uso

Um caso de uso comum para a criptografia de dados em uso envolve a proteção de dados em armazenamento não persistente, como memória RAM ou caches de CPU. Isso pode ser alcançado por meio de tecnologias que criam um enclave (pense nisso como um cofre seguro) que protege os dados e mantém os dados criptografados enquanto a CPU processa os dados.

#### Hash

O hash usa um algoritmo para converter texto em um valor _exclusivo_ de comprimento fixo chamado hash. Toda vez que o mesmo texto tem hash usando o mesmo algoritmo, o mesmo valor de hash é produzido. Esse hash pode ser usado como um identificador exclusivo de seus dados associados.

O hash é diferente da criptografia, pois não usa chaves, e o valor de hash não é subsequentemente descriptografado de volta para o original.

Como as funções de hash são determinísticas (a mesma entrada produz a mesma saída), os hackers podem usar ataques de dicionário de força bruta por meio do hash de senhas. Para cada hash correspondente, eles sabem a senha real. Para atenuar esse risco, as senhas geralmente têm “sal”. Isso se refere à adição de um valor aleatório de comprimento fixo à entrada de funções de hash para criar hashes exclusivos para a mesma entrada.

![200](<../Attachments/Pasted image 20230319103131.png>)

### Descrever Conceitos De Conformidade

À medida que organizações e instituições movem seus dados para nuvens do provedor de serviços, com datacenters em todo o mundo, considerações adicionais entram em jogo.

Listados abaixo estão alguns conceitos e termos importantes relacionados à conformidade de dados.

-   **Residência de dados** – Quando se trata de conformidade, os regulamentos de residência de dados regem os locais físicos onde os dados podem ser armazenados e como e quando podem ser transferidos, processados ou acessados internacionalmente. Esses regulamentos podem diferir significativamente dependendo da jurisdição.
	
-   **Soberania de dados** – Outra consideração importante é a soberania de dados, o conceito de que os dados, particularmente dados pessoais, estão sujeitos às leis e regulamentos do país/região em que são coletados fisicamente, mantidos ou processados. Isso pode adicionar uma camada de complexidade quando se trata de conformidade, pois o mesmo dado pode ser coletado em um local, armazenado em outro e processado em outro; tornando-o sujeito a leis de diferentes países/regiões.
	
-   **Privacidade de dados** – Fornecer aviso e ser transparente sobre a coleta, o processamento, o uso e o compartilhamento de dados pessoais são princípios fundamentais das leis e regulamentos de privacidade. Dados pessoais significa qualquer informação relacionada a uma pessoa física identificada ou identificável. As leis de privacidade anteriormente faziam referência a "PII" ou "informações de identificação pessoal", mas as leis expandiram a definição para quaisquer dados que estejam diretamente vinculados ou indiretamente vinculados a uma pessoa. As organizações estão sujeitas e devem operar de acordo com uma infinidade de leis, regulamentos, códigos de conduta, padrões específicos do setor e padrões de conformidade que regem a privacidade de dados.

Na maioria dos casos, as leis e os regulamentos não definem nem prescrevem tecnologias específicas que as organizações devem usar para proteger os dados.

### Definir Autenticação E Autorização

#### Autenticação

A autenticação é o processo de provar que uma pessoa é quem ela diz ser. Quando alguém adquire um item com um cartão de crédito, pode ser necessário mostrar uma forma adicional de identificação. Isso prova que ela é a pessoa cujo nome aparece no cartão. Neste exemplo, o usuário pode apresentar uma carteira de habilitação que serve como uma forma de autenticação e comprova a ID.

Quando você quiser acessar um computador ou dispositivo, encontrará um tipo de autenticação semelhante. Você pode receber uma solicitação para inserir um nome de usuário e uma senha. O nome de usuário declara quem você é, mas, por si só, não é suficiente para permitir acesso. Quando combinado com a senha, que somente esse usuário deve saber, ele permite o acesso aos seus sistemas. O nome de usuário e a senha são, juntos, uma forma de autenticação. <mark class="hltr-red">Às vezes, a autenticação é abreviada para AuthN</mark>.

#### Autorização

Ao autenticar um usuário, você precisará decidir onde ele pode ir e o que ele tem permissão para ver e tocar. Esse processo é chamado de autorização.

Suponha que você queira passar a noite em um hotel. A primeira coisa que você fará é ir para a recepção para iniciar o "processo de autenticação". Depois que o recepcionista verificar quem você é, você recebe um cartão de chave e poderá ir para seu quarto. Pense no cartão de chave como o processo de autorização. O cartão de chaves só permitirá que você abra as portas e elevadores que você tem permissão para acessar, como para seu quarto de hotel.

Em termos de segurança cibernética, a autorização determina o nível de acesso ou as permissões que uma pessoa autenticada tem aos seus dados e recursos. <mark class="hltr-red">Às vezes, a autorização é abreviada para AuthZ.</mark>

### Defina a Identidade Como O Perímetro De Segurança Primário

 O perímetro de segurança não pode mais ser visto como a rede local. Agora ele se estende para:

-   Aplicativos de SaaS para cargas de trabalho comercialmente críticas que podem ser hospedados fora da rede corporativa.
-   Os dispositivos pessoais que os funcionários estão usando para acessar recursos corporativos (BYOD ou traga seu próprio dispositivo), enquanto trabalham em casa.
-   Os dispositivos não gerenciados usados pelos parceiros ou clientes ao interagir com dados corporativos ou colaborar com os funcionários
-   Internet das Coisas, conhecida como os dispositivos IoT, instalada em toda a rede corporativa e nos locais do cliente.

O modelo de segurança baseado em perímetro tradicional não é mais suficiente. A identidade se tornou o novo perímetro de segurança, que permite que as organizações protejam os ativos.

Uma identidade é o conjunto de coisas que definem ou caracterizam alguém ou algo. Por exemplo, a identidade de uma pessoa inclui as informações usadas para se autenticar, como o nome de usuário e senha e o nível de autorização dela.

Uma identidade pode ser associada a um usuário, um aplicativo, um dispositivo ou outra coisa.

![350](<../Attachments/Pasted image 20230319105201.png>)

#### Quatro Pilares De Uma Infraestrutura De Identidade

A identidade é um conceito que abrange um ambiente inteiro, portanto, as organizações precisam pensar em larga escala.

-   **Administração**. A administração trata da criação e do gerenciamento/governança de identidades para usuários, dispositivos e serviços. Como administrador, você gerencia como e em que circunstâncias as características das identidades podem ser alteradas (criadas, atualizadas, excluídas).
-   **Autenticação**. O pilar de autenticação conta a história do que um sistema de TI precisa saber sobre uma identidade para confirmar que ela está correta. Envolve o ato de contestar as credenciais legítimas de uma parte.
-   **Autorização**. O pilar de autorização trata do processamento dos dados de identidade de entrada para determinar o nível de acesso que uma pessoa ou um serviço autenticado tem no aplicativo ou serviço que deseja acessar.
-   **Auditoria**. O pilar de auditoria trata do acompanhamento de quem faz o que, quando, onde e como. A auditoria inclui ter relatórios detalhados, alertas e governança de identidades.

### Descrever a Função Do Provedor De Identidade

_**Autenticação moderna**_ é um termo abrangente para os métodos de autenticação e autorização entre um cliente, como laptop ou telefone, e um servidor, como um site ou aplicativo. A função de _provedor de identidade_ é o principal recurso da autenticação moderna. Um provedor de identidade cria, mantém e gerencia as informações de identidade e, ao mesmo tempo, fornece serviços de autenticação, autorização e auditoria.

Com a autenticação moderna, todos os serviços, incluindo todos os serviços de autenticação, são fornecidos por um provedor de identidade central. As informações usadas para autenticar o usuário com o servidor são armazenadas e gerenciadas de forma centralizada pelo provedor de identidade.

Com um provedor de identidade central, as organizações podem estabelecer políticas de autenticação e autorização, monitorar o comportamento do usuário, identificar atividades suspeitas e reduzir ataques mal-intencionados.

<iframe src="https://eus-streaming-video-rt-microsoft-com.akamaized.net/b0a187ac-6b2e-4c68-925e-cc361848aefd/fb71bfe5-d367-4496-b33e-43e33a54_6750.mp4" width="500" height="300"></iframe>

Como você pode ver no vídeo, graças à autenticação moderna, o cliente se comunica com o provedor de identidade, fornecendo uma identidade que pode ser autenticada. Depois que a identidade (que pode ser um usuário ou um aplicativo) é verificada, o provedor de identidade emite um _token de segurança_ que o cliente envia ao servidor.

O servidor valida o token de segurança por meio da _relação de confiança_ com o provedor de identidade. Usando o token de segurança e as informações contidas nele, o usuário ou o aplicativo acessa os recursos necessários no servidor. Nesse cenário, o token e as informações contidas nele são armazenados e gerenciados pelo provedor de identidade. O provedor de identidade centralizado está fornecendo o serviço de autenticação.

O Microsoft Azure Active Directory é um exemplo de um provedor de identidade baseado em nuvem. Outros exemplos incluem Twitter, Google, Amazon, LinkedIn e GitHub.

#### Logon Único

Outro recurso essencial de um provedor de identidade e "autenticação moderna" é o suporte para SSO (logon único). Com o SSO, o usuário faz logon uma vez e essa credencial é usada para acessar vários aplicativos ou recursos. Quando você configura o SSO para trabalhar entre vários provedores de identidade, isso é chamado de federação.

No contexto de uma rede de computadores, um diretório é uma estrutura hierárquica que armazena informações sobre os objetos na rede. Um serviço de diretório armazena dados de diretório e os disponibiliza para os usuários de rede, administradores, serviços e aplicativos.

AD (Active Directory) é um conjunto de serviços de diretório desenvolvido pela Microsoft como parte do Windows 2000 para redes locais baseadas em domínio. O serviço mais conhecido desse tipo é o AD DS (Active Directory Domain Services). Ele armazena informações sobre os membros do domínio, incluindo dispositivos e usuários, verifica as credenciais e define os direitos de acesso. Um servidor que executa o AD DS é chamado de DC (controlador de domínio).

O AD DS é um componente essencial nas organizações com infraestrutura de TI local. O AD DS permite às organizações gerenciar vários sistemas e componentes de infraestrutura local usando uma única identidade por usuário. No entanto, o AD DS não oferece suporte nativo a dispositivos móveis, aplicativos de SaaS ou aplicativos de linha de negócios que exigem métodos de _autenticação moderna_.

O aumento dos serviços de nuvem, aplicativos de SaaS e dispositivos pessoais usados no trabalho resultou na necessidade de autenticação moderna e na evolução das soluções de identidade baseadas no Active Directory.

##

Descrever o conceito de federação

A federação permite o acesso de serviços através dos limites da organização ou do domínio, estabelecendo relações de confiança com o provedor de identidade do respectivo domínio. Com a federação, não é necessário que um usuário mantenha nome de usuário e senha diferentes ao acessar recursos em outros domínios.

![](<../Attachments/Pasted image 20230319114319.png>)

Com a federação, a confiança nem sempre é bidirecional. Embora o IdP-A possa confiar no IdP-B e permitir que o usuário no domínio B acesse o site no domínio A, o oposto não é verdadeiro, a menos que a relação de confiança esteja configurada.

## Descrever Os Serviços E Tipos De Identidade Do Azure AD

### Descrever O [[./Azure Active Directory|Azure AD]]

O Azure AD (Microsoft Azure Active Directory), parte do Microsoft Entra, é o serviço de gerenciamento de acesso e identidade baseado em nuvem da Microsoft’.

O Azure AD simplifica a maneira como as organizações gerenciam a autorização e o acesso, fornecendo um único sistema de identidade para os aplicativos no local e na nuvem. O Azure AD pode ser sincronizado com o Active Directory local existente, sincronizado com outros serviços de diretório ou usado como serviço autônomo.

![](<../Attachments/Pasted image 20230319155401.png>)

O Azure AD é usado por administradores de TI para controlar o acesso a aplicativos e recursos corporativos, com base nos requisitos de negócios. Também pode ser configurado para exigir a autenticação multifator ao acessar recursos organizacionais importantes. O Azure AD pode ser usado para automatizar o provisionamento de usuários entre o Windows Server AD existente e os aplicativos na nuvem, incluindo o Microsoft 365.

Os assinantes dos serviços do Azure, Microsoft 365 ou Dynamics 365 tem acesso automaticamente ao Azure AD.

### Descrever as Edições Disponíveis Do Azure AD

O Azure AD está disponível em quatro edições: Gratuito, Aplicativos do Office 365, Premium P1 e Premium P2.

**Azure Active Directory Gratuito**. A versão gratuita permite que você administre usuários e crie grupos, sincronize com o Active Directory local, crie relatórios básicos, configure a alteração de senha self-service para usuários na nuvem e habilite o logon único no Azure, no Microsoft 365 e em muitos aplicativos de SaaS populares. A edição gratuita está incluída nas assinaturas do Office 365, Azure, Dynamics 365, Intune e Power Platform.

**Aplicativos do Office 365**. A edição de Aplicativos do Office 365 permite que você faça tudo o que está incluído na versão gratuita, além da redefinição de senha self-service para usuários na nuvem e write-back de dispositivo, o que oferece sincronização bidirecional entre os diretórios locais e o Azure AD. A edição de Aplicativos do Office 365 do Azure Active Directory está incluída nas assinaturas do Office 365 E1, E3, E5, F1 e F3.

**Azure Active Directory Premium P1**. A edição Premium P1 inclui todos os recursos da edição gratuita e de Aplicativos do Office 365. Ele também dá suporte à administração avançada, como grupos dinâmicos, gerenciamento de grupo de autoatendimento, Microsoft Identity Manager (um conjunto de gerenciamento de acesso e identidade local) e recursos de write-back de nuvem, que permitem a redefinição de senha por autoatendimento para os usuários locais.

**Azure Active Directory Premium P2**. O P2 oferece todos os recursos do Premium P1 e o [Azure Active Directory Identity Protection](https://learn.microsoft.com/pt-br/azure/active-directory/identity-protection/overview-identity-protection) para fornecer acesso condicional baseado em risco aos aplicativos e dados críticos da empresa. O P2 também oferece o [Azure Active Directory Privileged Identity Management](https://learn.microsoft.com/pt-br/azure/active-directory/privileged-identity-management/pim-getting-started) para descobrir, restringir e monitorar os administradores e o acesso aos recursos, bem como fornecer acesso just-in-time, quando necessário.

### Descreva Os Tipos De Identidade Do Azure AD

O Azure AD gerencia diferentes tipos de identidades: usuários, entidades de serviço, identidades gerenciadas e dispositivos.

#### Usuário

A identidade de usuário é uma representação de algo gerenciado pelo Azure AD. Os funcionários e convidados são representados como usuários no Azure AD. Se você tiver vários usuários com as mesmas necessidades de acesso, pode criar um grupo. Use os grupos para conceder permissões de acesso a todos os membros do grupo, em vez de atribuir direitos de acesso individualmente.

A colaboração do Azure AD B2B, um recurso dentro de identidades externas, inclui a capacidade de adicionar usuários convidados. Com a colaboração B2B, uma organização pode compartilhar de maneira segura aplicativos e serviços com usuários convidados de outra organização.

#### Entidade De Serviço

Uma entidade de serviço é, essencialmente, uma identidade para um aplicativo. Para que um aplicativo delegue as funções de identidade e acesso ao Azure AD, o aplicativo deve primeiro ser registrado no Azure AD para habilitar sua integração. Depois de registrada, uma entidade de serviço é criada em cada locatário do Azure AD em que o aplicativo é usado. A entidade de serviço habilita recursos principais, como autenticação e autorização do aplicativo, para recursos protegidos pelo locatário do Azure AD.

#### Identidade Gerenciada

As identidades gerenciadas são um tipo de entidade de serviço gerenciada automaticamente no Azure AD que eliminam a necessidade de os desenvolvedores gerenciarem credenciais.

![600](<../Attachments/Pasted image 20230319160954.png>)

Há dois tipos de identidades gerenciadas: atribuída pelo sistema e atribuída pelo usuário.

**Atribuída pelo sistema**. Alguns serviços do Azure permitem que você habilite uma identidade gerenciada diretamente em uma instância de serviço. Quando você habilita uma identidade gerenciada atribuída pelo sistema, uma identidade é criada no Azure AD que está vinculada ao ciclo de vida dessa instância de serviço. Quando o recurso é excluído, o Azure exclui automaticamente a identidade para você. Por design, somente o recurso do Azure pode usar essa identidade para solicitar tokens do Azure AD.

**Atribuída pelo usuário**. Você também pode criar uma identidade gerenciada como um recurso autônomo do Azure. Depois de criar uma identidade gerenciada atribuída pelo usuário, é possível atribuí-la a uma ou mais instâncias de um serviço do Azure. Com as identidades gerenciadas atribuídas pelo usuário, a identidade é gerenciada separadamente dos recursos que a usam.

| Propriedade                              | Identidade gerenciada atribuída pelo sistema                                                                                                                                                               | Identidade gerenciada atribuída pelo usuário                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Criação                                  | Criada como parte de um recurso do Azure, como uma máquina virtual do Azure ou o Serviço de Aplicativo do Azure.                                                                                           | Criada como recurso autônomo do Azure.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Ciclo de vida                            | Ciclo de vida compartilhado com o recurso do Azure. Quando o recurso pai é excluído, a identidade gerenciada também é excluída.                                                                            | Ciclo de vida independente. Precisa ser explicitamente excluída.                                                                                                                                                                                                                                                                                                                                                                                        |
| Compartilhamento entre recursos do Azure | Não pode ser compartilhada. Associada a um único recurso do Azure.                                                                                                                                         | Pode ser compartilhada. Uma identidade gerenciada atribuída pelo usuário pode ser associada a mais de um recurso do Azure.                                                                                                                                                                                                                                                                                                                              |
| Casos de uso comuns                      | Cargas de trabalho que estão contidas em um único recurso do Azure. Cargas de trabalho para as quais você precisa de identidades independentes, como um aplicativo executado em uma única máquina virtual. | Cargas de trabalho que são executadas em vários recursos e que podem compartilhar uma única identidade. Cargas de trabalho que precisam de pré-autorização para um recurso seguro como parte de um fluxo de provisionamento. Cargas de trabalho em que os recursos são reciclados com frequência, mas as permissões devem permanecer consistentes. Por exemplo, uma carga de trabalho em que várias máquinas virtuais precisam acessar o mesmo recurso. |
																																																																															 |                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Dispositivo

O dispositivo é uma parte do hardware, como dispositivos móveis, notebooks, servidores ou impressoras.

-   **Dispositivos registrados no Azure AD**. A meta dos dispositivos registrados do Azure AD é fornecer aos usuários suporte para cenários BYOD (Traga seu próprio dispositivo) ou de dispositivo móvel. Nesses cenários, o usuário pode acessar os recursos da organização usando um dispositivo pessoal. Os dispositivos registrados no Azure AD se registram no Azure AD sem exigir que uma conta organizacional entre no dispositivo. Os sistemas operacionais com suporte para dispositivos registrados no Azure AD incluem Windows 10 e superior, iOS, Android e macOS.
-   **Ingressado no Azure AD**. Um dispositivo é ingressado no Azure AD por meio de uma conta organizacional, que é usada para entrar no dispositivo. Os dispositivos ingressados no Azure AD geralmente pertencem à organização. Os sistemas operacionais com suporte para dispositivos ingressados no Azure AD incluem Windows 10 ou superior (exceto edição Home) e Windows Server 2019 Máquinas Virtuais em execução no Azure.
-   **Dispositivos ingressados no Azure AD híbrido**. As organizações com implementações do Active Directory local podem se beneficiar da funcionalidade oferecida pelo Azure AD implementando dispositivos ingressados no Azure AD híbrido. Esses dispositivos são ingressados no Active Directory local e no Azure AD, exigindo que a conta organizacional entre no dispositivo

### Descreva Os Tipos De Identidades Externas

As Identidades Externas do Azure AD consistem em um conjunto de recursos que possibilitam que as organizações permitam o acesso a usuários externos, como clientes ou parceiros. Os clientes, parceiros e outros usuários convidados podem "trazer suas próprias identidades" para se conectar.

Há duas Identidades Externas do Azure AD diferentes: B2B e B2C.

-   A colaboração B2B permite que você compartilhe os aplicativos e recursos com usuários externos.
-   B2C é uma solução de gerenciamento de identidade para aplicativos voltados para o consumidor e para o cliente.

#### Colaboração B2B

A colaboração B2B permite que você compartilhe os aplicativos e serviços da sua organização com usuários convidados de outras organizações, mantendo o controle sobre seus próprios dados. A colaboração B2B usa um processo de convite e resgate. Você também pode habilitar fluxos dos usuários de inscrição por autoatendimento para permitir que os usuários externos se inscrevam em aplicativos ou recursos.

Os usuários convidados podem ser gerenciados da mesma forma que os funcionários, ser adicionados aos mesmos grupos e assim por diante.

#### Gerenciamento De Acesso B2C

O Azure AD B2C é uma solução de CIAM (gerenciamento de acesso de identidade do cliente). O Azure AD B2C permite que usuários externos entrem com suas identidades preferenciais de conta social, corporativa ou local para obter o logon único para os aplicativos.

Com o Azure AD B2C, os usuários externos são gerenciados no diretório Azure AD B2C, separadamente do diretório de funcionários e parceiros da organização. Também há suporte para SSO para os aplicativos de clientes nos locatário do Azure AD B2C.

![400](<../Attachments/Pasted image 20230319162632.png>)

As Identidades Externas do Azure AD são um recurso das edições Premium P1 e P2 do Azure AD e os preços se baseiam em usuários ativos mensais.

### Descrever O Conceito De Identidade Híbrida

Muitas organizações são uma mistura de aplicativos locais e em nuvem. Independentemente de um aplicativo ser hospedado localmente ou na nuvem, os usuários esperam e exigem acesso fácil. As soluções de identidade da Microsoft abrangem funcionalidades locais e baseadas em nuvem. Essas soluções criam uma identidade de usuário comum para autenticação e autorização para todos os recursos, independentemente da localização. Chamamos isso de **identidade híbrida**.

Uma consideração importante para as organizações que operam em um ambiente de nuvem mista e local (modelo híbrido) é determinar o método de autenticação certo para sua solução do Azure AD para elas. Essa é uma decisão importante no percurso de uma organização para a nuvem e como os usuários vão entrar e acessar os aplicativos. É a base para a infraestrutura de TI moderna da organização sobre a qual as organizações vão criar sua solução de gerenciamento de segurança, identidade e acesso usando o Azure AD. Por fim, depois que um método de autenticação é estabelecido, fica mais difícil altera-lo porque isso pode causar ruptura na experiência de conexão dos usuários. Quando se trata de autenticação de identidades híbridas, a Microsoft oferece várias maneiras de autenticar.

-   Sincronização de hash de senha do Azure AD.
-   Autenticação de passagem do Azure AD
-   Autenticação federada

![600](<../Attachments/Pasted image 20230319162938.png>)

**Sincronização de hash de senha do Azure AD**. A sincronização de hash de senha do Azure AD é a maneira mais simples de habilitar a autenticação para objetos do directory locais no Azure AD. Os usuários podem entrar nos serviços do Azure AD usando o mesmo nome de usuário e senha usados para entrar na instância do Active Directory local. O Azure AD lida com o processo de conexão dos usuários.

Com a sincronização de hash de senha, o Azure AD Connect garante que o hash de senha seja sincronizado entre o Active Directory local e o Azure AD. Isso permite que a autenticação do usuário ocorra no Azure AD e não na própria instância do Active Directory da organização. Um benefício dessa abordagem é que a sincronização de hash de senha fornece autenticação de nuvem altamente disponível. Os usuários locais podem se autenticar com o Azure AD para acessar aplicativos baseados em nuvem, mesmo que o Active Directory local fique inativo.

![600](<../Attachments/Pasted image 20230319164515.png>)

**Autenticação de passagem do Azure AD**. A autenticação de passagem do Azure AD permite que os usuários entrem em aplicativos locais e baseados em nuvem usando as mesmas senhas, como sincronização de hash de senha. Uma diferença importante, no entanto, é que, quando os usuários entram usando o Azure AD, a autenticação de passagem valida as senhas dos usuários diretamente em relação ao Active Directory local. A validação de senha não ocorre na nuvem. Isso pode ser um fator importante para as organizações que desejam impor suas políticas de segurança e senha do Active Directory local.

O uso de agentes de autenticação em execução em um servidor significa que é necessário um maior volume de infraestrutura em comparação à sincronização de hash de senha. Além disso, como a autenticação de passagem é validada no Active Directory local com dependência de agentes de autenticação em execução em servidores, é preciso considerar software e hardware distribuídos e redundantes para fornecer alta disponibilidade de solicitações de conexão. Caso contrário, se o datacenter sofrer interrupção, a autenticação para serviços do Microsoft 365 não será mais possível.

![600](<../Attachments/Pasted image 20230319164837.png>)

**Autenticação federada**. A federação é recomendada como uma autenticação para organizações que têm recursos avançados atualmente incompatíveis com o Azure AD, incluindo logon usando cartões inteligentes ou certificados, logon usando o servidor de MFA (autenticação multifator) local e logon usando uma solução de autenticação de terceiros.

A autenticação federada usa o Azure AD Connect, mas também requer servidores adicionais para dar suporte à federação, resultando em um volume de infraestrutura maior.

Organizações que optam por usar a Federação com o Serviços de Federação do Active Directory (AD FS) podem configurar a sincronização de hash de senha como um backup em caso de falha na infraestrutura do AD FS.

![600](<../Attachments/Pasted image 20230319165016.png>)

## Descrever Os Recursos De Autenticação Do Azure AD

### Descrever Os Métodos De Autenticação Disponíveis no Azure AD

#### Senhas

As senhas são a forma mais comum de autenticação, mas elas têm muitos problemas, especialmente se usadas na autenticação de fator único, em que apenas uma forma de autenticação é usada.

![](<../Attachments/Pasted image 20230320123120.png>)

#### Telefone

O Azure AD é compatível com duas opções de autenticação baseada em telefone.

-   **Autenticação baseada em SMS**. O SMS (serviço de mensagem curta) usado em mensagens de texto de dispositivo móvel pode ser usado como uma forma primária de autenticação.
- **Verificação por chamada de voz**. Os usuários podem usar chamadas de voz como uma forma secundária de autenticação para verificar a identidade durante a SSPR (redefinição de senha por autoatendimento) ou a Autenticação Multifator do Azure AD.

#### OATH

OATH (autenticação aberta) é um padrão aberto que especifica como os códigos de TOTP (Senhas Avulsas por Tempo Limitado) são gerados.

-   **Tokens OATH de software** normalmente são aplicativos. O Azure AD gera a chave secreta ou semente, que é inserida no aplicativo e usada para gerar cada OTP.
	
-   **Tokens de hardware OATH TOTP** (com suporte na visualização pública) são pequenos dispositivos de hardware que se parecem com um chaveiro que exibe um código que é atualizado a cada 30 ou 60 segundos.

#### Autenticação Sem Senha

A meta final de muitas organizações é remover o uso de senhas como parte dos eventos de conexão. Quando um usuário se conecta com um método sem senha, as credenciais são fornecidas pelo uso de métodos como biometria com o Windows Hello para Empresas ou uma chave de segurança FIDO2. Esses métodos de autenticação não podem ser duplicados com facilidade por um invasor.

##### FIDO2

A FIDO (Fast Identity Online) é um padrão aberto para autenticação sem senha. O FIDO permite que usuários e organizações aproveitem o padrão para entrar nos recursos usando uma chave de segurança externa ou uma chave de plataforma incorporada a um dispositivo, eliminando a necessidade de um nome de usuário e uma senha.

#### Aplicativo Microsoft Authenticator

Como um método de autenticação sem senha, o aplicativo Microsoft Authenticator pode ser usado como uma forma primária de autenticação para entrar em qualquer conta do Azure AD ou como uma opção de verificação adicional, durante eventos de SSPR (redefinição de senha por autoatendimento) ou autenticação multifator do Azure AD.

### Descrever a MFA (autenticação multifator) no Azure AD

A autenticação multifator requer mais de uma forma de verificação, como um dispositivo confiável ou uma verificação de impressão digital, para provar a legitimidade de uma identidade. Isso significa que, mesmo quando a senha de uma identidade for comprometida, um hacker não poderá acessar um recurso.

A autenticação multifator do Azure Active Directory funciona exigindo:

-   **Algo que você sabe** – geralmente uma senha ou um PIN **e**
-   **Algo que você tem** – como um dispositivo confiável que não é facilmente duplicado, como um telefone ou uma chave de hardware **ou**
-   **Algo que você é** – uma biometria, como uma impressão digital ou uma verificação facial.

![](<../Attachments/Pasted image 20230320124351.png>)

#### Padrões De Segurança E Autenticação Multifator

Os padrões de segurança são um conjunto de mecanismos de segurança de identidade básicos recomendados pela Microsoft.

Esses padrões habilitam alguns dos controles e recursos de segurança mais comuns, incluindo:

-   Impor o registro de autenticação multifator do Azure Active Directory para todos os usuários.
-   Forçar os administradores a usar a autenticação multifator.
-   Exigir que todos os usuários concluam a autenticação multifator quando necessário.

### Descrever Recursos De Gerenciamento E Proteção De Senha Do Azure AD

A proteção de senha é um recurso do Azure AD que reduz o risco de os usuários configurarem senhas fracas. A proteção de senha do Azure AD detecta e bloqueia senhas fracas conhecidas e suas variantes e também pode bloquear outros termos fracos que são específicos para sua organização.

 Para dar suporte a suas necessidades de negócios e de segurança, você pode definir entradas em uma lista personalizada de senhas banidas. Quando os usuários alteram ou redefinem as senhas deles, essas listas são verificadas para impor o uso de senhas fortes.

#### Listas Personalizadas De Senhas Banidas

A lista personalizada de senhas proibidas é combinada com a lista global de senhas banidas para bloquear variações de todas as senhas.

As listas de senhas banidas são um recurso do Azure AD Premium 1 ou 2.

#### Proteger-se contra a Pulverização De Senha

A proteção de senha do Azure AD bloqueia com eficiência todas as senhas fracas conhecidas com probabilidade de uso em ataques de pulverização de senha. Essa proteção se baseia em dados reais de telemetria de segurança do Azure AD, os quais são usados para criar a lista global de senhas banidas.

#### Segurança Híbrida

Para a segurança híbrida, os administradores podem integrar a proteção de senha do Azure AD a um ambiente local do Active Directory. Um componente instalado no ambiente local recebe a lista global de senhas banidas e as políticas de proteção de senha personalizadas do Azure AD.

## Descrever Os Recursos De Gerenciamento De Acesso Do Azure AD

### Descrever Acesso Condicional no Azure AD

O acesso condicional é um recurso do Azure AD que fornece uma camada extra de segurança antes de permitir que usuários autenticados acessem dados ou outros ativos.

![](<../Attachments/Pasted image 20230320210448.png>)

Uma política de acesso condicional pode declarar que, _se_ um usuário pertencer a determinado grupo, será necessário fornecer autenticação multifator para entrar em um aplicativo

### Sinais Do Acesso Condicional

- **Associação de usuário ou grupo**
- **Informações de localização nomeada**: os administradores podem optar por bloquear ou permitir o tráfego do intervalo de IP de um país/região inteiro.
- **Dispositivo**
- **Aplicativo**
- **Detecção de risco de entrada em tempo real**
- **Aplicativos de nuvem ou ações**
- **Risco do usuário**

Todas as atribuições são avaliadas com <mark class="hltr-orange">AND lógicos</mark>. Se você tiver mais de uma atribuição configurada, todas as atribuições deverão ser atendidas para disparar uma política.

### Controles De Acesso

As decisões comuns são:

-   Bloquear acesso
	
-   Conceder acesso
	
-   Exigir que uma ou mais condições sejam atendidas antes de conceder acesso:
	
	-   Requer autenticação multifator.
	-   Exigir que o dispositivo seja marcado como em conformidade.
	-   Exigir um dispositivo ingressado no Azure AD híbrido.
	-   Exigir um aplicativo cliente aprovado.
	-   Exigir uma política de proteção do aplicativo.
	-   Exigir uma alteração de senha.
	
-   Controlar o acesso do usuário com base em controles de sessão para permitir experiências limitadas em aplicativos de nuvem específicos.

## Descrever Os Benefícios Das Funções Do Azure AD E Do Controle De Acesso Baseado Em Função

O gerenciamento de acesso usando funções é conhecido como **RBAC (controle de acesso baseado em função)**. As funções internas e personalizadas do Azure AD são uma forma de RBAC no qual as funções do Azure AD controlam o acesso aos recursos do Azure AD. Isso é conhecido como RBAC do Azure AD.

### Funções Internas

-   _Administrador global_: usuários com esta função têm acesso a todos os recursos administrativos no Azure Active Directory. A pessoa que se inscreve no locatário do Azure Active Directory se torna automaticamente um administrador global.
-   _Administrador do usuário_: usuários com esta função podem criar e gerenciar todos os aspectos de usuários e grupos. Além disso, ela também inclui a capacidade de gerenciar tíquetes de suporte e monitorar a integridade do serviço.
-   _Administrador de cobrança_: usuários com esta função podem fazer compras, gerenciar assinaturas e tíquetes de suporte e monitorar a integridade do serviço.

#### Funções Personalizadas

Uma definição de função personalizada é uma coleção de permissões que podem ser escolhidas de uma lista predefinida.

Conceder permissão usando funções personalizadas do Azure AD é um processo de duas etapas. A primeira etapa envolve a criação de uma definição de função personalizada, que consiste em uma coleção de permissões que você adiciona de uma lista predefinida. Depois de criar sua definição de função personalizada, a segunda etapa é atribuir essa função a usuários ou grupos criando uma atribuição de função.

As funções personalizadas exigem uma licença Azure AD Premium P1 ou P2.

#### Conceder Acesso Apenas Para Os Usuários Que Precisam

A melhor prática, considerada mais segura, é conceder aos usuários o privilégio mínimo para realizar seu trabalho. 

#### Categorias De Funções Do Azure AD

Para facilitar o gerenciamento de identidades nos serviços do Microsoft 365, o Azure AD adicionou algumas funções internas específicas do serviço, cada uma delas permite acesso administrativo a um serviço do Microsoft 365. Isso significa que as funções internas do Azure AD podem ser usadas para fins diferentes. Há três categorias amplas.

-   Usuários em funções específicas do Azure AD: Essas funções concedem permissões para gerenciar recursos somente no Azure AD. Por exemplo, Administrador de Usuários, Administrador de Aplicativos, Administrador de Grupos concedem permissões para gerenciar recursos que residem no Azure AD.
	
-   Funções específicas do serviço: para os principais serviços do Microsoft 365, o Azure AD inclui funções específicas de serviço integradas que concedem permissões para gerenciar os recursos no serviço. Por exemplo, as funções internas do Azure AD para Administradores do Exchange, do Intune, do SharePoint e do Teams podem gerenciar recursos em seus respectivos serviços.
	
-   Funções entre serviços: há algumas funções no Azure AD que abrangem vários serviços. Por exemplo, o Azure AD tem funções relacionadas à segurança, como o Administrador de Segurança, que concedem acesso em vários serviços de segurança em Microsoft 365. Da mesma forma, na função Administrador de Conformidade, você pode gerenciar configurações relacionadas à Conformidade no Centro de Conformidade do Microsoft 365, no Exchange e assim por diante.
![](<../Attachments/Pasted image 20230321164300.png>)

#### Diferença Entre O RBAC Do Azure AD E O RBAC Do Azure

As funções internas e personalizadas do Azure AD são uma forma de RBAC no qual as funções do Azure AD controlam o acesso aos recursos do Azure AD. Isso é conhecido como RBAC do Azure AD. Da mesma forma que as funções do Azure AD podem controlar o acesso aos recursos do Azure AD, as funções do Azure também podem controlar o acesso aos recursos do Azure. Isso é conhecido como RBAC do Azure. Embora o conceito de RBAC se aplique ao RBAC do Azure AD e ao RBAC do Azure, o que eles controlam é diferente.

-   RBAC do Azure AD – as funções do Azure AD controlam o acesso a recursos do Azure AD como usuários, grupos e aplicativos.
-   RBAC do Azure: as funções do Azure controlam o acesso a recursos do Azure como máquinas virtuais ou armazenamento usando o Gerenciamento de Recursos do Azure.
![500](<../Attachments/Pasted image 20230321164415.png>)

## Descrever Os Recursos Básicos De Segurança no Azure

As ameaças podem vir de qualquer direção: por exemplo, um ataque de negação de serviço nos serviços de sua organização ou um hacker tentando acessar sua rede ao tentar penetrar o firewall. O Azure oferece uma ampla gama de ferramentas de segurança configuráveis que podem ser personalizadas para lhe dar a segurança e o controle para atender às necessidades da sua organização.

### Descreva a Proteção contra [DDoS](<./DDoS.md>) Do Azure

O objetivo de um ataque de DDoS (negação de serviço distribuído) é sobrecarregar os recursos em seus aplicativos e servidores, tornando-os sem resposta ou lentos para usuários autênticos. Um ataque de DDoS geralmente visará qualquer dispositivo voltado ao público que possa ser acessado pela Internet.

Os três tipos mais frequentes de ataque de DDoS são:

-   **Ataques de volumétricos**: são ataques baseados em volume que inundam a rede com tráfego aparentemente legítimo, sobrecarregando a largura de banda disponível. O tráfego legítimo não pode ser obtido. Esses tipos de ataques são medidos em bits por segundo.
-   **Ataques de protocolo**: os ataques de protocolo processam um destino inacessível esgotando os recursos do servidor com solicitações de protocolo falso que exploram os pontos fracos nos protocolos de camada 3 (rede) e camada 4 (transporte). Esses tipos de ataques são normalmente medidos em pacotes por segundo.
-   **Ataques de camada de recursos (aplicativo)**: esses ataques são direcionados a pacotes de aplicativo Web para interromper a transmissão de dados entre os hosts.

### O Que É a Proteção contra DDoS Do Azure?

![600](<../Attachments/Pasted image 20230321165030.png>)

A Proteção contra DDoS usa a escala e a elasticidade da rede global da Microsoft para levar capacidade de mitigação de DDoS a todas as regiões do Azure. Durante um ataque de DDoS, o Azure pode dimensionar suas necessidades de computação para atender à demanda. A proteção contra DDoS gerencia o consumo de nuvem, garantindo que a carga de rede só reflita o uso real do cliente.

A proteção contra DDoS do Azure vem em três camadas:

-   **Proteção da infraestrutura contra DDoS padrão** (antes chamada de Básica): o serviço de proteção da infraestrutura contra DDoS padrão é habilitado automaticamente para cada propriedade no Azure, sem custo adicional, como parte da plataforma do Azure. A mitigação em tempo real de ataques comuns no nível de rede e o monitoramento de tráfego Always On fornecem os mesmos tipos de proteção que os serviços online da Microsoft usam. A rede global do Azure é usada para distribuir e reduzir o tráfego de ataques entre regiões.
-   **Proteção de Rede contra DDoS**: o serviço Proteção de Rede contra DDoS (disponível como um SKU), combinado com as melhores práticas de design de aplicativo, fornece recursos aprimorados de mitigação de DDoS para se defender contra ataques de negação de serviço distribuído. Se ajusta automaticamente para proteger os recursos específicos do Azure em uma rede virtual. É muito simples habilitar a proteção em qualquer rede virtual nova ou existente, e ela não exige nenhum aplicativo ou alterações de recursos. A Proteção de Rede contra DDoS tem várias vantagens sobre a proteção contra DDoS em nível de infraestrutura padrão, incluindo registro em log, alertas e telemetria. Confira mais detalhes na Visão geral da Proteção contra DDoS.
-   **Proteção de IP contra DDoS (versão prévia)**: a Proteção de IP contra DDoS é um modelo de IP protegido por pagamento. A Proteção de IP contra DDoS contém os mesmos recursos principais de engenharia da Proteção de Rede contra DDoS, mas se diferencia nos seguintes serviços de valor agregado: suporte a resposta rápida de DDoS, proteção de custos e descontos no WAF.

### Descrever O Firewall Do Azure

O firewall do Azure é um serviço de segurança de rede gerenciado e baseado em nuvem que protege seus recursos de Rede Virtual do Azure (VNet) contra invasores. Você pode implantar o Firewall do Azure em qualquer rede virtual, mas a melhor abordagem é usá-lo em uma rede virtual centralizada. Todas as outras redes virtuais e locais serão roteadas por meio dela. A vantagem desse modelo é a capacidade de exercer controle central do tráfego de rede para todos os seus VNets em assinaturas diferentes.

![450](<../Attachments/Pasted image 20230321165507.png>)

### Principais Recursos Do Firewall Do Azure

O Firewall do Azure vem com muitos recursos, incluindo, entre outros:

-   **Zonas de disponibilidade e alta disponibilidade internas**: a alta disponibilidade é interna e, portanto, não há nada a ser configurado. O Firewall do Azure pode ser configurado para abranger várias zonas de disponibilidade para aumentar a disponibilidade.
-   **Filtragem de nível de aplicativo e de rede**: use o endereço IP, a porta e o protocolo para dar suporte à filtragem de nome de domínio totalmente qualificado para o tráfego de HTTP(s) de saída e os controles de filtragem de rede.
-   **SNAT de saída e DNAT de entrada para se comunicar com recursos da Internet**: converter o endereço IP privado dos recursos de rede em um endereço IP público do Azure (conversão de endereços de rede de origem, ou SNAT) para identificar e permitir o tráfego originado da rede virtual para destinos da Internet. De modo semelhante, o tráfego de Internet de entrada para o endereço IP público do firewall é convertido (conversão de endereços de rede de destino, ou DNAT) e filtrado para os endereços IP privados de recursos na rede virtual.
-   **Vários endereços IP públicos**: esses endereços podem ser associados ao firewall do Azure.
-   **Inteligência contra ameaças**: A filtragem contra ameaças baseada em inteligência pode ser habilitada para o seu firewall de forma a alertar e rejeitar o tráfego de/para endereços IP e domínios mal-intencionados.
-   **Integração com o Azure Monitor**: integrado com o Azure Monitor para habilitar a coleta, análise e a ação da telemetria de logs do Firewall do Azure.

### Descrever O Firewall De Aplicativo Web

O WAF (Firewall do Aplicativo Web) fornece proteção centralizada de seus aplicativos Web contra vulnerabilidades e explorações comuns. Um WAF centralizado ajuda a tornar o gerenciamento de segurança mais simples, aprimora o tempo de resposta a uma ameaça de segurança e permite a aplicação de patch a uma vulnerabilidade conhecida em um só lugar, em vez de proteger cada aplicativo Web individual. Um WAF também oferece aos administradores de aplicativos melhor garantia de proteção contra ameaças e invasões.

![500](<../Attachments/Pasted image 20230321165845.png>)

### Descrever a Segmentação De Rede no Azure

 Se um segmento for comprometido, você poderá conter melhor o impacto e impedir que o problema se propague lateralmente pelo restante da rede.

A segmentação de rede pode proteger as interações entre os perímetros. Essa abordagem pode fortalecer a postura de segurança de uma organização, conter riscos em uma violação e impedir que os invasores tenham acesso a uma carga de trabalho inteira.

#### Rede Virtual Do Azure

A Rede Virtual do Azure (VNet) é o bloco de construção fundamental da rede privada de sua organização no Azure. A VNet é semelhante a uma rede tradicional que você operaria em seu próprio data center, mas traz benefícios adicionais da infraestrutura do Azure, como escala, disponibilidade e isolamento.

![500](<../Attachments/Pasted image 20230321170059.png>)

### Descrever Grupos De Segurança De Rede Do Azure

Os NSGs (grupos de segurança de rede) permitem filtrar o tráfego de rede de e para os recursos do Azure em uma rede virtual do Azure; por exemplo, uma máquina virtual. Um NSG consiste em regras que definem como o tráfego é filtrado. Você pode associar apenas um grupo de segurança de rede a cada sub-rede e adaptador de rede de uma rede virtual em uma máquina virtual. Entretanto, o mesmo grupo de segurança de rede pode ser associado a quantas interfaces de rede e de sub-rede você desejar.

![500](<../Attachments/Pasted image 20230321170627.png>)

#### Regras De Segurança De Entrada E Saída

 As regras de segurança do NSG são avaliadas por prioridade usando cinco pontos de informações: origem, porta de origem, destino, porta de destino e protocolo para permitir ou negar o tráfego. Por padrão, o Azure cria uma série de regras, três regras de entrada e três de saída, para fornecer um nível de linha de base de segurança. Você não pode remover as regras padrão, mas pode substituí-las criando regras com prioridades mais altas.

Cada regra especifica uma ou mais das seguintes propriedades:

-   **Nome**: cada regra de NSG precisa ter um nome exclusivo que descreva sua finalidade. Por exemplo, AdminAccessOnlyFilter.
-   **Prioridade**: as regras são processadas em ordem de prioridade, com os números menores processados antes dos números maiores. Quando o tráfego corresponde a uma regra, o processamento é interrompido. Isso significa que qualquer outra regra com prioridade mais baixa (números mais altos) não será processada.
-   **Origem ou destino**: especifique o endereço IP individual ou um intervalo de endereços IP, a marca de serviço (um grupo de prefixos de endereço IP de um determinado serviço do Azure) ou grupo de segurança de aplicativo. A especificação de um intervalo, uma etiqueta de serviço ou um grupo de segurança de aplicativos permite que você crie menos regras de segurança.
-   **Protocolo**: qual protocolo de rede a regra vai verificar? O protocolo pode ser qualquer: TCP, UDP, ICMP ou any.
-   **Direção**: se a regra deve ser aplicada ao tráfego de entrada ou de saída.
-   **Intervalo de portas**: você pode especificar um indivíduo ou um intervalo de portas. Especificar intervalos permite que você seja mais eficiente ao criar regras de segurança.
-   **Ação**: por fim, você precisa decidir o que acontecerá quando essa regra for disparada.

#### Qual É a Diferença Entre NSGs (Grupos De Segurança De Rede) E O Firewall Do Azure?

 O serviço de Firewall do Azure complementa a funcionalidade de grupo de segurança de rede. Juntos, eles fornecem uma melhor segurança de rede de "defesa em profundidade". Os grupos de segurança de rede fornecem filtragem de tráfego da camada de rede distribuída para limitar o tráfego a recursos _**dentro**_ das redes virtuais em cada assinatura.. O Firewall do Azure é um firewall de rede centralizado e totalmente com estado como um serviço, que fornece proteção nos níveis da rede e do aplicativo _**entre**_ diferentes assinaturas e redes virtuais.

### Descrever O Azure Bastion E O Acesso JIT

#### Azure Bastion

O Azure Bastion é um serviço que ao ser implantado permite que você se conecte a uma máquina virtual usando seu navegador e o portal do Azure. O serviço do Azure Bastion é um serviço PaaS totalmente gerenciado por plataforma que pode ser provisionado dentro de sua rede virtual. O Azure Bastion fornece conectividade RDP e SSH segura e direta com suas máquinas virtuais diretamente do portal do Azure usando o protocolo TLS. Ao se conectar por meio do Azure Bastion, suas máquinas virtuais não precisarão de um endereço IP público, nem de um agente e tampouco de um software cliente especial.

![500](<../Attachments/Pasted image 20230321171313.png>)

A implantação do Azure Bastion é feita por rede virtual ou rede virtual com suporte a emparelhamento de rede virtual, não por assinatura, conta ou máquina virtual. Após você provisionar o serviço do Azure Bastion na sua rede virtual, a experiência de RDP/SSH é disponibilizada para todas as suas VMs na mesma VNet, assim como para as que estão em VNets emparelhadas

#### Principais Recursos Do Azure Bastion

Os seguintes recursos estão disponíveis:

-   **RDP e SSH diretamente no portal do Azure:** você pode obter acesso direto à sessão RDP e SSH no portal do Azure usando uma experiência perfeita de único clique.
-   **Sessão remota por TLS e passagem de firewall para RDP/SSH**: no portal do Azure, uma conexão com a VM abrirá um cliente Web baseado em HTML5 que é transmitido automaticamente para seu dispositivo local. Você obterá seu protocolo RDP e SSH para atravessar os firewalls corporativos com segurança. A conexão é protegida usando o protocolo TLS para estabelecer a criptografia.
-   **Não é necessário IP público na VM do Azure**: o Azure Bastion abre a conexão RDP/SSH com sua máquina virtual do Azure usando IP privado em sua VM. Você não precisa de um endereço IP público.
-   **Sem problemas de gerenciamento de NSGs:** um serviço PaaS de plataforma totalmente gerenciado do Azure que é protegido internamente para fornecer conectividade RDP/SSH segura. Você não precisa aplicar nenhum NSGs em uma sub-rede do Azure Bastion.
-   **Proteção contra a varredura de porta:** como você não precisa expor suas máquinas virtuais à Internet pública, suas VMs são protegidas contra a varredura de portas por usuários invasores e mal-intencionados localizados fora de sua rede virtual.
-   **Proteção unificada contra explorações de dia zero**: o Azure Bastion é um serviço de PaaS totalmente gerenciado por plataforma. Como ele reside no perímetro de sua rede virtual, você não precisa se preocupar em proteger cada uma das máquinas virtuais da sua rede virtual. A plataforma Azure oferece proteção contra explorações de dia zero, mantendo o Azure Bastion protegido e sempre atualizado para você.

#### Acesso Just-In-Time

O acesso JIT (just-in-time) permite bloquear o tráfego de entrada às suas VMs, reduzindo a exposição a ataques enquanto fornece acesso fácil para se conectar às VMs quando necessário.

Quando um usuário solicita acesso a uma VM, o Defender for Cloud verifica se o usuário tem permissões de Controle de acesso baseado em função do Azure (Azure RBAC) para aquela VM. Se a solicitação for aprovada, O Defender for Cloud configurará o NSGs e o Firewall do Azure para permitir o tráfego de entrada para as portas selecionadas do endereço IP (ou intervalo) relevante, para o período de tempo especificado. Depois que o tempo expirar, o Defender for Cloud restaura os NSGs aos seus estados anteriores. As conexões que já estão estabelecidas não são interrompidas.

O JIT requer que o Microsoft Defender para servidores seja habilitado na assinatura.

### Descrever as Maneiras Como O Azure Criptografa Dados

O Microsoft Azure fornece várias maneiras diferentes de proteger seus dados, cada um dependendo do serviço ou uso necessário.

-   A **Criptografia do Serviço de Armazenamento do Azure** ajuda a proteger os dados inativos ao criptografar automaticamente antes de persisti-los no Azure Managed Disks, no Armazenamento de Blobs, de Arquivos ou de Filas do Azure e descriptografa os dados antes da recuperação.
-   O **Azure Disk Encryption** ajuda você a criptografar os discos da máquina virtual da IaaS do Windows ou Linux. Ele usa o recurso BitLocker do Windows padrão do setor e o recurso DM-Crypt do Linux para fornecer criptografia de volume para os discos do sistema operacional e de dados.
-   A **TDE (Transparent Data Encryption)** ajuda a proteger o Banco de Dados SQL do Azure e o Data Warehouse do Azure contra a ameaça de atividades mal-intencionadas. Ela realiza a criptografia e a descriptografia em tempo real do banco de dados, de backups associados e de arquivos de log de transações em repouso, sem a necessidade de alterações no aplicativo.

#### O Que É O Azure Key Vault?

O Azure Key Vault é um serviço de nuvem centralizado para armazenar seus segredos do aplicativo.

-   **Gerenciamento de segredos**. Você pode usar o Key Vault para armazenar com segurança e controlar firmemente o acesso a tokens, senhas, certificados, chaves de API (Application Programming Interface) e outros segredos.
-   **Gerenciamento de chaves**. Você pode usar o Key Vault como uma solução de gerenciamento de chaves. O Key Vault facilita a criação e o controle das chaves de criptografia usadas para criptografar seus dados.
-   **Gerenciamento de certificado**. O Key Vault permite provisionar, gerenciar e implantar seus certificados SSL/TLS (Secure Sockets Layer/Transport Layer Security) públicos e privados para o Azure e recursos conectados internamente com mais facilidade.
-   **Armazenar segredos apoiados por HSMs (módulos de segurança de hardware)**. As chaves e os segredos podem ser protegidos por software ou HSMs validados por FIPS 140-2 Nível 2.

## Descrever Os Recursos De Segurança Do Microsoft Sentinel

### Definir Os Conceitos De SIEM E SOAR

O SIEM (gerenciamento de evento e informações de segurança) e o SOAR (resposta automática de orquestração de segurança) fornecem insights e automação de segurança que podem aprimorar a visibilidade e a resposta a ameaças de uma organização.

#### O Que É O SIEM (gerenciamento De Eventos E Informações De segurança)?

Um sistema SIEM é uma ferramenta usada por uma organização para **coletar dados de todo o espaço**, incluindo infraestrutura, software e recursos. O sistema faz análise, procura correlações ou anomalias e gera alertas e incidentes.

#### O Que É O SOAR (resposta Automatizada De Orquestração De segurança)?

Um sistema SOAR usa alertas de várias fontes, como um sistema SIEM. Depois, o sistema SOAR dispara fluxos de trabalho e processos automatizados baseados em ação para executar tarefas de segurança que atenuam o problema.

### Descrever Como O Microsoft Sentinel Fornece Proteção Integrada contra Ameaças

O Microsoft Sentinel é uma solução de SIEM/SOAR escalonável e nativa de nuvem que disponibiliza análise de segurança inteligente e inteligência contra ameaças para toda a empresa. Ele fornece uma solução única para detecção de alertas, visibilidade de ameaças, busca proativa e resposta a ameaças.

![400](<../Attachments/Pasted image 20230322164158.png>)

#### Conectar O Sentinel Aos Dados

Para a integração do Microsoft Sentinel, você precisa se conectar às suas fontes de segurança. O Microsoft Sentinel vem com muitos conectores para soluções da Microsoft, prontos para uso e com integração em tempo real.

#### Pastas De Trabalho

 Por meio dessa integração, o Microsoft Sentinel permite que você crie pastas de trabalho personalizadas em seus dados. Ele também conta com modelos de pasta de trabalho integrados, que permitem insights rápidos sobre seus dados assim que você conecta uma fonte de dados.

 

#### Análise

O Microsoft Sentinel usa uma análise para correlacionar alertas a incidentes. Incidentes são grupos de alertas relacionados que, juntos, criam uma possível ameaça acionável que você pode investigar e resolver.

#### Gerenciar Incidentes no Microsoft Sentinel

O gerenciamento de incidentes permite que você gerencie o ciclo de vida do incidente. Você também pode realizar tarefas de gerenciamento de incidentes padrão, como alterar o status ou atribuir incidentes a indivíduos para investigação.

#### Automação E Orquestração De Segurança

Você pode usar o Microsoft Sentinel para automatizar algumas das suas operações de segurança e tornar o SOC (Centro de Operações de Segurança) mais produtivo. O Microsoft Sentinel integra-se aos Aplicativos Lógicos do Azure para que você crie fluxos de trabalho automatizados ou guias estratégicos em resposta a eventos. Os guias estratégicos funcionam melhor com tarefas únicas e repetíveis e não exigem nenhum conhecimento de codificação.

#### Investigação

Você escolhe uma entidade no gráfico interativo para fazer perguntas específicas e faz uma análise detalhada nessa entidade e suas conexões para chegar à causa raiz da ameaça.

#### Buscando

Use as eficientes ferramentas de pesquisa e consulta de buscas do no Microsoft Sentinel, baseadas na estrutura MITRE (um banco de dados global de táticas e técnicas do adversário), para buscar proativamente ameaças à segurança nas fontes de dados de sua organização, antes do disparo de um alerta.

#### Notebooks

O Microsoft Sentinel dá suporte a Jupyter notebooks.

### Entenda Os Custos Do Sentinel

O Microsoft Sentinel fornece análise de segurança inteligente na empresa. Os dados dessa análise são armazenados em um workspace do Azure Monitor Log Analytics. A cobrança é com base no volume de dados ingeridos para análise no Microsoft Sentinel e armazenados no workspace do Log Analytics do Azure Monitor. Há duas maneiras de pagar pelo serviço do Microsoft Sentinel: Reservas de Capacidade( valor fixo com base na camada selecionada) e Pagamento Conforme o Uso

## Descrever a Proteção contra Ameaças Com O Microsoft 365 Defender

### Descrever Os Serviços Do Microsoft 365 Defender

O Microsoft 365 Defender permite que os administradores avaliem sinais de ameaça de pontos de extremidade, aplicativos, emails e identidades para determinar o escopo e o impacto de um ataque. Ele fornece mais informações sobre como a ameaça ocorreu e quais sistemas foram afetados.

![](<../Attachments/Pasted image 20230322191224.png>)

O pacote Microsoft 365 Defender protege:

-   **Identidades com o Microsoft Defender para Identidade e Azure AD Identity Protection** – O Microsoft Defender para Identidade usam os sinais do Active Directory para identificar, detectar e investigar ameaças avançadas, identidades comprometidas e ações internas intencionais direcionadas para a sua organização.
-   **Pontos de extremidade com o Microsoft Defender for Endpoint** – o Microsoft Defender for Endpoint é uma plataforma de ponto de extremidade unificada para proteção preventiva, detecção de pós-violação, investigação automatizada e resposta.
-   **Aplicativos com o Microsoft Defender for Cloud Apps** – O Microsoft Defender for Cloud Apps é uma solução abrangente de SaaS cruzada que traz visibilidade profunda, controles de dados sólidos e proteção aprimorada contra ameaças para seus aplicativos de nuvem.
-   **Email e a colaboração com o Microsoft Defender para Office 365** – O Defender para Office 365 protege sua organização contra ameaças mal-intencionadas, que são causadas por mensagens de email, links (URLs) e ferramentas de colaboração.

### Descrever O Microsoft Defender Para Office 365

O Microsoft Defender para Office 365 abrange essas principais áreas:

-   **Políticas de proteção contra ameaças**: defina as políticas de proteção contra ameaças para definir o nível apropriado de proteção para a sua organização.
-   **Relatórios**: exiba relatórios em tempo real para monitorar o desempenho do Microsoft Defender para Office 365 em sua organização.
-   **Recursos de investigação e resposta de ameaças**: use ferramentas de ponta para investigar, entender, simular e evitar ameaças.
-   **Recursos automatizados de investigação e resposta**: economize tempo e esforço investigando e reduzindo as ameaças.

#### Microsoft Defender Para Office 365 Plano 1

Este plano oferece ferramentas de configuração, proteção e detecção para o seu pacote do Office 365:

-   **Anexos seguros**: verifica anexos de email em busca de conteúdo mal-intencionado.
-   **Links seguros**: os links são verificados para cada clique. Um link seguro permanece acessível, mas links mal-intencionados são bloqueados.
-   **Anexos Seguros para SharePoint, OneDrive e Microsoft Teams**: protegem sua organização quando os usuários colaboram e compartilham arquivos ao identificar e bloquear os arquivos mal-intencionados em sites de equipe e bibliotecas de documentos.
-   **Proteção contra phishing**: detecta tentativas de representar seus usuários e domínios personalizados ou internos.
-   **Detecções em tempo real**: um relatório em tempo real que permite identificar e analisar ameaças recentes.

#### Microsoft Defender Para Office 365 Plano 2

Este plano inclui todos os principais recursos do Plano 1 e fornece automação, investigação, correção e ferramentas de simulação para ajudar a proteger seu pacote do Office 365:

-   **Rastreadores de ameaças**: forneça a mais recente inteligência sobre problemas de segurança cibernética prevalecentes e permita que uma organização tome medidas defensivas antes que haja uma ameaça real.
-   **Explorador de ameaças**: um relatório em tempo real que permite identificar e analisar ameaças recentes.
-   **AIR (Investigação e Resposta Automatizadas)**: inclui um conjunto de guias estratégicos de segurança que podem ser iniciados automaticamente, como quando um alerta é disparado, ou manualmente. Um guia estratégico de segurança pode iniciar uma investigação automatizada, fornecer resultados detalhados e recomendar ações que a equipe de segurança pode aprovar ou rejeitar.
-   **Simulador de ataque**: permite que você execute cenários de ataque realistas em sua organização para identificar vulnerabilidades. Essas simulações testam suas políticas e práticas de segurança, bem como treinam seus funcionários para aumentar a conscientização e diminuir a suscetibilidade a ataques.
-   **Procure ameaças de maneira proativa com a busca avançada no Microsoft 365 Defender**: a busca avançada é uma ferramenta de busca de ameaças baseada em consulta que permite explorar até 30 dias de dados brutos. Você pode inspecionar eventos de forma proativa em sua rede para localizar indicadores de ameaça e entidades.
-   **Investigue alertas e incidentes no Microsoft 365 Defender**: os clientes do Microsoft Defender para Office 365 P2 têm acesso à integração do Microsoft 365 Defender para detectar, revisar e responder com eficiência a incidentes e alertas.

### Descrever O Microsoft Defender Para Ponto De Extremidade

O Microsoft Defender para Ponto de Extremidade é uma plataforma criada para ajudar as redes corporativas a proteger os pontos de extremidade. Ele faz isso impedindo, detectando, investigando e respondendo a ameaças avançadas. O Microsoft Defender para Ponto de Extremidade incorpora a tecnologia incluídas nos serviços de nuvem do Windows 10 e MSFT.

![](<../Attachments/Pasted image 20230322191733.png>)

O Microsoft Defender para Ponto de Extremidade inclui:

-   **Gerenciamento de ameaças e vulnerabilidades**: uma abordagem baseada em risco para a descoberta, a priorização e a correção de vulnerabilidades de ponto de extremidade e configurações incorretas. Ele usa sensores em dispositivos para evitar a necessidade de agentes ou verificações e prioriza vulnerabilidades.
-   **Redução da superfície de ataque**: o conjunto de recursos de redução da superfície de ataque fornece a primeira linha de defesa na pilha. Ao garantir que as definições de configuração sejam definidas corretamente e as técnicas de mitigação de exploração sejam aplicadas, os recursos resistirão a ataques e exploração. Esse conjunto de recursos também inclui proteção de rede e proteção na Web, que regula o acesso a endereços IP mal-intencionados, domínios e URLs, ajudando a impedir que os aplicativos acessem locais perigosos
-   **Proteção de próxima geração**: reúne aprendizado de máquina, análise de Big Data, pesquisa de resistência a ameaças e a infraestrutura de nuvem da Microsoft para proteger dispositivos em sua organização empresarial.
-   **Detecção e resposta de ponto de extremidade**: fornece detecções de ataque avançadas quase em tempo real e acionáveis. Analistas de segurança podem priorizar alertas, ver o escopo completo de uma violação e agir em resposta a ameaças para remediá-las.
-   **Investigação e correção automatizadas**: o recurso de investigação automatizada usa algoritmos de inspeção e processos usados por analistas (como guias estratégicos) para examinar alertas e tomar uma ação de correção rápida para resolver violações. Esse processo reduz significativamente o volume de alertas que devem ser investigados individualmente.
-   **Especialistas em ameaças da Microsoft**: um serviço de busca de ameaças gerenciadas que fornece ao Centro de operações de segurança (SOCs) ferramentas de monitoramento e análise para garantir que ameaças críticas não sejam perdidas.
-   **Gerenciamento e APIs**: fornece APIs para integrar com outras soluções.

### Descrever O Microsoft Defender for Cloud Aplicativos

O Microsoft Defender for Cloud Apps é um CASB (agente de segurança de acesso à nuvem). Ele é uma solução abrangente de SaaS cruzado que opera como um intermediário entre um usuário de nuvem e o provedor de nuvem. O Microsoft Defender for Cloud Apps fornece visibilidade avançada para seus serviços de nuvem, controle sobre viagens de dados e análise sofisticada para identificar e combater ameaças cibernéticas em todos os serviços de nuvem da Microsoft e de terceiros. Use esse serviço para obter visibilidade na TI sombra, descobrindo os aplicativos de nuvem que estão sendo usados. Você pode controlar e proteger os dados nos aplicativos depois que os aprovar para o serviço.

#### O Que É Um Agente De Segurança De Acesso à Nuvem?

Um CASB atua como um gatekeeper para o acesso em tempo real de agentes entre os usuários corporativos e os recursos de nuvem que eles usam, não importa onde estejam localizados e o tipo dispositivo que estejam usando. Os CASBs ajudam as organizações a proteger seus ambientes fornecendo uma ampla variedade de recursos nos seguintes pilares:

-   **Visibilidade** – Detectar serviços de nuvem e uso de aplicativos e fornecer visibilidade sobre a Shadow IT.
-   **Proteção contra ameaças** – Monitorar comportamentos anômalos nas atividades do usuário, controlar o acesso aos recursos por meio de controles de acesso e reduzir malwares.
-   **Segurança de dados** – Identificar, classificar e controlar informações confidenciais, protegendo contra atores mal-intencionados.
-   **Conformidade** – Avaliar a conformidade dos serviços de nuvem

#### A Estrutura Do Defender for Cloud Apps

-   **Descubra e controle o uso de TI sombra**: identifique os aplicativos de nuvem, IaaS e PaaS usados ​​por sua organização. Investigue os padrões de uso, avalie os níveis de risco e a preparação da empresa contra mais de 80 riscos em mais de 25 mil aplicativos SaaS.
-   **Proteja-se contra ameaças cibernéticas e anomalias**: detecte comportamentos incomuns em aplicativos de nuvem para identificar ransomware, usuários comprometidos ou aplicativos não autorizados. Analise o uso de alto risco e faça correções automaticamente para limitar o risco à sua organização.
-   **Proteger informações confidenciais em****qualquer lugar na nuvem**: entenda e classifique informações confidenciais inativas e proteja-as contra exposição. Use as políticas prontas para uso e os processos automatizados para aplicar controles em tempo real em todos os seus aplicativos na nuvem.
-   **Avalie a conformidade de seus aplicativos na nuvem**: avalie se os seus aplicativos na nuvem atendem aos requisitos de conformidade relevantes, incluindo conformidade regulamentar e padrões do setor. Evite vazamentos de dados para aplicativos não compatíveis e limite o acesso a dados regulamentados.

#### Funcionalidade Do Microsoft Defender for Cloud Apps

-   O **Cloud Discovery** mapeia e identifica seu ambiente de nuvem e os aplicativos na nuvem que sua organização usa. O Cloud Discovery usa os logs de tráfego para descobrir e analisar dinamicamente os aplicativos de nuvem sendo usados.
	
-   **Sancionar e cancelar a sanção de aplicativos** em sua organização usando o Catálogo de aplicativos na nuvem que inclui mais de 25 mil aplicativos de nuvem. Os aplicativos são classificados e pontuados com base nos padrões do setor. Você pode usar o catálogo de aplicativos na nuvem para classificar o risco para seus aplicativos de nuvem com base em certificações regulatórias, padrões da indústria e práticas recomendadas.
	
-   Use **Conectores de aplicativos** para integrar aplicativos de nuvem da Microsoft ou de terceiros ao Microsoft Defender for Cloud Apps, estendendo o controle e a proteção. O Defender for Cloud Apps consulta logs de atividades no aplicativo e examina dados, contas e conteúdo de nuvem que podem ser usados para impor políticas, detectar ameaças e fornecer ações de governança para resolver problemas.
	
-   A proteção do Controle de Aplicativos de **Acesso Condicional** oferece visibilidade em tempo real e controle sobre o acesso e as atividades dos aplicativos na nuvem. Evite vazamentos de dados bloqueando downloads antes que eles aconteçam, definindo regras para exigir que os dados armazenados e baixados da nuvem sejam protegidos com criptografia e controlando o acesso de redes não corporativas ou arriscadas.
	
-   Use **políticas** para detectar comportamento de risco, violações ou pontos de dados suspeitos e atividades em seu ambiente de nuvem. Você pode usar políticas para integrar os processos de correção e alcançar a mitigação de risco.
![700](<../Attachments/Pasted image 20230323082501.png>)

#### Office 365 Cloud App Security

O Office 365 Cloud App Security é um subconjunto do Microsoft Defender for Cloud Apps que fornece visibilidade e controle aprimorados para o Office 365.

#### Cloud App Discovery Avançado no Azure Active Directory

O Azure Active Directory Premium P1 inclui o Azure Active Directory Cloud App Discovery sem custo adicional. Esse recurso se baseia nas funcionalidades de Cloud Discovery do Microsoft Defender for Cloud Apps que fornecem visibilidade mais profunda sobre o uso de aplicativos de nuvem na sua organização.

### Descrever O Microsoft Defender Para Identidade

O Microsoft Defender para Identidade fornece aos profissionais de segurança a funcionalidade de ambientes híbridos para:

-   Monitorar e criar perfis de comportamento e de atividades do usuário.
-   Proteger as identidades de usuário e reduzir a superfície de ataques.
-   Identificar e investigar atividades suspeitas e ataques avançados em toda a cadeia do ataque cibernético.
-   Fornecer informações claras sobre incidentes em uma linha do tempo simples para triagem rápida

#### Identificar Atividades Suspeitas E Ataques Avançados Em Toda a Cadeia Do Ataque Cibernético

Normalmente, os ataques são lançados contra qualquer entidade acessível, como usuários com poucos privilégios. Os ataques são movidos lateralmente de forma rápida, até o invasor acessar ativos valiosos. Esses ativos podem incluir contas confidenciais, administradores de domínio e dados altamente confidenciais. O Defender para Identidade identifica essas ameaças avançadas na origem durante toda a cadeia do ataque cibernético:

-   Reconhecimento
-   Credenciais comprometidas
-   Movimentação lateral
-   Predominância de domínio

### Descrever O Portal Do Microsoft 365 Defender

A home page do Microsoft 365 Defender mostra muitos dos cartões comuns de que as equipes de segurança precisam. A composição dos cartões e dados depende da função do usuário. Como o portal do Microsoft 365 Defender usa o controle de acesso baseado em função, cada função verá os cartões mais relevantes para seus trabalhos diários.

Os cartões se enquadram nessas categorias:

-   Identidades: monitorar as identidades em sua organização e acompanhar comportamentos suspeitos ou arriscados.
-   Dados: ajudar a controlar a atividade do usuário que possa levar à divulgação de dados não autorizada.
-   Dispositivos: obter informações atualizadas sobre alertas, atividade de violação e outras ameaças em seus dispositivos.
-   Aplicativos: obter insights sobre como os aplicativos de nuvem estão sendo usados em sua organização.

![760](<../Attachments/Pasted image 20230323083458.png>)

![760](<../Attachments/Pasted image 20230323083727.png>)

#### Buscando

A busca avançada é uma ferramenta de busca de ameaças baseada em consulta que permite que você explore até 30 dias de dados brutos.

### Análise De Ameaças

A análise de ameaças é a solução de inteligência contra ameaças incluída no produto, oferecida por pesquisadores especialistas em segurança da Microsoft.

### Pontuação Segura

O Microsoft Secure Score, uma das ferramentas do portal do Microsoft 365 Defender, representa a postura de uma empresa em relação à segurança. Quanto maior a classificação, melhor sua proteção.

![760](<../Attachments/Pasted image 20230323084001.png>)
