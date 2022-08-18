const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'

const readFileAsync = promisify(fs.readFile)

function read(index) {
    return readFileAsync(path.resolve(basePath, `s${index}.txt`), { encoding: 'utf-8' })
}

console.log('Begin')
const promiseArray = []
for(let i = 1; i <= 4; i++) promiseArray[i - 1] = read(i)
Promise.all(promiseArray).then(arr => console.log(arr.join('\n'))).then(() => console.log('End'))