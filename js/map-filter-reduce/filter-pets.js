const pets = [
    {
        name: 'wilson',
        type: 'dog',
        age: 2
    },
    {
        name: 'frajola',
        type: 'cat',
        age: 3
    },
    {
        name: 'carpado',
        type: 'fish',
        age: 7
    },{
        name: 'apressada',
        type: 'tartaruga',
        age: 9
    },
]

const eMenorQueCinco = (numero) => {
    return numero < 5
}

//aqui a gente desestruturou um atributo do objeto, que no caso foi o age
const filtraIdade = (array) => {
     return array.filter(({ age }) => eMenorQueCinco(age))
}

//filtra todos os pets que tem menos de 5 anos
const newPets = filtraIdade(pets)
console.table(newPets)