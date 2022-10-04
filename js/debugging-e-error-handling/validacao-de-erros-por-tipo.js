//o objetivo é que a função recebe um array e retorna ele caso o seu tamanho corresponda ao número enviado como parâmetros na função. Caso contrário um  erro será lançado

function validaArray(arr, num){
   try{

    // se os parametros de arr e num não forem enviados será lançado um error do tipo ReferenceError
    if(!arr && !num) throw new ReferenceError('Envie os parâmetros')

    // caso o parametro arr não seja um objeto será exibido um error do tipo TypeError
    if(typeof arr !== 'object') throw new TypeError('O array precisa ser do tipo object')

    //se o parametro num não seja do tipo number será exibido um error do tipo TypeError
    if(typeof num !== 'number') throw new TypeError('O num precisa ser do tipo number')

    //caso o tamanho de arr seja diferente de num será lançada um error do tipo RangeError
    if(arr.length !== num) throw new RangeError('Tamanho inválido')

    return arr

   }
   catch(e){

        if(e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!')
            console.log(e.name)
            console.log(e.stack)
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError!')
            console.log(e.name)
            console.log(e.stack)
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError!')
            console.log(e.name)
            console.log(e.stack)
            console.log(e.message)
        } else {
            console.log('Tipo de erro não esperado:' + e)
        }
        
    }
}

console.log(validaArray([1, 2, 3, 4], 4))