//currying é a tecnica de transformar uma função de n parametros em apenas uma que recebe um parametro, sendo assim para cada parametro retornando uma nova função

//SEM CURRYING
function somaSemCurrying(a, b){
    return a + b
}
somaSemCurrying(2, 2)
somaSemCurrying(2, 3)
somaSemCurrying(2, 4)
//assim estamos repetindo um parametro que queremos que fosse padrão

//COM CURRYING
function somaComCurrying(a){
    return function(b){
        return a + b
    }
}

const somaCom2 = somaComCurrying(2) //memorizando o primeiro parametro, a sempre sera igual 2, assim padronizando seu valor para as outras funções

console.log(somaCom2(3)) // a + b => 2 + 3