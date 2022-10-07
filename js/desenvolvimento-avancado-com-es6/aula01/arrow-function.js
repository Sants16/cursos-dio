//* O contexto de uma arrow function é o mesmo da função em que foi criada

const pessoa = {
    conversar: function(nomePessoa) {
        console.log('Olá');

        //? this = pessoa
        setTimeout(() => {
            console.log(this.falarNome(nomePessoa));
        }, 2000)
    },

    falarNome: function(nome) { return `Meu nome é ${nome}` }
}

pessoa.conversar('João')