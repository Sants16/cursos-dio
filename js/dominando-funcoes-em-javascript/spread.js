//forma de lidar separadamente com elementos
//o que era parte de um array se torna um elemento independente

const somar = (x = 0, y = 0, z = 0) => {
    return x + y + z
}

const nums = [1, 2, 3]

console.log(somar(...nums)) //todos os elementos do array nums são passados como parametros de forma respectiva
//x = 1; y = 2; z = 3;

//se colocassemos apenas o array nums como parametro não conseguiriamos realizar o que queremos que é somar todos os itens de array, por conta disso usamos o spread

console.log(somar(nums))
//1, 2, 300 mas não é o numero 300 realmente, é apenas o numero 3 que é o ultimo item do array do lado de dois zeros