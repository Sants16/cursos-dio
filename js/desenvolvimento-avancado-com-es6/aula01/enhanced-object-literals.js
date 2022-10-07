//* Serve para evitar a repetição de props de mesmo nome como no caso do exemplo abaixo, eu também já sabia disso mas achei bom deixar anotado

const nome = 'nomeUsuario'
const falar = () => 'Oi'
const propName = 'teste'

const user = {
    nome, //nome: nome
    falar,
    tchau() { //? isso eu não sabia, mas segue a mesma estrutura dos metodos em classes
        return 'Tchau'
    },
    [`${propName}Numero`]: 20
}

console.log(user)
console.log(user.nome)
console.log(user.falar());
console.log(user.tchau())