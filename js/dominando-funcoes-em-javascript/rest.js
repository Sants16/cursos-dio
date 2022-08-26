//combina os argumentos em um array
//o que era um elemento independente se torna parte de um array

function itensCesta(...cesta){
    console.log(`Sua cesta possue ${cesta.length} ${cesta.length >= 2 ? 'itens' : 'item'}`)
}

itensCesta('alface', 'maça', 'banana') //3 itens
itensCesta('ovo', 'carne') //2
itensCesta('pudim')

//o rest pega todos os argumentos passados para a função e os trasnforma em um array, então em uma chamada itensCesta('pão', 'manteiga') seria transformado em ['pão', 'manteiga']