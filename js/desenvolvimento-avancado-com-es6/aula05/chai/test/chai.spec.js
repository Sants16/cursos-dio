/*
* | MOCHA também conhecido como Test Runner |
? É uma ferramenta para execurtarmos nossos testes que tem uma abordagem muito descritiva e segue os padrões princípios do BDD, serve para escrevermos nossos testes de uma maneira expressiva dizendo qual funcionalidade e comportamento esperado estamos querendo representar com aquele teste
!PARA INSTALAR: npm i mocha
!PARA RODAR: npm run test
*/

const assert = require('assert')
const Operacao = require('../src/operacao')
const expect = require('chai').expect

const minhaOperacao = new Operacao()

let valor = 0

describe('Testando uma conta de matemática',function() {
    it('Soma dois números', function() {
        expect(minhaOperacao.soma(valor, 5)).to.equal(5)
    })

    it('Multiplica dois números', function() {
        const obj = {
            nome: 'Celso'
        }

        const obj2 = {
            nome: 'Celso'
        }

        expect(obj)
            .to.have.property('nome')
            .equal('Celso')

        expect(obj)
            .to.deep.equal(obj2) //? verifica se obj é igual a obj2

        expect(minhaOperacao.multiplica(5, 5))
            .to.equal(25)
    })
})