//* Desestructuring em arrays
const arr = ['Maçã', 'Banana', 'Laranja', ['Melância']]

const maca = arr[0]
const banana = arr[1]
const laranja = arr[2]
const melancia = arr[3][0]

const [maca2, banana2, laranja2, [melancia2]] = ['Maçã', 'Banana', 'Laranja', ['Melância']]

console.log(maca, melancia2);

function soma([a, b]) {
    console.log(a + b)
}

soma([3, 4])

//* Desestructuring em objects
const obj = {
    nome: 'Nome Qualquer',
    props: {
        idade: 17,
        fav_colors: ['black', 'green'] ,
        fav_persons: [
            {
                nomePessoa: 'Juliana',
                importancia: 'Mãe'
            },
            {
                nomePessoa: 'Erlando',
                importancia: 'Pai'
            }
        ]
    }
}

const { nome } = obj
const { nome: nome2 } = obj

const { props: { idade } } = obj
const { 
    props: { 
        fav_colors: [ color1, color2 ], 
        fav_persons: [ 
            { nomePessoa, importancia }, 
            { nomePessoa: nomePessoa2, importancia: importancia2 } 
        ] 
    } 
} = obj
console.log(nome, nome2, idade, color1, color2);
console.log(nomePessoa, importancia, nomePessoa2, importancia2);