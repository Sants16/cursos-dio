//string
const tamanhoTexto = 'texto'.length
console.log(tamanhoTexto)

const splitTexto = 'texto'.split('e')
console.log(splitTexto)

const ultimaLetra = 'texto'.slice(-1)
console.log(ultimaLetra)

const substringTexto = 'texto'.substring(0,2) 
console.log(substringTexto)

//number
const number = 12.5078

const duasCasasDecimais = number.toFixed(2)
console.log(duasCasasDecimais)

//object
const animal = {
    raça: 'cachorro',
    porte: 'grande',
    sexo: 'Macho'
}

animal.nome = 'Chico Anisio'
delete animal.porte
console.log(animal)
console.log(Object.keys(animal)) //retorna as props
console.log(Object.values(animal)) //retorna os valores das props
console.log(Object.entries(animal)) //retorna um array com a prop e seu respectivo valor
Object.assign(animal, {cor: 'marrom'})
console.log(animal)
Object.assign({}, animal, {idade: '4 anos'}) //cria um novo object
console.log(animal) //por isso que aqui não tem a prop idade

const novoObj = { bruh: 'bruh' }
Object.freeze(novoObj) //impede o object de sofrer qualquer alteração
delete novoObj.bruh
console.log(novoObj)

const pessoa = { nome: 'fulano' }
Object.seal(pessoa) //impede somente você criar ou deletar uma propriedade, mas alterações se uma propriedade existem podem ser executadas
pessoa.nome = 'João'
console.log(pessoa)