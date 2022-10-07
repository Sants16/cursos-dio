//* Com default-function-arguments previnimos possíveis não inserimentos de parametros, como nesse caso da função soma, eu já sabia disso mas sei lá, ta na aula então anotei

function numeroAleatorio() {
    console.log('Número aleatorio gerado')
    return Math.random() * 10
}

const soma = (num1 = numeroAleatorio(), num2 = num1) => {
    console.log(num1 + num2);
}

soma()
soma()