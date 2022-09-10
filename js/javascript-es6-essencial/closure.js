// Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.

function init() {
    var name = "Mozilla"; // name é uma variável local criada pelo init
    function displayName() {
      // displayName() é a função interna, uma closure
      console.log(name); // usa a variável declarada na função pai
    }
    displayName();
  }
  init();
  