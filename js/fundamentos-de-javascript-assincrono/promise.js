//ESTRUTURA
const myPromise = new Promise((resolve, reject) => {
    //depois de 2 segundos que a promise for recebida quando ela resolvida será exibido no console 'Resolvida!'
    setTimeout(() => {
        resolve('Resolvida!')
    }, 2000)
})

//MANIPULAÇÃO
await myPromise
            .then((result) => `${result} passando pelo then`) //.then() é o que fazemos depois da promise ser resolvida
            .then((result) => `${result} e agora acabou!`)
            .catch((err) => console.log(err.message))
//Após 2 segundos, irá retorna "Resolvida passando pelo then e agora acabou"

//TESTA O EXEMPLO NO CONSOLE DO NAVEGADOR