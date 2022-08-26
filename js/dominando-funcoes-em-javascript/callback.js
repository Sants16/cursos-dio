//função passada como argumento para outra

const calc = (operacao, num1, num2) => {
    return operacao(num1, num2)
}

const soma = (num1, num2) => {
    return num1 + num2
}

const sub = (num1, num2) => {
    return num1 - num2
}

const resultadoSoma = calc(soma, 1 , 2)
const resultadoSubtracao = calc(sub, 1, 2)

console.log(resultadoSoma, resultadoSubtracao)