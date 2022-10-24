//* É exclusivo do node e para utilizalo primeiro importamos o modulo events do node

const EventEmitter = require('events')

class Usuarios extends EventEmitter {
    usuarioLogado(data) {
        this.emit('Usuário logado', data)
    }
}

const usuario = new Usuarios()

usuario.on('Usuário logado', data => {
    console.log(data)
})
usuario.usuarioLogado({nome: 'João Victor'})

//* Irá exibir apenas o primeiro nome
// usuario.once('Usuário logado', data => {
//     console.log(data)
// })
// usuario.usuarioLogado({nome: 'Pedro'})
// usuario.usuarioLogado({nome: 'Gustavo'})