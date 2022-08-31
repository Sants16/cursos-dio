const alunos = [
    {
        nome: 'João',
        nota: 5
    },
    {
        nome: 'Pedro',
        nota: 10
    },
    {
        nome: 'Isaac',
        nota: 6
    }
]

function alunosAprovados(array, media) {
    let aprovados = []
    let reprovados = []
    for (aluno of array){

        const {nota, nome} = aluno

        if(nota >= media){
            aprovados.push(nome)
        } else {
            reprovados.push(nome)
        }
    }
    console.log(`Aprovados: ${aprovados}`)
    console.log(`Reprovados: ${reprovados}`)
}

alunosAprovados(alunos, 7)