//looop entre propriedades enumeráveis de um objeto

function forInExemplo(obj){ //para cada propriedade do objeto recebido exiba no console
    for(prop in obj){ //prop é o nome que foi dado mas podia ser qualquer nome
        console.log(`${prop} é ${obj[prop]}`) //object[nome] / object[idade] / objject[cidade]
    }
}

const object = {
    nome: 'João Victor',
    idade: 17,
    cidade: 'Paulínia'
}

forInExemplo(object)