import { IMCCalc, IMCWrapper, Sheet } from "./styled"

export default function IMC() {
    return (
        <IMCWrapper>
            <IMCCalc>
                Seu IMC é: 21.45
            </IMCCalc>
            <IMCRefSheet />
        </IMCWrapper>
    )
}

function IMCRefSheet() {
    return (
        <Sheet>
            <li><span>IMC</span><span>Classificação</span><span>Grau</span></li>
            <li><span>MENOR QUE 18,5</span><span>MAGREZA</span><span>0</span></li>
            <li><span>ENTRE 18,5 E 24,9</span><span>NORMAL</span><span>0</span></li>
            <li><span>ENTRE 25,0 E 29,9</span><span>SOBREPESO</span><span>I</span></li>
            <li><span>ENTRE 30,0 E 39,9</span><span>OBESIDADE</span><span>II</span></li>
            <li><span>MAIOR QUE 39,9</span><span>OBESIDADE GRAVE</span><span>III</span></li>
        </Sheet>
    )
}