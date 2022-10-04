var numeroDaSorte = Math.floor(Math.random() * 6)

switch (numeroDaSorte) {
    case 2:
        console.log('Você teve azar');
        break;
    case 4:
        console.log('Você teve sorte');
        break;
    case 6: 
        console.log('Você teve azar')
        break;
    default:
        console.log('Você morreu')
        break;
}