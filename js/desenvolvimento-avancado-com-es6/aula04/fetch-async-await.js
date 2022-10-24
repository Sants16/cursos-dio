//* UTILIZANDO FETCH
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(resposta => {
    if(resposta.status === 200){
        return resposta.json()
    } else {
        throw new Error('Erro de requisição')
    }
})
.then(dados => {
    console.log(dados);
})


//* ASYNC-AWAIT
const asyncTimer = () => new Promise((resolvida, rejeitada) => {
    setTimeout(() => {
        resolvida('Promise resolvida')
    }, 1000)
})

const funcaoAsync = async () => {
    //* o await espera que outras promises sejam resolvidas
    const data = await Promise.all(
        [asyncTimer(), 
            fetch('https://jsonplaceholder.typicode.com/comments/1')
            .then(data => data.json())]
    )
    return data
}

funcaoAsync().then(data => {
    console.log(data)
}).catch(console.log)