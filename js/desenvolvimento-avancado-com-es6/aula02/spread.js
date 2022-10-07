function dividir(num1, num2) { //*num1 = 10, num2 = 2
    if(num1 > num2) return num1 / num2
    throw new RangeError('O numero1 deve sair maior que o numero2')
}

console.log(dividir(...[10, 2]))

function todasAsLetras(...letras) {
    return letras
}

console.log(todasAsLetras(...'pao'))

const array = [1, 2, 3, 'algumaCoisa']
const array2 = [...array, 4, 5, 6, 'outraCoisa']
console.log(array2)