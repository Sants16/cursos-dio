// Criando nossa classe base, já que todo cachorro é um animal
class Animal {
    //no constructor definimos os parametros que iremos receber e definimos os valores dos atributos do nosso objeto gerado pela classe 
    constructor(raça, sexo, quantidadeDePatas) {  //ou seja, aqui o valor do atributo raça do animal será o mesmo do 'raça' passado por parametro, assim como a quantidade de patas
        this.raça = raça
        this.sexo = Symbol(sexo)
        this.quantidadeDePatas = quantidadeDePatas
    }
}

// Criando a classe Cachorro que será uma 'extensão' da classe Animal, sendo assim estamos usando os mesmos atributos e metódos que a classe Animal
class Cachorro extends Animal {
    constructor(nome, morde) {
        super('VIRA-LATA', 'M', 4) //enviando os parametros para a "classe pai", que no caso seria a Animal
        this.nome = nome
        this.morde = morde
    }

    latir() { //criando um metodo
        console.log('Au! au!');
    }
}


const primeiroAnimal = new Cachorro('ASTOLFO', 'NÃO')
console.log(primeiroAnimal);

// Os modificadores de acesso fazem o controle do que é público e do que é privado na nossa classe

class Pessoa {
    #nome = '' //com # definimos a variavel que será privada

    constructor(nomeInicial) {
        this.#nome = nomeInicial
    }

    setNome(nome) {
        this.#nome = nome
    }

    getNome() {
        return this.#nome
    }
}

const p = new Pessoa('João Victor')
console.log(p.getNome());
console.log(p.nome); //não consegue acessar a variavel privada
p.setNome('JoVictor')
console.log(p.getNome());
console.log(p);