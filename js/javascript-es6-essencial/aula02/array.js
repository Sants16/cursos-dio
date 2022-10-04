const usuarios = ['João', 'Victor', 'Rocha']

const generos = {
    MASCULINO: Symbol('M'),
    FEMININO: Symbol('F'),
    NAO_BINARIO: Symbol('NB')
}

const pessoas = [
    {
        nome: 'João',
        idade: 17,
        genero: generos.MASCULINO
    },
    {
        nome: 'Victor',
        idade: 18,
        genero: generos.MASCULINO
    },
    {
        nome: 'Rocha',
        idade: 19,
        genero: generos.NAO_BINARIO
    }
]

pessoas.forEach((pessoa, index) => {
    console.log(`Nome: ${pessoa.nome}, genêro: ${String(pessoa.genero)}, posição: ${index}`)
})

const homens = pessoas.filter(({genero}) => genero === generos.MASCULINO )
console.table(homens)

const pessoasCadastradas = pessoas.map(pessoa => {
    pessoa.cadastrado = true
    return pessoa
})
console.table(pessoasCadastradas)

// transforma o array em outro tipo de dado
const idadesDeTodos = pessoas.reduce((idadeTotal, pessoa) => { //como primeiro parametro precisamos definir a variavel que iremos retornar que no caso será a idadeTotal
    idadeTotal += pessoa.idade // 0 = 0 + idade da pessoa
    return idadeTotal //após percorrer todos os itens do array o valor é retornado
}, 0)
console.log(idadesDeTodos)

const nomesJuntos = pessoas.reduce((nomeDeTodosJuntos, pessoa) => {
    nomeDeTodosJuntos += pessoa.nome
    return nomeDeTodosJuntos
}, '')
console.log(nomesJuntos)

// encadeando operações
const somaDasIdadesImpar = pessoas.map(({idade}) => idade + 10) //somar a idade de todos os usuarios + 10
            .filter((idade) => idade % 2 !== 0) //filtrar apenas os que tem idade impar
            .reduce((idade, pessoaIdade) => { //somar a idade dos que tem idade impar e retornar
                idade += pessoaIdade
                return idade
            }, 0)
console.log(somaDasIdadesImpar)