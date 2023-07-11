import React, { useState } from 'react'
import { 
    ContainerLabel,
    ContainerOptions,
    LabelStyled,
    InputStyled,
    Paragraph,
    NextStepButton
} from '../StepStyled';

type Props = {
    numberStep: number;
    apelido: string;
    handleNumberStep: (arg: number) => void;
    SetApelido: React.Dispatch<React.SetStateAction<string>>;
}

const FirstStep = (props: Props) => {

    const [isInputValid, SetInputValid] = useState<boolean>(false)

    const ValidateInputFunction = (newValue: string) => {
        SetInputValid(newValue.length >= 4);
        props.SetApelido(newValue);
    }

    const ValidateNextStepButton = (isInputValid: boolean) => {
        if(isInputValid) {
            props.handleNumberStep(props.numberStep);
        }
    }

    return (
        <>
            <ContainerOptions>
                <p>Passo {props.numberStep + 1}/3</p>
                <h2>Coloque seu apelido</h2>
                <Paragraph>É o apelido de Ouro Preto viu amigo? 🤣</Paragraph>
            </ContainerOptions>
            <ContainerLabel>
                <LabelStyled>
                    <InputStyled type="text" value={props.apelido}  placeholder='Ex: Caralitico' onChange={(event) => ValidateInputFunction(event.target.value)}/>
                </LabelStyled>
            </ContainerLabel>
            <NextStepButton isValidate={isInputValid} onClick={() => ValidateNextStepButton(isInputValid)}>Próximo</NextStepButton>
        </>
    )
}

export default FirstStep