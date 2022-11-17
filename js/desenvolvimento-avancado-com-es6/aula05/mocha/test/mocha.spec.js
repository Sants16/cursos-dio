/*
* | MOCHA também conhecido como Test Runner |
? É uma ferramenta para execurtarmos nossos testes que tem uma abordagem muito descritiva e segue os padrões princípios do BDD, serve para escrevermos nossos testes de uma maneira expressiva dizendo qual funcionalidade e comportamento esperado estamos querendo representar com aquele teste
!PARA INSTALAR: npm i mocha
!PARA RODAR: npm run test
*/

const assert = require('assert')
const Operacao = require('../src/operacao')

const minhaOperacao = new Operacao()

let valor = 0

describe('Testando uma conta de matemática',function() {
    //*hooks
    beforeEach(function() { //?afterEach
        valor = 0
    })

    it('Soma dois números', function() {
        assert.equal(minhaOperacao.soma(valor, 5), 5)
    })

    it('Multiplica dois números', function() { //? it.only faz com que somente esse teste seja realizado e it.skip faz com que o teste seja ignorado
        assert.equal(minhaOperacao.multiplica(5, 5), 25)
    })
})