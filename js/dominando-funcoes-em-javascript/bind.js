//clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro

const retornaNomes = function() {
    console.log(this.nome)
}

let retornaJoao = retornaNomes.bind({ nome: 'João' })

retornaJoao()