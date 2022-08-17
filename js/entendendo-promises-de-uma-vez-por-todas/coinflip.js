const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Resolvido') : reject('Rejeitado'))
// definimos que a Promise será tratada como resolvida (resolve) quando o número gerado for maior que 0.5 nessas condições a Promise irá retornar a string 'Resolvido', caso o número gerado seja menor que 0.5 a Promise será tratada como rejeitada (reject) e irá retornar a string 'Rejeitado'

coinFlip //aqui estamos manipulando os estados da Promise
    .then(data => console.log(data, '1')) //se o estado da Promise for resolve iremos pegar a string retornada e exibila no console junto com o número 1
    .then(() => console.log('Fim')) //apos o primeiro .then() ser executado iremos exibir 'Fim' no console
    .catch(err => console.log(err, 'Erro 1')) //se o estado da Promise for reject iremso pegar a string retornada e exibila no console junto com a mensagem 'Erro 1'