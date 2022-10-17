//* Symbol é uma maneira de criar um identificador único

const idUnico = Symbol( Math.floor( Math.random() * 10 ) )
console.log(idUnico);

const meuSymbol = Symbol('Saudação')

const obj = {
    [meuSymbol]: 'Oi'
}

console.log( Object.keys(obj) ) //? o Symbol não aparece
console.log( Object.getOwnPropertySymbols(obj) )