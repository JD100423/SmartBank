import React, {useState} from 'react';
import Header from "../src/Componentes/Header"
import Container from "../src/Componentes/Container"
import GlobalStyle from './globalstyle';
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaOscuro } from './Componentes/UI/temas';
import { BtnTema } from './Componentes/UI';
import SwitcherTema from './Componentes/SwitcherTema';

function App() {
  const [tema, setTema] = useState(true)

  const toggleTema = () => {
    setTema((tema) => !tema)
  }
  return (
    <ThemeProvider theme={  tema ? temaClaro : temaOscuro }>
    <GlobalStyle />
    <BtnTema onClick={toggleTema}>
      <SwitcherTema tema={tema}/>
    </BtnTema>
    <Header />
    <Container />
    </ThemeProvider>
  );
}

export default App;
