/*
* | MOCHA também conhecido como Test Runner |
? É uma ferramenta para execurtarmos nossos testes que tem uma abordagem muito descritiva e segue os padrões princípios do BDD, serve para escrevermos nossos testes de uma maneira expressiva dizendo qual funcionalidade e comportamento esperado estamos querendo representar com aquele teste
!PARA INSTALAR: npm i mocha
!PARA RODAR: npm run test
*/

const assert = require('assert')
const Operacao = require('../src/operacao')
const expect = require('chai').expect
const sinon = require('sinon')

const minhaOperacao = new Operacao()

let valor = 0

describe('Testando uma conta de matemática',function() {
    //* it.only ira executar somente esse teste

    it.only('Calls res with sum and index values', function() {
        //? Cria um "espião" para verificar se a função foi chamada ou não

        const req = {}
        const res = {
            load: sinon.spy()
        }

        minhaOperacao.printSum(req, res, 5, 5)

        expect(res.load.calledOnce).to.be.true
        expect(res.load.args[0][0]).to.equal('index') //? verifica se o primeiro argumento da função é igual a 'index'
        expect(res.load.args[0][1]).to.equal(10) //? verifica se o segundo argumento da função é igual a soma dos numeros, 5 + 5 = 10
    })
})