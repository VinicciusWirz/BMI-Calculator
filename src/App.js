import styled from "styled-components";
import IMC from "./components/IMC/IMC";
import Inputs from "./components/Inputs/Inputs";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import Reset from "./GlobalStyles/Reset";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Main>
        <Inputs />
        <IMC />
      </Main>
    </>
  );
}

const Main = styled.main`
font-family: 'Roboto', sans-serif;
background: #fff;
border-radius: 5px;
width: 800px;
height: 760px;
padding: 69px 45px;
box-shadow: 0px 0px 16px 0 rgb(0 0 0 / 20%);
display: flex;
flex-direction: column;
justify-content: space-between;
`;
export default App;