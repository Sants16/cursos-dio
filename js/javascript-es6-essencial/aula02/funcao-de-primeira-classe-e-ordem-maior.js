// funções que podem ser atribuidas a uma variavel , estrutura de dados (object, array), podem ser passadas como argumentos e retornadas por outras funções

const pessoa = {
    nome: 'João',
    idade: 17,
    nacionalidade: 'Brasileiro',
    mostrarInfos: function() {
        console.log(this.nome, this.idade, this.nacionalidade)
    }
}
pessoa.mostrarInfos()

function exibeHora(){
    const tempoAtual = new Date()
    return `${tempoAtual.getHours()}:${tempoAtual.getMinutes()}`
}

function logFn(fn){
    console.log(fn())
}

const logFnResultado = logFn

logFnResultado(exibeHora)