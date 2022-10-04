console.log(typeof +'3') //força a converção para number
console.log(-3 > 3 ? '-3 é maior que 3' : '-3 é menor que 3')
console.log(+true)
console.log(+false)
console.log(-true)

console.log(2 * (3+2)) //isso quer dizer que a soma deve ser executada primeiro que a multiplicação
console.log(2 * 3 + 2)

const meucarro = {
    marca: 'honda', 
    modelo: 'accord', 
    ano: 1998
}

console.log('marca' in meucarro) //true, o atributo marca existe no objeto meucarro

const dia = new Date()
if(dia instanceof Date) console.log(dia)