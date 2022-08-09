//new Error(message, fileName, lineNumber) os parâmetros são opcionais

// const MeuErro = new Error('Mensagem Inválida')
// throw MeuErro

const MeuErroName = new Error('Mensagem Inválida')
MeuErroName.name = 'InvalidMessage'
throw MeuErroName