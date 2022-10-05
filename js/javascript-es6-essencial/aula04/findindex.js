//retorna o índice do primeiro item de um array que satisfaz a condição

const arr = [1, 2, 3, 4]
const indiceDoMaiorQueDois = arr.findIndex(valor => valor > 2)
console.log(indiceDoMaiorQueDois);