//1.Some todos os numeros de um array
function somarNumeros(array){
    return array.reduce(function(prev, current){
        console.log({prev})
        console.log({current})
        return prev + current
    }, 0) //pode colocar 0 como valor inicial do previous
}

const array = [1, 2, 3]
console.log(somarNumeros(array))

//2.Crie uma função que recebe uma lista de preços e um número representando o saldo disponivel. Calcule qual será o valor final após subtrair todos os preços da lista enviada

let saldo = 100
const compras = [2.50, 10, 30, 5.55]

const somarCompras = (listaDeCompras) => {
    return listaDeCompras.reduce((prev, current) => prev + current)
}

console.log(`Seu saldo inicial era de ${saldo} e foi realizada uma lista de compras no valor de ${somarCompras(compras)}, após o valor ser debitado do seu saldo você ficará com ${saldo - compras.reduce((prev, current) => prev + current)}`)

const lista = [
    {
        name: 'Arroz',
        preco: 20,
    },
    {
        name: 'Bala',
        preco: 2.25,
    },
    {
        name: 'Lanche',
        preco: 40,
    }
]

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log(`Rodada: ${index + 1}`)
        console.log({prev})
        console.log({current})
        return prev - current.preco
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldo, lista))