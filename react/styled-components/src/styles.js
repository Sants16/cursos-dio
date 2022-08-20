//Aqui estamos criando um arquivo para a configuração do styled-components separado do elemento que ele será utilizado, como se fosse um arquivo .css mesmo
//Usamos export nas consts para podermos importalas no arquivo que serão utilizadasn 
import styled from 'styled-components'

//EXTENDENDO COMPONENTE: Alterando o Css de um componente que já vem com um estilo configurado de outro lugar o qual não temos acesso, como por exemplo do material ou bootstrap
import { Button } from './components/Button';

const x = {
    "importante": 'blue',
    "aviso": 'red',
    "conteudo": 'tomate' 
}

export const Container = styled.div``;

// ${props => props.nomeDaProps} dessa forma conseguimos fazer estilos ainda mais dinamico para o nosso styled-component
export const Header = styled.header`
    background-color: ${props => props.theme.colors.primaryColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${props => x[props.area]};
`;

export const Botaozin = styled(Button)`
    //background: orange
`;