//loop entre estruturas iterávies (arrays, strings)

function showLetras(palavra){
    for(letra of palavra){
        console.log(letra)
    }
}

const palavra = 'melão'

showLetras(palavra)

function pushArray(numeros, vetor){
    for(numero of numeros){
        vetor.push(numero)
    }
}

const nums = [1, 2, 3, 4, 5]
const array = []
pushArray(nums, array)
console.log(array)