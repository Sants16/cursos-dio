const pets = [
    {
        name: 'wilson',
        type: 'dog',
        age: 2,
        weight: 5
    },
    {
        name: 'osvaldo',
        type: 'dog',
        age: 11,
        weight: 6
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

// const totalWeight = pets.reduce((total, pet) => {
//     if(pet.type !== 'dog') return total

//     return total + pet.weight
// }, 0)

// console.log(totalWeight)

const totalWeightDogs = pets
    .filter((pet) => pet.type === 'dog')
    .reduce((total, dog) => {
        return total + dog.weight
    }, 0)

console.log(totalWeightDogs)