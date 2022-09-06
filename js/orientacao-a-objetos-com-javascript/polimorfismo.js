const cachorro = {som: 'auau'}
const gato = {som: 'miau'}
const vaca = {som: 'muu'}

const fazerSom = (
    ({som}) => {
        console.log(som)
    }
)(gato)