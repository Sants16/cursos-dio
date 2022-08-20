import styled from 'styled-components'
import { buttonStyleNormal } from './mixins';

export const Botao = styled.button`
    font-size: 20px;
    font-weight: 600;
    font-family: Verdana, sans-serif;
    padding: 5px;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 2px black;

    ${props => props.sucesso && 
        buttonStyleNormal(props.theme.colors.secondaryColor, props.theme.colors.white)
    }

    ${props => props.error &&
        buttonStyleNormal(props.theme.colors.red, props.theme.colors.white)
    }
`;