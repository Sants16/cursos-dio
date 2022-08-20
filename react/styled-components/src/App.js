import { ThemeProvider } from 'styled-components';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import logo from './logo.svg';
import './App.css';
import * as S from './styles' //dessa forma estamos importando todos os estilos presentes no styles.js e armazenando eles em um objeto chamado S

function App() {

  const bruh = [1,2,3,4,5]

  return (
    <ThemeProvider theme={bruh.length === 4 ? lightTheme : darkTheme}>
      <S.Container> {/* aqui estamos acessando o objeto S o qual armazenamos todos os estilos do arquivo styles.js e pegando especificamente o estilo do 'Container' */}
        <S.Header area='aviso'> {/* passando props para o styled-component */}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
          <S.Botaozin sucesso>
            Sucesso
          </S.Botaozin>

          <S.Botaozin error>
            Error
          </S.Botaozin>

        </S.Header>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;