const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Resolvido') : reject('Rejeitado'))
// definimos que a Promise será tratada como resolvida (resolve) quando o número gerado for maior que 0.5 nessas condições a Promise irá retornar a string 'Resolvido', caso o número gerado seja menor que 0.5 a Promise será tratada como rejeitada (reject) e irá retornar a string 'Rejeitado'

// se a promise for resolvida esse bloco de código será executado:
coinFlip
    .then(data => console.log('Then foi executado'))
    .then(() => console.log('Resultado'))
    .then(() => console.log('Fim'))

// se a promise for rejeitada esse bloco de código será executado:
coinFlip
    .catch(() => { throw new Error('O catch foi executado') })
    .catch((err) => console.error('O erro foi pego'))