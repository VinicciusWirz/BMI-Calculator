import styled from "styled-components"
import { ButtonWrapper, Header, InputContent, InputsWrapper } from "./styled"


export default function Inputs(props) {
    return (
        <>
            <Header>
                Calculadora de IMC
            </Header>
            <div>
                <InputsWrapper>
                    <Height heightInput={props.heightInput} changeHeightInput={props.changeHeightInput} />
                    <Weight weightInput={props.weightInput} changeWeightInput={props.changeWeightInput} />
                </InputsWrapper>
                <Btns clear={props.clear} calculate={props.calculate} />
            </div>
        </>
    )
}

function Height(props) {
    return (
        <InputContent>
            <p>Altura</p>
            <input
                onChange={(e) => props.changeHeightInput(e.target.value)}
                value={props.heightInput}
                placeholder='Digite sua altura em metros'
                type='number'
            />
        </InputContent>
    )
}

function Weight(props) {
    return (
        <InputContent>
            <p>Peso</p>
            <input
                onChange={(e) => props.changeWeightInput(e.target.value)}
                value={props.weightInput}
                placeholder='Digite seu peso em kg'
                type='number'
            />
        </InputContent>
    )
}
function Btns({ clear, calculate }) {
    return (
        <ButtonWrapper>
            <button onClick={clear} >Limpar</button>
            <button onClick={calculate} >Calcular</button>
        </ButtonWrapper>
    )
}

