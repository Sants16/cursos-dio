const myArray = [22, 33, 44, 7, 55, 66, 30, 8]

function filtrarPares(array){
    return array.filter((item) => item % 2 == 0)
}

console.log(filtrarPares(myArray))