(() => {
    this.name = 'retornando o valor de this com arrow function'
    const getNameArrowFn = () => this.name

    function getNameFn() {
        return this.name
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn,
        getNameFn
    }

    console.log(user.getNameArrowFn()) //com arrow function ele retorna o valor do this.name que foi designado no momento da sua criação, que no caso foi o primeiro
    console.log(user.getNameFn()) //com function "normal" ele retorna o valor de this.name dependendo do contexto em que foi inserido
})()