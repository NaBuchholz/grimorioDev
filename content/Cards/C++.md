---
type: Study
tags:
  - Study
  - public
aliases:
status: Doing
relatedTo: []
---

## Resume

---

## O Que É C++ ?

C++ é uma linguagem de programação derivada de C e fortemente tipada que é muito usada para jogos ([[Unreal Engine]]), programação orientada a objetos. Ela adiciona Programação Orientada a Objeto como principal diferença, entre outras melhorias. Foi criado or Bjarne Stroustrup como "C with Classes" e evoluiu para uma linguagem multi-paradigma que suporta:

- Programação procedural (como C)
- Programação orientada a objetos
- Programação genérica (templates)
- Programação funcional (parcialmente)

## Diferenças Entre C++ E C

### **1. Orientação a Objetos**

```cpp
// C++ - Classes e objetos
class Player {
private:
    int health;
    string name;
public:
    Player(string n) : name(n), health(100) {}
    void takeDamage(int damage) { health -= damage; }
};

Player investigator("Professor Armitage");
```

- **Classe** => São tipos de dados que o usuário consegue definir e alterar.

### **2. Referências**

```cpp
// C++ - Referências (alternativa aos ponteiros)
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int x = 5, y = 10;
swap(x, y); // Não precisa de & como em C
```

### **3. Sobrecarga De Funções**

```cpp
// C++ - Múltiplas funções com mesmo nome
void print(int n) { cout << n << endl; }
void print(string s) { cout << s << endl; }
void print(double d) { cout << d << endl; }
```

### **4. Templates (Genéricos)**

```cpp
// C++ - Código genérico
template<typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

int maxInt = maximum(5, 10);        // T = int
double maxDouble = maximum(3.14, 2.71); // T = double
```

### **5. STL (Standard Template Library)**

```cpp
// C++ - Containers e algoritmos prontos
#include <vector>
#include <map>
#include <algorithm>

vector<string> investigators = {"Armitage", "Wilmarth", "Akeley"};
map<string, int> sanity = {{"Armitage", 65}, {"Wilmarth", 45}};

sort(investigators.begin(), investigators.end());
```

### **6. Namespaces**

```cpp
// C++ - Organização de código
namespace CoC {
    class Investigator {
        // implementação
    };
}

CoC::Investigator player;
```

### **7. Construtores E Destrutores**

```cpp
// C++ - Inicialização e limpeza automática
class GameSession {
public:
    GameSession() {
        cout << "Sessão iniciada" << endl;
    }
    ~GameSession() {
        cout << "Sessão finalizada" << endl;
    }
};
```

### **8. Operadores Sobrecarregados**

```cpp
// C++ - Redefinir comportamento de operadores
class Dice {
    int sides;
public:
    Dice(int s) : sides(s) {}
    
    int operator()() {  // operator() para "rolar o dado"
        return rand() % sides + 1;
    }
};

Dice d20(20);
int roll = d20(); // Chama operator()
```

### **9. Stream I/O**

```cpp
// C++ - cin/cout em vez de scanf/printf
#include <iostream>
using namespace std;

string name;
cout << "Nome do investigador: ";
cin >> name;
cout << "Bem-vindo, " << name << "!" << endl;
```

### **10. Gerenciamento De Memória Melhorado**

```cpp
// C++ - Smart pointers (C++11+)
#include <memory>

unique_ptr<Player> player = make_unique<Player>("Armitage");
// Não precisa delete manual, é automático
```

### **11. Auto Type Deduction (C++11+)**

```cpp
// C++ - Tipo inferido automaticamente
auto health = 100;        // int
auto name = "Investigator"; // const char*
auto dice_roll = rollDice(); // tipo retornado por rollDice()
```

### **12. Range-based for Loops (C++11+)**

```cpp
// C++ - Loops mais simples
vector<string> skills = {"Spot Hidden", "Library Use", "Occult"};

for (const auto& skill : skills) {
    cout << skill << endl;
}
```

## Vantagens Do C++ Sobre C

- **Abstração**: Classes permitem modelar conceitos complexos
- **Reutilização**: Herança e templates facilitam reuso de código
- **Segurança**: Referências e smart pointers reduzem erros
- **Produtividade**: STL fornece estruturas de dados prontas
- **Expressividade**: Sobrecarga de operadores torna código mais legível

## Quando Usar Cada Um

**Use C quando**:

- Performance crítica é essencial
- Programação de sistemas/embarcados
- Projetos que exigem controle total sobre hardware
- Compatibilidade com código C legado

**Use C++ quando**:

- Projetos grandes e complexos
- Orientação a objetos é benéfica
- Quer aproveitar a STL
- Precisa de templates/genéricos
- Produtividade de desenvolvimento é importante

Para alguém vindo do C (como você com experiência na 42), C++ oferece muito mais ferramentas para organizar e estruturar código complexo, mantendo a performance do C quando necessário.

## O Operador `<<` (Stream Insertion)

O `<<` em C++ é o **operador de inserção de stream**.

```c++
#include <iostream>
std::cout << "Hello " << nome << ", você tem " << idade << " anos" << std::endl;
```

## Classes Em C++

- Modificadores de Acesso Possíveis:
	1. **Privado** => default
	2. Público
	3. Protegido
- Construtores:
	- O compilador sempre ira atribuir um construtor default para a classe

## Stack Vs Heap - Conceitos Básicos

**Stack (Pilha):**

- Memória gerenciada automaticamente
- Variáveis são criadas e destruídas automaticamente quando saem de escopo
- Mais rápida para alocação/desalocação
- Tamanho limitado
- Gerenciamento automático via [RAII (Resource Acquisition Is Initialization)](<./RAII (Resource Acquisition Is Initialization).md>)

**Heap (Monte):**

- Memória gerenciada manualmente
- Você deve explicitamente alocar (`new`) e desalocar (`delete`)
- Mais lenta para alocação/desalocação
- Tamanho limitado apenas pela RAM disponível
- Persistência além do escopo onde foi criada

## Referências Em C++

### O Que São Referências?

Uma **referência** é um "apelido" ou "nome alternativo" para uma variável existente. É uma forma mais limpa e segura de fazer o que os ponteiros fazem.

### Sintaxe Básica

```cpp
int x = 42;
int& ref = x;  // ref é uma referência para x
// ref e x são a MESMA variável, apenas nomes diferentes
```

### Características Importantes

- **Deve ser inicializada** na declaração
- **Não pode ser reatribuída** para outra variável
- **Não ocupa memória adicional** (é apenas um alias)
- **Sempre válida** (não pode ser NULL como ponteiros)

### Comparação: Ponteiros Vs Referências

```cpp
int valor = 10;

// Ponteiro
int* ptr = &valor;     // ptr guarda o endereço
*ptr = 20;             // modifica através de *ptr
ptr = nullptr;         // pode ser reatribuído

// Referência  
int& ref = valor;      // ref é um alias para valor
ref = 30;              // modifica diretamente (sem *)
// ref = outraVar;     // ❌ ERRO! Não pode reatribuir
```

### Casos De Uso Práticos

#### 1. Parâmetros De Função (evita cópias)

```cpp
void imprimir(const std::string& texto) {  // não copia a string
    std::cout << texto << std::endl;
}
```

#### 2. Modificar Parâmetros

```cpp
void incrementar(int& numero) {  // modifica o original
    numero++;
}
```

#### 3. Retorno De Função

```cpp
std::string& getNome() {  // retorna referência, não cópia
    return nomeGlobal;
}
```

### Endereços De Memória

```cpp
int x = 42;
int& ref = x;

// Todos imprimem o MESMO endereço:
std::cout << &x << std::endl;     // endereço de x
std::cout << &ref << std::endl;   // endereço de x (não da ref!)
```

## std::string::npos

### Definição

`std::string::npos` é uma constante estática da classe `std::string` que representa uma **posição inválida** ou **"não encontrado"**.

### Características Técnicas

- **Tipo**: `size_t` (unsigned integer)
- **Valor**: Maior valor possível para `size_t` (geralmente `4294967295` em sistemas 32-bit)
- **Propósito**: Valor sentinela para indicar falha em operações de busca

### Uso Principal

É retornado pelas funções de busca da `std::string` quando não encontram o que procuram:

```cpp
std::string texto = "Hello World";

// Buscar substring que existe
size_t pos1 = texto.find("World");     // Retorna 6
size_t pos2 = texto.find("xyz");       // Retorna std::string::npos

// Verificação típica
if (pos2 == std::string::npos) {
    std::cout << "Substring não encontrada!" << std::endl;
}
```

### Funções Que Retornam Npos

- `find()`
- `rfind()`
- `find_first_of()`
- `find_last_of()`
- `find_first_not_of()`
- `find_last_not_of()`

### Exemplo Prático: Loop De Substituição

```cpp
std::string str = "foo bar foo baz foo";
std::string busca = "foo";
size_t pos = 0;
size_t found;

found = str.find(busca, pos);
while (found != std::string::npos) {
    // Processar a ocorrência encontrada
    std::cout << "Encontrou 'foo' na posição: " << found << std::endl;
    
    pos = found + busca.length();
    found = str.find(busca, pos);  // Buscar próxima
}
```

### Por Que Usar Npos?

- **Segurança**: Evita valores ambíguos (0 é uma posição válida)
- **Clareza**: Código mais legível e expressivo
- **Padrão**: Seguindo convenções da STL

### Nota De Memória

> 💡 **Lembre-se**: `npos` significa "**n**ot **pos**ition" - não posição. É o equivalente ao `NULL` para ponteiros, mas para índices de string.

## Streams De Arquivo

### `std::ifstream` (input File stream)

- `open(filename)` - abre arquivo para leitura
- `is_open()` - verifica se abriu com sucesso
- `close()` - fecha o arquivo

### `std::ofstream` (output File stream)

- `open(filename)` - abre arquivo para escrita
- `is_open()` - verifica se abriu com sucesso
- `close()` - fecha o arquivo

### `std::getline(stream, string)`

- Lê uma linha completa do stream para a string
- Retorna o próprio stream (usado na condição do while)

## **O Que É Uma Classe Ortodoxa Canônica?**

Imagine que você está criando um **molde para fazer objetos** (isso é uma classe). Para que esse molde seja "completo" e funcione bem em todas as situações, ele precisa ter **4 elementos essenciais**. É como uma receita que precisa de ingredientes obrigatórios.

### **Os 4 Elementos Obrigatórios:**

#### **1. Construtor Padrão (Default Constructor)**

```cpp
Fixed(void); // ou Fixed();
```

**O que faz:** Cria um objeto "do zero", sem receber nenhuma informação.

**Analogia:** É como comprar um celular novo na loja - ele vem com configurações de fábrica.

**Exemplo prático:**

```cpp
Fixed meuNumero; // Cria um Fixed com valor 0 (padrão)
```

---

#### **2. Destrutor**

```cpp
~Fixed(void);
```

**O que faz:** "Limpa a bagunça" quando o objeto não é mais necessário.

**Analogia:** É como apagar arquivos temporários do computador quando você fecha um programa.

**Por que é importante:** Evita vazamentos de memória (memory leaks).

---

#### **3. Construtor De Cópia (Copy Constructor)**

```cpp
Fixed(const Fixed& other);
```

**O que faz:** Cria um objeto **copiando** outro objeto já existente.

**Analogia:** É como fazer um xerox de um documento - você quer uma cópia idêntica.

**Exemplo prático:**

```cpp
Fixed original(42);
Fixed copia(original); // Cria 'copia' igual ao 'original'
```

---

#### **4. Operador De Atribuição (Assignment Operator)**

```cpp
Fixed& operator=(const Fixed& other);
```

**O que faz:** Permite **copiar o conteúdo** de um objeto para outro que **já existe**.

**Analogia:** É como apagar o que está escrito numa lousa e escrever algo novo no lugar.

**Exemplo prático:**

```cpp
Fixed a(10);
Fixed b(20);
b = a; // Agora 'b' tem o mesmo valor que 'a' (10)
```

---

### **Por Que Esses 4 São obrigatórios?**

#### **Sem Eles, Coisas Estranhas acontecem:**

1. **Sem construtor padrão:** Você não consegue criar objetos simples
2. **Sem destrutor:** Vazamentos de memória
3. **Sem construtor de cópia:** Cópias podem "quebrar" ou apontar para lugares errados na memória
4. **Sem operador de atribuição:** Atribuições podem corromper dados

### **Exemplo Visual Do Problema:**

```cpp
// ❌ SEM classe ortodoxa:
Fixed a;           // Pode dar erro (sem construtor padrão)
Fixed b = a;       // Cópia pode "quebrar" (sem copy constructor)
Fixed c;
c = a;             // Atribuição pode corromper dados
// Quando sair de escopo, pode dar crash (sem destructor)

// ✅ COM classe ortodoxa:
Fixed a;           // ✅ Funciona (construtor padrão)
Fixed b = a;       // ✅ Cópia perfeita (copy constructor)
Fixed c;
c = a;             // ✅ Atribuição segura (assignment operator)
// ✅ Limpeza automática (destructor)
```

### **Regra Prática:**

> **"Se você implementa UMA dessas 4 coisas, implemente TODAS"**

Por quê? Porque se você precisou mexer em uma, provavelmente as outras também precisam ser customizadas para funcionar corretamente juntas.

### **No Seu Código Fixed:**

```cpp
class Fixed {
private:
    int _fixedPointValue;  // Nosso dado importante
    
public:
    Fixed(void);                        // 1. Construtor padrão
    ~Fixed(void);                       // 2. Destrutor
    Fixed(const Fixed& other);          // 3. Copy constructor
    Fixed& operator=(const Fixed& other); // 4. Assignment operator
    
    // + outras funções específicas da classe...
};
```

**Resumindo:** A Classe Ortodoxa Canônica é como ter um **kit completo de ferramentas** para que sua classe funcione perfeitamente em qualquer situação onde precisar criar, copiar, modificar ou destruir objetos!

## References and Footnotes

- https://www.youtube.com/watch?v=wN0x9eZLix4
- [Básico em C++](https://youtu.be/vLnPwxZdW4Y?si=VQiJUalaWzTJ8-4v "https://youtu.be/vLnPwxZdW4Y?si=VQiJUalaWzTJ8-4v")
