const coinFlip = (n) => new Promise((resolve, reject) => n > 0 ? resolve('Resolvido') /*true*/ : reject('Rejeitado') /*false*/)

console.log('Begin')

const promiseArray = []
for(let i = 0; i <= 4; i++) promiseArray[i] = coinFlip(Math.random()) //para cada promise sera gerado um novo numero aleatorio

//esse bloco de codigo so sera executado se todas as promises forem resolvidas:
Promise.all(promiseArray).then(console.log).then(() => console.log('End')) //faz a mesma coisa com todas as promises, porém se uma delas for rejeitado será retornado um throw em algum erro

//Colocando o n > 0 todas as promises sempre serão resolvidas mas caso coloquemos n > 0.5 como era anteriormente podemos ver que quando uma das promises for rejeitada o código para de ser executado