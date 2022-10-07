//* pega os paramtros e os transforma em um array

function somar(a, b, ...numeros) {
    console.log(`O parametro A é igual a ${a}`)
    console.log(`O parametro B é igual a ${b}`)
    console.log(`E o resto dos argumentos são o seguinte array: [${numeros}]`)
    return numeros.reduce((acc, value) => acc + value, 0)
}

function multiplar(...numeros) {
    return numeros.reduce((acc, value) => acc * value, 1)
}

console.log(somar(1, 2, 7, 8, 9, 10))