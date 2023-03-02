import { useState } from "react";
import styled from "styled-components";
import IMC from "./components/IMC/IMC";
import Inputs from "./components/Inputs/Inputs";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import Reset from "./GlobalStyles/Reset";

function App() {
  const [heightInput, setHeightInput] = useState('');
  const [weightInput, setWeightInput] = useState('');
  const [BMIValue, setBMIValue] = useState('-');
  const [BMIRefSelector, setBMIRefSelector] = useState(0);
  function changeHeightInput(e) {
    setHeightInput(e);
  }
  function changeWeightInput(e) {
    setWeightInput(e);
  }
  function clear() {
    setHeightInput('');
    setWeightInput('');
  }
  function calculate() {
    const newBMI = (weightInput / (heightInput ** 2)).toFixed(1).replace('.', ',');
    setBMIValue(newBMI);
    selectRef(newBMI);
  }
  function selectRef(newBMI){
    const myBMI = Number(newBMI.replace(',', '.'));
    if(myBMI < 18.5){
      setBMIRefSelector(1);
    }
    if(myBMI >= 18.5 && myBMI < 24.9){
      setBMIRefSelector(2);
    }
    if(myBMI >= 25 && myBMI < 29.9){
      setBMIRefSelector(3);
    }
    if(myBMI >= 30 && myBMI <= 39.9){
      setBMIRefSelector(4);
    }
    if(myBMI > 39.9){
      setBMIRefSelector(5);
    }
  }
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Main>
        <Inputs
          heightInput={heightInput}
          changeHeightInput={changeHeightInput}
          changeWeightInput={changeWeightInput}
          weightInput={weightInput}
          clear={clear}
          calculate={calculate}
        />
        <IMC BMIValue={BMIValue} highlight={BMIRefSelector}/>
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