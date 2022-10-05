//Ordena os elementos de um array de acordo com a condição

const alunos = [
    {
        nome: 'Inácio',
        nota: 6
    },
    {
        nome: 'Jair',
        nota: 0
    },
    {
        nome: 'Ciro',
        nota: 8
    }
]

const menorAoMaior = alunos.sort((atual, proximo) => atual.nota - proximo.nota)
console.log(menorAoMaior);
const maiorAoMenor = alunos.sort((atual, proximo) => proximo.nota - atual.nota)
console.log(maiorAoMenor);