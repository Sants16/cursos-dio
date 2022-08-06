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

const totalWeight = pets.reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeight)