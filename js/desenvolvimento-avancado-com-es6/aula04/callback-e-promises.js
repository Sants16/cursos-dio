//* Usamos funções de callback para executar algo após uma determinada tarefa assíncrona ter sido executada

const fazAlgo = () =>
    new Promise((promiseResolvida, promiseRejeitada) => {
        setTimeout(() => {
            // faz alguma coisa
            promiseResolvida('Deu tudo certo com a promise 1')
        }, 1000)
    })

const fazOutraCoisa = () =>
    new Promise((promiseResolvida, promiseRejeitada) => {
        setTimeout(() => {
            // faz alguma coisa
            promiseResolvida('Deu tudo certo com a promise 2')
        }, 1000)
    })


//* Executa as promises de forma sequencial
fazAlgo().then(resultado => {
    console.log(`Primeira promise: ${resultado}`);
    return fazOutraCoisa()
}).then(resultado => console.log(`Segunda promise: ${resultado}`))
.catch(console.log)

//* Executa as promises em paralelo/ao mesmo tempo
Promise.all([fazAlgo(), fazOutraCoisa()]).then(resultado => console.log(`Executa as promises em paralelo: ${resultado[0]} - ${resultado[1]}`)).catch(console.log)

//* Retorna a promise que for resolvida primeiro
Promise.race([fazAlgo(), fazOutraCoisa()]).then(resultado => console.log(`Essa promise foi resolvida primeiro: ${resultado}`)).catch(console.log)