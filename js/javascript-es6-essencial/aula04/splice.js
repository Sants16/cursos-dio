// altera um array adicionando novos elementos enquanto remove elementos antigos

const arr = [1, 2, 3, 4, 5]

arr.splice(2)
// [3, 4, 5] -- remove os itens apartir da posição 2
console.log(arr);

arr.splice(0, 0, 'primeiro')
// apartir da posição 0, remova 0 itens e adicione 'primeiro'
console.log(arr);

const frutas = ['maça', 'pera', 'manga']
frutas.splice(2, 1, 'melancia', 'acerola')
console.log(frutas);