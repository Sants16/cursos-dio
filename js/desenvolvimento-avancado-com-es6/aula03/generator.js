//* Generators são funções que pausam e despausam retornando valores

function* hello(){
    console.log('Olá');
    yield 1 //? pausa a execução da função e o número define o value

    console.log('Generator');
    const value = yield 2

    console.log(value);
}

const generatorInicial = hello()

console.log(generatorInicial.next());
console.log(generatorInicial.next());
console.log(generatorInicial.next('Valor vindo de fora'));


function* numerosNaturais() {
    let numero = 0
    while (true) {
        yield numero
        numero++
    }
}

const generatorNumeros = numerosNaturais()

console.log(generatorNumeros.next());
console.log(generatorNumeros.next());
console.log(generatorNumeros.next());
console.log(generatorNumeros.next());
console.log(generatorNumeros.next());
console.log(generatorNumeros.next());