import styled from "styled-components"
import { ButtonWrapper, Header, InputContent, InputsWrapper } from "./styled"


export default function Inputs() {
    return (
        <>
            <Header>
                Calculadora de IMC
            </Header>
            <div>
            <InputsWrapper>
                <Height />
                <Weigth />
            </InputsWrapper>
            <Btns />
            </div>
        </>
    )
}

function Height() {
    return (
        <InputContent>
            <p>Altura</p>
            <input type='number'/>
        </InputContent>
    )
}

function Weigth() {
    return (
        <InputContent>
            <p>Peso</p>
            <input type='number'/>
        </InputContent>
    )
}
function Btns() {
    return (
        <ButtonWrapper>
            <button>Limpar</button>
            <button>Calcular</button>
        </ButtonWrapper>
    )
}

