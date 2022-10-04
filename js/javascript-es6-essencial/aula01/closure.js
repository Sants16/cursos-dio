// Uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.
//Uma closure trata-se de um tipo especial de objeto que combina duas coisas: a função e o ambiente onde a função foi criada. Este ambiente consiste de quaisquer variáveis que estavam no escopo naquele momento em que a função foi criada.

function init() {
    var name = "Mozilla"; // name é uma variável local criada pelo init
    function displayName() {
      // displayName() é a função interna, uma closure
      console.log(name); // usa a variável declarada na função pai
    }
    displayName();
  }
  init();
  