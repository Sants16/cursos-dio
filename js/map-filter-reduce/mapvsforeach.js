//map
const arrayMap = [1, 2, 3, 4, 5]
arrayMap.map((item) => item * 2) //retorno: [2, 4, 6, 8, 10]
console.log(arrayMap.map((item) => item * 2))

//forEach
const arrayForEach = [1, 2, 3, 4, 5]
arrayForEach.forEach((item) => item * 2) //retorno: undefined
console.log(arrayForEach.forEach((item) => item * 2))

//A diferença entre os dois métodos são os seus retornos, o método forEach() em vez de retornar um novo array, como faz o método map,retorna o valor undefined e o map() retorna um novo array com os elementos transformados, o map diferente do forEach não modifica o array original mas cria um novo array com base na função que foi descrita para ser executada com os elementos do array original. Enquanto o forEach foi feito para ser uma alternativa ao loop for, o map foi feito para fazemos operação de transformação/alteração nos itens de um array e ao final dessas operações ter uma lista nova com a mesma quantidade de itens da lista base. O método map() se baseia na imutabilidade, enquanto forEach() é um método mutante.

//VELOCIDADE DE AMBOS OS MÉTODOS:

const meuArrayIncrivel = [1, 2, 3, 4, 5]

const inicioForEach = performance.now()
meuArrayIncrivel.forEach(x => (x + x) * 10000000000)
const finalForEach = performance.now()
console.log(`Velocidade do [forEach]: ${finalForEach - inicioForEach} milisegundos`)

const inicioMap = performance.now()
meuArrayIncrivel.map(x => (x + x) * 10000000000)
const finalMap = performance.now()
console.log(`Velocidade do [map]: ${finalMap - inicioMap} milisegundos`)

//A escolha entre map() e forEach() sempre dependerá do que você precisa em cada caso. Se você for modificar, substituir ou usar esses dados, você pode escolher o map(), pois ele retorna um novo array com os dados transformados. Contudo, se você não precisa retornar um array, não utilize o map() - prefira usar o forEach(). 
//O método map() é encadeável. Ou seja, você pode chamar outros métodos como reduce(), sort(), filter() e assim por diante depois de executar o método map() em um array. Isso é algo que você não pode fazer com forEach() porque, como você pode deduzir, com base no valor de retorno, não é possível iterar sobre um valor undefined, visto que já não é mais um array.