const arr = [1, 2, 3, 4]

console.log(arr.flatMap(valor => [valor * 2]));
console.log(arr.flatMap(valor => [[valor * 2]]));