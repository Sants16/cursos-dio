//Serve para manipular o valor de this assim como o call, a diferença entre os dois é a maneira como passamos os parâmetros

const pessoa = {
    nome: 'Raissa',
}

const animal = {
    nome: 'Tampinha'
}

function getSomething(){
    console.log(this.nome)
}

getSomething.apply(pessoa)
getSomething.apply(animal)

//passando parâmetros com o apply

const obj = {
    num1: 3,
    num2: 2,
}

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b)
}

soma.apply(obj, [2, 5])