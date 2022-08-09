function verificarPalindromo(string){
    if(!string) throw 'String inválida'

    return string === string.split('').reverse().join('')
}

function tryCatchExemplo(string){
    try{
        verificarPalindromo(string) //verifica o código e se ele tiver algum tipo de erro ele sera tratado no catch
    }
    catch(e){
        throw e //trata o erro derivado da função
    }
    finally{
        console.log(`A string enviada foi: ${string}`)
    }
}

tryCatchExemplo('')