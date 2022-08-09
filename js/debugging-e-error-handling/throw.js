function verificarPalindromo(string){
    if(!string) return "String inválida";

    return string === string.split('').reverse().join('')
}

function verificarPalindromoThrow(string){
    if(!string) throw 'String inválida'

    return string === string.split('').reverse().join('')
}

console.log(verificarPalindromo('')) //com o return caso a string seja inválida será retornado simplesmente a string "String inválida", sem tratar o problema de erro como um erro realmente
console.log(verificarPalindromoThrow('')) //com o throw tratamos a situação de uma string inválida como realmente um erro, com os comportamentos padrões de um erro no console, tela vermelha e etc.