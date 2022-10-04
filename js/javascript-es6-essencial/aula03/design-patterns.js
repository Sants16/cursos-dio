/* 

Design Patterns ou padrões de projetos são soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado.

FORMATO DE UM PATTERN:
* Nome
* Exemplo - um exemplo de sua utilização
* Contexto - o contexto em que pode ser aplicado
* Problema - o problema o qual o pattern resolve
* Solução - a forma que o pattern resolve o problema

TIPOS DE PATTERNS:
* Criação - os padrões de criação são aqueles que abstraem e/ou adiam o processo de criação dos objetos, eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados

* Estruturais - os padrões estruturais se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores

* Comportamentais - os padrões de comportamento se concentram nos algoritmos e atribuições de responsabilidades entre os objetos, eles não descrevem apenas padrões de objetos ou de classes mas também os padrões de comunicação entre os objetos

PATTERNS MAIS UTILIZADOS:
* Factory
* Singleton
* Decorator
* Observer
* Module

*/

// Factory - Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o *new*, são consideradas funções Factory(fábrica)

// NÃO É FACTORY
function usuarioFake() {
    this.name = 'Jão'
    this.ultimoNome = 'Victor'
}
const user = new usuarioFake()
console.log(user);

// É FACTORY
function usuario(nome, ultimoNome) {
    return {
        nome, //nome: nome
        ultimoNome, //ultimoNome: ultimoNome
        nomeCompleto: function() {
            return `${this.nome} ${this.ultimoNome}`
        }
    }
}

const userFactory = usuario('João', 'Victor')
console.log(userFactory);

// Singleton - O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la

function Pessoa() {
    if (!Pessoa.cadastro) {
        Pessoa.cadastro = this
    }
    
    return Pessoa.cadastro
}

const p = Pessoa.call({ nome: 'João', idade: 17, sexo: Symbol('M') })
console.log(p);
const p2 = Pessoa.call({ nome: 'Jão', idade: 16, sexo: Symbol('F') })
console.log(p2);

// Decorator - Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente

let logginUsuario = false

function seAutenticado(função) {
    return logginUsuario && função()
}

function informar(message) {
    console.log(message);
}

console.log(seAutenticado(() => informar('usuário está logado')));
logginUsuario = true
console.log(seAutenticado(() => informar('usuário está logado')));

// Observer - É um pattern muito popular em aplicações javascript. A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado

class Observable {
    constructor() {
        this.observers = []
    }

    subscribe(função) {
        this.observers.push(função)
    }

    unsubscribe(função) {
        this.observers = this.observers.filter(subscriber => subscriber !== função)
    }

    notify(data) {
        this.observers.forEach(função => função(data))
    }
}

const observer = new Observable

const logData1 = data => console.log(`Subscriber 1: ${data}`);
const logData2 = data => console.log(`Subscriber 2: ${data}`);

observer.subscribe(logData1)
observer.subscribe(logData2)

observer.notify('Primeira notificação')

observer.unsubscribe(logData2)

observer.notify('Segunda notificação')

// Module - É um pattern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais

const { getName, setName } = require('./module.js')

console.log(getName());
setName('João')
console.log(getName());