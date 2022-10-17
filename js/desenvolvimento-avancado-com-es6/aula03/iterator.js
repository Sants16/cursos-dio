//* O iterador é uma interface para consumirmos, passo a passo, uma lista ou estrutura de dados
const arr = [1, 2, 3, 4, 5]
const iterator = arr[Symbol.iterator]()

while(true) {
    const { value, done } = iterator.next()
    console.log(value === undefined ? 'Acabou' : value)

    if(done) break;
}

// console.log(iterator.next()) //? a cada novo .next() o iterator muda pro proximo item do array
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next()) //? retorna 'done: true', dizendo que a lista de dados a qual ele estava iterando já foi completamente percorrida

//* Well knows symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag