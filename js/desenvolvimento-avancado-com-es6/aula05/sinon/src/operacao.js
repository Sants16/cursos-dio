class Operacao{
    soma(num1, num2) {
        return num1 + num2
    }

    multiplica(num1, num2) {
        return num1 * num2
    }

    printSum(req, res, a, b) {
        res.load('index', a + b)
    }
}

module.exports = Operacao