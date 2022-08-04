//Pratique a sintaxe de multiplicação de números, uma vez utilizando o parametro 'this' de um elemento cirado por você e depois outra sem ele

//USANDO O THIS
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(array, thisArg) {
    return array.map(function (item){
        return item * this.value;
    }, thisArg)
}

const numbers = [1, 2, 3, 4, 5, 6]

//ira retornar todos os numeros do array * o value de laranja
console.log(`this -> laranja == ${mapComThis(numbers, laranja)}`)

//ira retornar todos os numeros do array * o value de maca
console.log(`this -> maçã == ${mapComThis(numbers, maca)}`)

//SENDO O THIS
const numeros = [2, 3, 4]
console.log(numeros.map((numero) => numero * numero/2))

function mapSemThis(array){
    return array.map(function(item){
        return item * 2
    })
}

console.log(`Os itens do array ${numeros} x 2 ficam: ${mapSemThis(numeros)}`)