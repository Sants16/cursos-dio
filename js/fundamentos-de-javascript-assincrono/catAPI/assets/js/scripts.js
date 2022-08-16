const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; //url de acesso da nossa api
const catBtn = document.querySelector('#change-cat') //referencia o botão que ira mudar a imagem dos gatos no html
const catImg = document.querySelector('#cat') //referencia o tag img que ira exibir a imagem dos gatos no html

const getCats = async () => { //função assincrona que ira esperar a resposta da promise do metodo fetch
    try { //tenta executar o seguinte código:
        const data = await fetch(BASE_URL, { mode: "no-cors", }) //define o 'data' como o resultado da requisição com a BASE_URL
        const json = await data.json() //converte os dados recebidos para .json e os armazena dentro da const json
        return json.webpurl //retorna o atributo webpurl do object json
    }
    catch(error) { //caso der erro ele sera exibido no console.log
        console.log(error)
    }
}

const loadImg = async () => { //função assíncrona que espera a resposta da função assincrona getCats
    catImg.src = await getCats() //define a resposta do getCats como o source da tag img do html
}

catBtn.addEventListener('click', loadImg) //adiciona um listener para que toda vez que o button for clicado a função loadImg seja executada

loadImg() //executa a função no html para que o projeto ja inicie com uma imagem de gato