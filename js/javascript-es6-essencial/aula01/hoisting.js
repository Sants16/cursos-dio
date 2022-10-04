// comportamento que ocorre em declarações de variaveis e funções, as variaveis e funções declaradas são elevadas no escopo em que estão
//hoisting de variavel so eleva a criação da variavel e não sua atribuição
//hoisting de função é lançada ao topo do escopo como um todo

//COM VARIAVEL
function fn(){
    console.log(text) //a var existe mas ainda não foi definida
    var text = 'hoisting de variavel' //cria a var e atribui valor a ela
    console.log(text)
}
fn()

//COM FUNCAO
function fn1(){
    log('hoisting de função') //faz a chamada da função ainda não criada e passando parametros a ela

    function log(value){ //declara a sfunção
        console.log(value)
    }
}
fn1() //isso é uma má pratica, o certo é declarar a função antes de utilizala