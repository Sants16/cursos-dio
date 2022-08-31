function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

const pessoa1 = {
    nome: 'Raissa',
    idade: 17
}

const pessoa2 = {
    nome: 'Geovanna',
    idade: 11
}

const animal = {
    nome: 'Maju',
    idade: 2
}

console.log(calculaIdade.call(pessoa1, 11))
console.log(calculaIdade.call(pessoa2, 5))
console.log(calculaIdade.apply(animal, [2]))