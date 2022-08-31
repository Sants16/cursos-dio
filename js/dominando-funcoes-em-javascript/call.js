//Serve para manipular o valor do this assim como o apply

const pessoa = {
    nome: 'Raissa',
}

const animal = {
    nome: 'Tampinha'
}

function getSomething(){
    console.log(this.nome)
}

getSomething.call(pessoa)
getSomething.call(animal)

//É possível passar parâmetros para essa função separando-os por vírgulas
const obj = {
    num1: 3,
    num2: 2,
}

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b)
}

soma.call(obj, 2, 5)