//THIS é uma palavra reservada de referência de contexto

//nesse caso THIS refere-se ao objeto pessoa
const pessoa = {
    primeiroNome: 'João',
    ultimoNome: 'Victor',
    rg: 12345,
    nomeCompleto: function() {
        console.log(`${this.primeiroNome} ${this.ultimoNome}`);
    },
    pegarRG: function() {
        return this.rg
    }
}

pessoa.nomeCompleto()
console.log(pessoa.pegarRG())