import React from 'react';
import api from '../../../services/axiosConfig';
import { Link } from 'react-router-dom';
import {
    ContainerLabel,
    ContainerOptions,
    LabelStyled,
    InputStyled,
    NextStepButton,
} from '../StepStyled';
import { useAuth } from '../../../context/AuthProvider/useAuth';

type Props = {
    numberStep: number;
    apelido: string;
    curso: string;
    email: string;
    password: string;
    SetPassword: React.Dispatch<React.SetStateAction<string>>
}

const ThirdStep = (props: Props) => {

    const auth = useAuth();

    const [firstInputPassword, SetFirstInputPassword] = React.useState<string>('x');
    const [secondInputPassword, SetSecondInputPassword] = React.useState<string>('d');
    const [isInputValid, SetInputValid] = React.useState<boolean>(false)

    const FirstLabeLPassword = (password: string) => {
        SetFirstInputPassword(password)
    }

    const SecondLabelPassword = (password: string) => {
        SetSecondInputPassword(password);
        props.SetPassword(password);

        if(firstInputPassword === password && firstInputPassword != '' && password != '') {
            SetInputValid(true);
        } else {
            SetInputValid(false)
        }
    }

    const registerSubmit = async () => {
        await api.post('/user', {
            name: props.apelido,
            curso: props.curso,
            email: props.email,
            password: props.password
        }).then(() => {
            console.log('Cadastro feito com sucesso!');
        }).catch((err) => {
            console.log(`${err}`);
        });
        
        await auth.authenticate(props.email, props.password);
    };

    return (
        <>
            <ContainerOptions>
                <p>Passo {props.numberStep + 1}/3</p>
                <h2>Defina uma senha pro acesso 🔒</h2>
            </ContainerOptions>
            <ContainerLabel>
                <LabelStyled>
                    Digite sua senha
                    <InputStyled type="password" autoFocus placeholder='*********' onChange={(event) => FirstLabeLPassword(event.target.value)} />
                </LabelStyled>
                <LabelStyled>
                    Confirme sua senha
                    <InputStyled type="password" placeholder='*********' onChange={(event) => SecondLabelPassword(event.target.value)}/>
                </LabelStyled>
            </ContainerLabel>
            <Link to="/sabatina">
                <NextStepButton isValidate={isInputValid} onClick={() => registerSubmit()}>Concluir cadastro</NextStepButton>
            </Link>
        </>
    )
}

export default ThirdStep