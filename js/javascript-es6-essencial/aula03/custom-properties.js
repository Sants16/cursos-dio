function Pessoa(customProperties) {
    return {
        nome: 'João', //definindo o valor padrão de nome
        ultimoNome: 'Rocha', //definindo o valor padrão de ultimoNome
        ...customProperties //aceita novas propriedades definidas pelo usuário
    }
}

const p = Pessoa({nome: 'Custom Name', idade: 17}) //adicionando a propriedade 'idade', a qual não existia antes
console.log(p);