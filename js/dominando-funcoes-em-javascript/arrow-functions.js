//Arrow function NÂO faz hoisting

const helloWorld = () => console.log('Hello World')
helloWorld()

const soma = (a, b) => console.log(a + b);
soma(1,1)

const exibeNumero = num => console.log(num)
exibeNumero(5)

const exibeNome = (
                    nome => console.log(nome) 
                  )('João')

//RESTRIÇÕES:
//THIS sempre será o objeto global. Métodos para modificar seu valor não irão funcionar
//Não existe o objeto 'arguments'
//O construtor (ex: new MeuObjeto()) também não pode ser utilizado