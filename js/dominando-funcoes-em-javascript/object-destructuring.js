//entre as chaves {}, filtramos apenas os dados que nos interessam e iremos utilizar

const musica = {
    id: 1,
    cantor: 'Franky Ocean',
    musica: {
        nome: 'País do Futebol',
        duracao: 2.15
    },
    album: {
        nome: 'RoundAbout',
        ranking: 3
    }
}

function mostrarCantor({cantor}){
    console.log(`O nome do cantor é ${cantor}`)
}

function infoMusc({musica: {nome, duracao}}){
    console.log(`A música que está tocando é ${nome} com duração de ${duracao} minutos`)
}

function infoAlbum({album: {nome: nomeAlbum, ranking: rankingAlbum}}){
    console.log(`Essa música é do álbum ${nomeAlbum} que está no ${rankingAlbum}° lugar dos álbuns mais ouvidos`)
}

mostrarCantor(musica)
infoMusc(musica)
infoAlbum(musica)