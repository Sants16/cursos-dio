const pets = [
    {
        name: 'wilson',
        type: 'dog',
        age: 2,
        weight: 5
    },
    {
        name: 'frajola',
        type: 'cat',
        age: 3,
        weight: 2
    },
    {
        name: 'carpado',
        type: 'fish',
        age: 7,
        weight: 0.5
    },
    {
        name: 'apressada',
        type: 'tartaruga',
        age: 9,
        weight: 8
    },
]

//criando função dinamicamente via string
const pegarNames = Function('array', 'return array.map(({name}) => name.toUpperCase() )')

const petsNames = pegarNames(pets)
console.log(petsNames)
pets.map((pet) => pet.name)