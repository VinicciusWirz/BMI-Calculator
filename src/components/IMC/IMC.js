import { IMCCalc, IMCWrapper, ListRef, Sheet } from "./styled"

export default function IMC(props) {
    return (
        <IMCWrapper>
            <IMCCalc>
                Seu IMC é: {props.BMIValue}
            </IMCCalc>
            <IMCRefSheet highlight={props.highlight} />
        </IMCWrapper>
    )
}

function IMCRefSheet({ highlight }) {
    return (
        <Sheet>
            <ListRef><span>IMC</span><span>Classificação</span><span>Grau</span></ListRef>
            <ListRef highlight={highlight === 1}><span>MENOR QUE 18,5</span><span>MAGREZA</span><span>0</span></ListRef>
            <ListRef highlight={highlight === 2}><span>ENTRE 18,5 E 24,9</span><span>NORMAL</span><span>0</span></ListRef>
            <ListRef highlight={highlight === 3}><span>ENTRE 25,0 E 29,9</span><span>SOBREPESO</span><span>I</span></ListRef>
            <ListRef highlight={highlight === 4}><span>ENTRE 30,0 E 39,9</span><span>OBESIDADE</span><span>II</span></ListRef>
            <ListRef highlight={highlight === 5}><span>MAIOR QUE 39,9</span><span>OBESIDADE GRAVE</span><span>III</span></ListRef>
        </Sheet>
    )
}