const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Resolvido') : reject('Rejeitado'))
// definimos que a Promise será tratada como resolvida (resolve) quando o número gerado for maior que 0.5 nessas condições a Promise irá retornar a string 'Resolvido', caso o número gerado seja menor que 0.5 a Promise será tratada como rejeitada (reject) e irá retornar a string 'Rejeitado'

coinFlip.then(data => console.log('Primeiro then'))
    .catch((err) => console.log('Primeiro catch')) //so sera executado se o primeiro then der erro
    .then(() => console.log('Segundo then'))
    .catch((err) => console.error('Erro pego do segundo then')) //so sera executado se o segundo then der erro
    .then(() => console.log('Fim')) //vai ser executado sempre pois o catch não para a execução do código