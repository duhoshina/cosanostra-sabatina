import React, { useState } from 'react'

import { 
    ContainerLabel,
    ContainerOptions,
    LabelStyled,
    InputStyled,
    NextStepButton,
} from '../StepStyled';

type Props = {
    numberStep: number;
    curso: string;
    email: string;
    handleNumberStep: (arg: number) => void;
    SetEmail: React.Dispatch<React.SetStateAction<string>>;
    SetCurso: React.Dispatch<React.SetStateAction<string>>;
}

const SecondStep = (props: Props) => {

    const [isInputValid, SetInputValid] = useState<boolean>(false);
    const [cursoInputValid, SetCursoInputValid] = useState<boolean>(false);
    const [emailInputValid, SetEmailInputValid] = useState<boolean>(false);

    const verifyValidateCurso = (newValue: string) => {
        SetCursoInputValid(newValue.length >= 5);
        props.SetCurso(newValue);
        VerifyStepButton();
    }

    const VerifyStepButton = () => {
        if(cursoInputValid && emailInputValid) {
            SetInputValid(true);
        } else {
            SetInputValid(false);
        }
    }

    const verifyValidateEmail = (newValue: string) => {
        VerifyStepButton();
        props.SetEmail(newValue);

        const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if(emailRegex.test(newValue)) {
            SetEmailInputValid(true);
        VerifyStepButton();

        } else {
            SetEmailInputValid(false);
        }

    }

    const ValidateNextStepButton = (isInputValid: boolean) => {
        if(isInputValid) {
            props.handleNumberStep(props.numberStep);
        }
    }

    const PressEnterButton = (event: any) => {
        if(event.key === '13') {
            ValidateNextStepButton(isInputValid);
        }
    }

    return (
        <>
            <ContainerOptions>
                <p>Passo {props.numberStep + 1}/3</p>
                <h2>Que curso você tá fazendo na UFOP? 👨‍🎓</h2>
            </ContainerOptions>
            <ContainerLabel>
                <LabelStyled>
                    Digite seu curso
                    <InputStyled type="text" autoFocus required placeholder='Ex: Farmácia' onChange={(event) => verifyValidateCurso(event.target.value)} />
                </LabelStyled>
                <LabelStyled>
                    Digite seu e-mail
                    <InputStyled type="email" required placeholder='example@gmail.com.br' onChange={(event) => verifyValidateEmail(event.target.value)} />
                </LabelStyled>
            </ContainerLabel>
            <NextStepButton onKeyDown={PressEnterButton} isValidate={isInputValid} onClick={() => ValidateNextStepButton(isInputValid)}>Próximo</NextStepButton>
        </>
    )
}

export default SecondStep