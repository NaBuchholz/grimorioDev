---
aliases:
tags:
  - AprendizadoContinuo
  - Programação/React
  - public
status: Done
type: source
---

## Busca, Filtros E Ordenação

## **Filtros** E Ordenação no React

A implementação de filtros no React requer o entendimento dos seguintes conceitos:

- Inputs controlados para pegar informações do usuário, por exemplo: um filtro de preço, precisamos pegar o valor mínimo e o valor máximo que o usuário deseja filtrar;
- Variáveis de estado para guardarmos os valores fornecidos pelo usuário no estado e então conseguirmos manipular esses dados na nossa aplicação.
- Além de métodos de Arrays, que possibilitam filtrar na nossa aplicação produtos por preço ou até mesmo ordenar alfabeticamente, por exemplo.

Vamos supor que estamos criando uma loja virtual de roupas e queremos criar uma funcionalidade de filtrar por preço.

---

## Input Controlado

- Passo 1: Criar nossa estrutura de inputs HTML. Teremos 2 inputs: Na `linha 12`, um para o usuário digitar o valor mínimo e, na `linha 20` outro o valor máximo. Começamos criando uma label e conectamos ela com o input através do atributo `htmlFor` do label com o atributo `id` do input.
- Passo 2: Agora, nas `linhas 3 e 4`, criamos dois estados para guardar tudo o que for digitado nos inputs. O estado da `linha 3`, `valorMin` será responsável por armazenar as informações digitadas no input de valor mínimo. O estado da `linha 4`, `valorMax` será responsável por armazenar as infos do input de valor máximo da compra.
- Passo 3: Vamos conectar o atributo value do nosso input com o estado que irá guardar o que for digitado no input. Perceba que nas `linhas 15 e 23`, adicionamos o atributo value dentro da tag do input chamando o nome do estado.
- Passo 4: Agora que já temos um input controlado pelo estado, vamos adicionar nosso evento onChange nas `linhas 6 e 7`, para que seja detectado as interações do usuário, e a cada interação, a função que o onChage está chamando, será responsável por salvar esse valor automaticamente no estado. Não esqueça de chamar as funções em seus respectivos inputs, como nas `linhas 16 e 24`.

	```jsx
    
    1. function App() {
    2.
    3. const [valorMin, serValorMin] = useState(0)
    4. const [valorMax, serValorMax] = useState(0)
    5.
    6. const handleValorMin = (event) => setValorMin(event.target.value)
    7. const handleValorMax = (event) => setValorMax(event.target.value)
    8.
    9. return (
    10.	<>
    11.		<label htmlFor="valorMin">Valor Mínimo:</label>
    12.		<input 
    13.			type="text" 
    14.			id="valorMin"
    15.			value={valorMin}
    16.			onChange={handleValorMin}
    17.		/>
    18.			
    19.		<label htmlFor="valorMax">Valor Máximo:</label>
    20.		<input 
    21.			type="text" 
    22.			id="valorMax"
    23.			value={valorMax}
    24.			onChange={handleValorMax}
    25.		/>
    26.	</>
    27. )
    28.
    29. export default App;
    ```

---

## Métodos De Array

São funções que permite manipularmos os dados existentes dentro dos nossos arrays. Os métodos de arrays são funções que recebem como argumento uma callback. Quando passamos uma função como argumento para outra função, isso se chama callback. Essa callback fica responsável por realizar alguma ação com cada elemento da lista. 

Existem vários métodos de array, mas por hoje, iremos focar no map, filter e sort. Todos recebem uma callback e devolvem um novo array. 

---

### Map

O map é utilizado para transformar um array. Retorna um novo array do mesmo tamanho do array original. Ou seja, ele passa por cada elemento de um array e faz a determinada ação que definimos. Ou, no caso de apenas renderizar listas na tela, apenas pedimos para o map retornar cada item, sem necessáriamente realizar uma ação. exemplo: Temos uma lista de produtos no estado da nossa aplicação e queremos mostrar na tela para o usuário. Podemos fazer um map apenas retornando as infos do item dentro de uma estrutura html. Exemplo:

**Entrada**

```jsx
1. const produtos = [
2.	{nome: "banana", valor: 5},
3.	{nome: "arroz", valor: 7},
4.	{nome: "biscoito", valor: 3},
5.	{nome: "Óleo de soja", valor: 10},
6.	{nome: "Papel Higienico", valor: 15},
7. ]
8.
9. const produtosRenderizados = produtos.map(item => {
10.	return <p>O produto {item.nome} custa {item.valor}</p>
11. })
```

**Saída**

```jsx
[{nome: "banana", valor: 5}, {nome: "arroz", valor: 7}, {nome: "biscoito", valor: 3}, {nome: "Óleo de soja", valor: 10}, {nome: "Papel Higienico", valor: 15},]
```

#### **Alterando O Valor De Cada Item Com map**

Podemos até mesmo pedir para que a cada produto iterado, o valor do produto aumente 2 reais. Exemplo:

**Entrada**

```jsx
1. const produtos = [
2.	{nome: "banana", valor: 5},
3.	{nome: "arroz", valor: 7},
4.	{nome: "biscoito", valor: 3},
5.	{nome: "Óleo de soja", valor: 10},
6.	{nome: "Papel Higienico", valor: 15},
7. ]
8.
9. const produtosAlterados = produtos.map(item => {
10.	return item.valor + 2
11. })
```

**Saída**

Foi retornado um novo array com o valor de todos os produtos alterados.

```jsx
[{nome: "banana", valor: 7}, {nome: "arroz", valor: 9}, {nome: "biscoito", valor: 5}, {nome: "Óleo de soja", valor: 12}, {nome: "Papel Higienico", valor: 17},]
```

---

### Filter

Filter retorna um novo array de elementos que se encaixa em uma determinada condição. Todos elementos que passarem no teste, ou seja, retornarem true, irá para o novo array. Esse método não afeta o array original.

Vamos dar um exemplo: Supomos que temos uma lista de produtos com diversos valores e o usuário deseja filtrar apenas valores entre 7 e 10 reais. Podemos fazer uma condição em nosso filter pedindo para retornar true apenas produtos dessa faixa de preço. Exemplo:

**Entrada**

```jsx
1. const produtos = [
2.	{nome: "banana", valor: 5},
3.	{nome: "arroz", valor: 7},
4.	{nome: "biscoito", valor: 3},
5.	{nome: "Óleo de soja", valor: 10},
6.	{nome: "Papel Higienico", valor: 15},
7. ]
8.
9. const novosValores = produtos.filter(item => {
10.	return item.valor >= 7 && item.valor <= 10
11. })

```

**Saída**

```jsx
[{nome: "arroz", valor: 7},{nome: "Óleo de soja", valor: 10}]
```

---

### Sort

O método sort possibilita que ordernar os elementos de um array e retorna um novo array com os elementos ordenados. Podemos ordenar por título em ordem alfabética, preço ou data em ordem crescente ou decrescente. Exemplo:

**Entrada**

Agora, vamos ordenar nossa lista retornando um array com os nomes dos produtos em ordem alfabética.

```jsx
1. //Início do código
2. const produtos = [
3.	{nome: "banana", valor: 5},
4.	{nome: "arroz", valor: 7},
5.	{nome: "biscoito", valor: 3},
6.	{nome: "Óleo de soja", valor: 10},
7.	{nome: "Papel Higienico", valor: 15},
8. ]
9.
10. const produtosOrdenados = produtos.sort(item => {
11.	return item.nome - item.nome
12. })
13. //Fim do código
```

**Saída**

```jsx
[{nome: "arroz", valor: 7}, {nome: "banana", valor: 5}, {nome: "biscoito", valor: 3}, {nome: "Óleo de soja", valor: 10}, {nome: "Papel Higienico", valor: 15}]
```

## Exercício De Prática

[Filtros e Ordenacao no React [componentes funcionais]](https://vimeo.com/731134208/2434ad2fa0)

Estamos trazendo aqui um template que você pode utilizar para acompanhar o grande Mateus Gesualdo no processo de criar os filtros desse exercício: 

[template-filtros-ordenacao (2).zip](Busca,%20filtros%20e%20ordenac%CC%A7a%CC%83o%20a8a0c43382c6408cad492f31937b3af0/template-filtros-ordenacao_(2).zip)
