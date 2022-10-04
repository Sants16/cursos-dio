
//escopo global

/*
{
    escopo de bloco
}

function fn(){
    escopo de função
}
*/

//var n respeita o escopo de bloco, so global e de função
var teste = 'exemplo'

function fnVar(){
    //var teste
    console.log(teste)
        if(true){
            var teste = 'valor dentro do if' //teste = 'valor dentro do if'
            console.log(`Valor dentro do If: '${teste}'`)
        }
    console.log(`Após a execução: '${teste}'`)
}
fnVar()

//let respeita o escopo de bloco
function fnLet() {
    let teste = 'valor de função'
    console.log(`Valor dentro da função: '${teste}'`)
        if(true){
            let teste = 'valor de if'
            console.log(`Valor dentro de if: '${teste}'`)
        }
    console.log(`Após a execução do if: '${teste}'`)
}
fnLet()

//const
const pessoas = ['João', 'Eduardo', 'Andrei', 'Joás']

pessoas.push('Laranjo')
//['João', 'Eduardo', 'Andrei', 'Joás', 'Laranjo']

pessoas.shift()
//['Eduardo', 'Andrei', 'Joás', 'Laranjo']

pessoas[1] = 'Zimbuto'
//['Eduardo', 'Zimbuto', 'Joás', 'Laranjo']

console.log(pessoas)