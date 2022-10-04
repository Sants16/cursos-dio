// a variavel nunca vai mudar e se vc precisa mudar ela vc vai criar uma nova

const usuario = {
    nome: 'João Victor',
    ultimoNome: 'Dos Santos Rocha'
}

const pegarNomeCompleto = ({nome, ultimoNome}) => {
    return {
        ...usuario,
        nomeCompleto: `${nome} ${ultimoNome}`
    }
}

const usuarioComNomeCompleto = pegarNomeCompleto(usuario)

console.table(usuario)
console.table(usuarioComNomeCompleto)

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

const aprovarEstudantes = (
    (listaDeEstudantes) => {
        return listaDeEstudantes.filter( ({nota}) => nota >= 7)
    }
)(alunos)

console.log('Alunos aprovados:')
console.log(aprovarEstudantes)

console.log('Presentes na lista:')
console.log(alunos)