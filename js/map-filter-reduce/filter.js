//É como se colocassemos todo o array dentro de um filtro e apenas os itens que correspondessem a determinada condição fossem retornados ao novo array que será criado
const array = [1, 2, 3, 4, 5, 6]
array.filter((num) => num % 2 === 0) //assim iremos filtrar apenas os numeros pares
console.log(array.filter((num) => num % 2 === 0))

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi']
frutas.filter((fruta) => fruta.includes('maçã')) //pega todas as frutas que possuem 'maçã' no nome
console.log(frutas.filter((fruta) => fruta.includes('maçã')))

// o .includes() é um método de string que serve para pegar uma string que possue outra string, n sei explcicar direito pq acabei de ver ele, mas acho que se enquadra em algo assim:
const nomes = ['Pedro', 'João Victor', 'Henrique João', 'João' ]
nomes.filter((nome) => nome.includes('João')) //dessa forma somente os nomes que possuem 'João' serão filtrados
console.log(nomes.filter((nome) => nome.includes('João')))